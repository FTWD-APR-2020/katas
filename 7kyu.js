// 7kyu - Flatten and sort an array
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

//soltion1
"use strict";
function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.reduce((acc, value) => {
    return acc
      .concat(Array.isArray(value) ? flattenAndSort(value) : value)
      .sort((a, b) => a - b);
  }, []);
}

// solution2
const flattenAndSort = (array) => [].concat(...array).sort((a, b) => a - b);

// solution3
("use strict");
function flattenAndSort(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      newArr.push(array[i][j]);
    }
  }
  return newArr.sort((a, b) => a - b);
}
