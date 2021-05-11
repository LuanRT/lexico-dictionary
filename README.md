# Lexico Dictionary

[![Build](https://github.com/LuanRT/lexico-dictionary/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/LuanRT/lexico-dictionary/actions/workflows/node.js.yml)

A module that scrapes lexico.com to get the meanings of almost any word plus audio and examples. The lexico website does not change very often so this module should be very stable for now.

## Installation

```bash
npm install lexico-dictionary
```

## Usage

```js
var lexico = require("lexico-dictionary");

lexico
  .search("great")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
```

#### Output:

```js
{
  phonetic: '/ɡrāt/',
  pos: 'adjective',
  audio: 'https://lex-audio.useremarkable.com/mp3/great_us_1.mp3',
  origin: 'Old English grēat ‘big’, of West Germanic origin',
  meanings: [
    {
      value: 'Of an extent, amount, or intensity considerably above the normal or average.',
      type: 'n/a'
    },
    { value: 'Very large and imposing.', type: 'informal' },
    {
      value: '(of a city) including adjacent urban areas.',
      type: 'informal'
    },
    {
      value: 'Of ability, quality, or eminence considerably above the normal or average.',
      type: 'informal'
    },
    {
      value: 'A title denoting the most important person of the name.',
      type: 'dated'
    },
    { value: 'Very good or satisfactory; excellent.', type: 'n/a' },
    {
      value: '(of a person) very skilled or capable in a particular area.',
      type: 'n/a'
    },
    {
      value: 'Used to indicate that someone or something particularly deserves a specified description.',
      type: 'n/a'
    },
    {
      value: 'Denoting the element of something that is the most important or the most worthy of consideration.',
      type: 'n/a'
    },
    {
      value: 'Used to reinforce another adjective of size or extent.',
      type: 'n/a'
    },
    {
      value: 'Used to express surprise, admiration, or contempt, especially in exclamations.',
      type: 'n/a'
    },
    {
      value: '(in names of family relationships) denoting one degree further removed upward or downward.',
      type: 'n/a'
    },
    { value: 'An important or distinguished person.', type: 'n/a' },
    { value: 'Excellently; very well.', type: 'n/a' },
    {
      value: 'A person who habitually does or is enthusiastic about something.',
      type: 'n/a'
    },
    { value: 'Expressing surprise or amazement.', type: 'n/a' },
    { value: 'In a substantial way; largely.', type: 'n/a' },
    { value: 'Of all sizes, classes, or types.', type: 'n/a' }
  ],
  examples: [
    '‘the article was of great interest’',
    '‘a great ocean between them’',
    '‘The Great Tit has all the characters of the other Parus species and is unmistakable given its large, robust size, relatively heavy bill and domed head.’',
    '‘Greater Cleveland’',
    '‘the great Italian conductor’',
    '‘Alexander the Great’',
    "‘I was a great fan of Hank's’",
    '‘the great thing is the challenge’',
    '‘a great big grin’',
    '‘you great oaf!’',
    '‘great-aunt’',
    '‘the Beatles, Bob Dylan, all the greats’',
    '‘Never in the strict sense of the word a clever man - even by the academic standard (he took only a third in Mods. and a second in Greats, and worked hard for them, too) - he became an extraordinarily well-educated one.’',
    '‘my father was a great one for buying gadgets’',
    '‘Great Scott! You scored two hundred and seventy-three!’',
    '‘we are all to a great extent the product of our culture’',
    '‘all creatures great and small’'
  ],
  url: 'https://www.lexico.com/en/definition/great'
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
