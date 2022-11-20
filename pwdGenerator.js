"use strict";
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
const numericKeyWords = [...pwdKeywords.numbers];
const alphaNumericKeyWords = [...alphabetKeyWords, ...pwdKeywords.numbers];

//FUNCTIONS
//Generate random number between given password digit limit.
let digit = 10;
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

//DOM MANIPULATION
const pwdGenerated = document.getElementById("generated-pwd");
const pwdLength = document.getElementById("pwd-length");
const alphabetic = document.getElementById("alphabetic");
const numeric = document.getElementById("numeric");
const alphanumeric = document.getElementById("alphanumeric");
const allCharacters = document.getElementById("all-characters");
const increasePwdLength = document.getElementById("increase");
const resetPassword = document.getElementById("reset-pwd");
const copyToClipboard = document.getElementById("copy");
const pwdRating = document.querySelector(".pwd-rating");
let pwdOutput;
const pwdGeneratedStyle = document.querySelector(".generated-pwd-style");
//Default Values when reloaded
pwdGenerated.value = passwordGenerator(allKeyWords, digit);
pwdLength.value = parseInt(digit);
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
  pwdLength.value = parseInt(value);
}

function decreaseValue() {
  var value = parseInt(pwdLength.value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  pwdLength.value = parseInt(value);
}
// to give pwd-rating
function showPwdRating() {
  if (digit >= 10) {
    pwdRating.textContent = "Very Strong Password";
    // pwdGeneratedStyle.classList.add("very-strong");
  } else if (digit >= 6) {
    pwdRating.textContent = "Fairly Strong Password";
    // pwdGeneratedStyle.classList.replace("very-strong", "fairly-strong");
  } else if (digit < 6) {
    pwdRating.textContent = "Weak Password";
    // pwdGeneratedStyle.classList.replace("fairly-strong", "weak");
  }
}

//Onclick Events
//reset password
resetPassword.addEventListener("click", function () {
  pwdGenerated.value = passwordGenerator(checkPwdType(), digit);
  console.log(showPwdRating());
});
//copy to clipboard
copyToClipboard.addEventListener("click", function () {
  {
    var copyText = pwdGenerated;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    // console.log("Copied the text: " + copyText.value);
  }
});
//Password length when enter key pressed
pwdLength.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    digit = parseInt(pwdLength.value);
    pwdGenerated.value = passwordGenerator(checkPwdType(), digit);
    showPwdRating();
  }
});
//password length onchange function
function pwdLengthChange() {
  digit = parseInt(pwdLength.value);
  console.log(
    "Pwd Length Value is changed.",
    `Password Length = ${pwdLength.value}`
  );
  pwdGenerated.value = passwordGenerator(checkPwdType(), digit);
  showPwdRating();
}
alphabetic.addEventListener("change", function () {
  if (this.checked) {
    pwdOutput = pwdGenerated.value = passwordGenerator(alphabetKeyWords, digit);
    showPwdRating();
  }
});
numeric.addEventListener("change", function () {
  if (this.checked) {
    pwdOutput = pwdGenerated.value = passwordGenerator(numericKeyWords, digit);
    showPwdRating();
  }
});
alphanumeric.addEventListener("change", function () {
  if (this.checked) {
    pwdOutput = pwdGenerated.value = passwordGenerator(
      alphaNumericKeyWords,
      digit
    );
    showPwdRating();
  }
});
allCharacters.addEventListener("change", function () {
  if (this.checked) {
    pwdOutput = pwdGenerated.value = passwordGenerator(allKeyWords, digit);
    showPwdRating();
  }
});
