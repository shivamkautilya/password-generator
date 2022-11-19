const pwdKeywords = {
  capitalAlphabets: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],

  smallAlphabets: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  symbols: ["!", "@", "#", "$", "&", "?"],
};
const allKeyWords = [
  ...pwdKeywords.capitalAlphabets,
  ...pwdKeywords.smallAlphabets,
  ...pwdKeywords.numbers,
  ...pwdKeywords.symbols,
];
const alphabetKeyWords = [
  ...pwdKeywords.capitalAlphabets,
  ...pwdKeywords.smallAlphabets,
];
const alphaNumericKeyWords = [...alphabetKeyWords, ...pwdKeywords.numbers];
const numericKeyWords = [...pwdKeywords.numbers];

//FUNCTIONS
//Generate random number between given password digit limit.
let digit = 8;
digit = parseInt(digit);
function randomDigit(keywordsLength) {
  return Math.trunc(Math.random() * keywordsLength);
}
//password generator function
function passwordGenerator(whichKeyWords) {
  let pwdGenerated = [];
  for (let i = 1; i < digit + 1; i++) {
    // pwdGenerated = allKeyWords[randomDigit(allKeyWords.length)];
    pwdGenerated.push(whichKeyWords[randomDigit(whichKeyWords.length)]);
  }
  return pwdGenerated.join("");
}
