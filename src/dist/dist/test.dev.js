"use strict";

console.log(6.35.toFixed(1));

function readNumber() {
  var number;

  while (!number && isNaN(number)) {
    number = prompt("Введите число", "");
    if (number == null) return null;
  }

  return number;
}