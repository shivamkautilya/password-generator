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
const allKeyWords = shuffle([
  ...pwdKeywords.capitalAlphabets,
  ...pwdKeywords.smallAlphabets,
  ...pwdKeywords.numbers,
  ...pwdKeywords.symbols,
]);
const alphabetKeyWords = [
  ...pwdKeywords.capitalAlphabets,
  ...pwdKeywords.smallAlphabets,
];
const numericKeyWords = [...pwdKeywords.numbers];
const alphaNumericKeyWords = shuffle([
  ...alphabetKeyWords,
  ...pwdKeywords.numbers,
]);

//FUNCTIONS
//Generate random number between given password digit limit.
let digit = 8;
digit = parseInt(digit);
function randomDigit(keywordsLength) {
  return Math.trunc(Math.random() * keywordsLength);
}
//password generator function
function passwordGenerator(whichKeyWords, passwordLength) {
  let pwdGenerated = [];
  for (let i = 1; i < digit + 1; i++) {
    // pwdGenerated = allKeyWords[randomDigit(allKeyWords.length)];
    pwdGenerated.push(whichKeyWords[randomDigit(whichKeyWords.length)]);
  }
  return pwdGenerated.join("");
}
//shuffle keywords function
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

//DOM MANIPULATION
const pwdGenerated = document.getElementById("generated-pwd");
const pwdLength = document.getElementById("pwd-length");
const alphabetic = document.getElementById("alphabetic");
const numeric = document.getElementById("numeric");
const alphanumeric = document.getElementById("alphanumeric");
const allCharacters = document.getElementById("all-characters");
let pwdOutput;
//Default Values when reloaded
pwdGenerated.value = passwordGenerator(allKeyWords, digit);
pwdLength.value = 8;
//function to check pwd-type
function checkPwdType() {
  if (alphabetic.checked) {
    return alphabetKeyWords;
  } else if (alphanumeric.checked) {
    return alphaNumericKeyWords;
  } else if (numeric.checked) {
    return numericKeyWords;
  } else if (allCharacters.checked) {
    return allKeyWords;
  }
}
//PWD Length
function increaseValue() {
  var value = parseInt(pwdLength.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  pwdLength.value = value;
}

function decreaseValue() {
  var value = parseInt(pwdLength.value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  pwdLength.value = value;
}
//Onclick Events
//password length onchange function
function pwdLengthChange() {
  digit = parseInt(pwdLength.value);
  console.log(
    "Pwd Length Value is changed.",
    `Password Length = ${pwdLength.value}`
  );
  pwdGenerated.value = passwordGenerator(checkPwdType(), digit);
}
alphabetic.addEventListener("change", function () {
  if (this.checked) {
    pwdOutput = pwdGenerated.value = passwordGenerator(alphabetKeyWords, digit);
  }
});
numeric.addEventListener("change", function () {
  if (this.checked) {
    pwdOutput = pwdGenerated.value = passwordGenerator(numericKeyWords, digit);
  }
});
alphanumeric.addEventListener("change", function () {
  if (this.checked) {
    pwdOutput = pwdGenerated.value = passwordGenerator(
      alphaNumericKeyWords,
      digit
    );
  }
});
allCharacters.addEventListener("change", function () {
  if (this.checked) {
    pwdOutput = pwdGenerated.value = passwordGenerator(allKeyWords, digit);
  }
});
