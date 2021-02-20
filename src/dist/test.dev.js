"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readNumber = readNumber;
console.log(6.35.toFixed(1));

function readNumber() {
  var number = false;

  while (number !== true && isNaN(number)) {
    number = prompt("Введите число", "");
    if (number == null) return null;
  }

  return number;
}