'use strict'

function solveEquation(a, b, c) {
  let arr;

  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr = [-b / (2 * a)];
  } else {
    arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
