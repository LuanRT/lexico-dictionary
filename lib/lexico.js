var axios = require("axios");
var cheerio = require("cheerio");
var UserAgent = require("user-agents");

var search = (query) => {
  var userAgent = new UserAgent();

  var meanings = [];
  var examples = [];
  var sense_registers = [];
  var final_data = [];
  var search_query = query.trim().split(/ +/).join("-").toLowerCase();
  var lexico_base_url = `https://www.lexico.com/en/definition/${search_query}`;

  return new Promise((resolve, reject) => {
    axios
    .get(lexico_base_url, {
      headers: {
        "User-Agent": userAgent,
      },
    })
    .then((res) => {
      var $ = cheerio.load(res.data);
      var audio = $($("audio")[0]).attr('src') || 'n/a';

      var origin_selector = getStringBetweenStrings(res.data, '<strong>Origin</strong></h3><div class="senseInnerWrapper"><p>', '</p>');
      var origin = (origin_selector ? origin_selector.split(/</g)[0].split(';')[0].split(':')[0]: 'n/a').replace('(see ', '').trim();

      var pos = $($('span[class="pos"]')[0]).text().trim() || undefined;
      var inflection = $($('span[class="inflection-text"] > span')).text() || undefined;

      var phonetic_spelling = $($('span[class="phoneticspelling"]')[0]).text() || 'n/a';

      $('span[class="sense-registers"]').each(function (i, el) {
        sense_registers.push($(el).text().trim());
      });

      $('span[data-no-definition="[]"]').each(function (i, el) {
        meanings.push({
          value: $(el).text(),
          type: sense_registers[i - 1] || 'n/a',
        });
      });

      $("div > em").each(function (i, el) {
        examples.push($(el).text());
      });

      final_data = {
        phonetic: phonetic_spelling,
        pos: (pos ? pos + (inflection ? " (" + inflection + ")": ''): 'n/a').trim(),
        audio: audio,
        origin: origin,
        meanings: meanings,
        examples: examples,
        url: lexico_base_url
      };

      resolve(final_data);
    })
    .catch((err) => reject(err));
  });
};

function getStringBetweenStrings(data, startString, endString) {
  var regex = new RegExp(`${escapeStringRegexp(startString)}(.*?)${escapeStringRegexp(endString)}`, 's');
  var match = data.match(regex);
  return match ? match[1]: undefined;
}

function escapeStringRegexp(string) {
  return string
  .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
  .replace(/-/g, '\\x2d');
}

module.exports = {
  search
};