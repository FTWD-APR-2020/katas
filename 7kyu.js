

// solution 1
// this function replaces all the vowels within a string
// replace - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace 
// regular expressions RegExp - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
function disemvowel(str) {
  let regex = /[aeiou]/gi
    str = str.replace(regex, "");  // used regex and replace to remove the vowels
    return str;
  }
  
  // solution 2
  const disemvowel = (str) => str.replace(/[aeiou]/gi, "");
  
  // solution 3
  // charAt - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
  // indexOf - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  // toLowercase - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
  const disemvowel = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';
    
    for (let i = 0; i <= str.length; i++) { // interate through the string
      if (vowels.indexOf(str.charAt(i).toLowerCase()) == -1)  // check if the current character exist in the vowels array
        newStr += str.charAt(i);       // if it doesn't exist then add it to the new string
    }
    return newStr;
  }
  
  // solution 4
  // split - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  // filter - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // includes - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  // toLowerCase - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
  // join - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  function disemvowel(str) {
    let vowels = "aeiou";
    let strArr = str.split("");   // turn string into array
    let filterArr = strArr.filter(letter => {
      return !vowels.includes(letter.toLowerCase());  // if the letter is not found in vowels then add it to the filterArr
    });
    let newStr = filterArr.join("")
    
    return newStr;
  }
  
  // solution 4.1
  const disemvowel = str => str.split('').filter(letter => !"aeiou".includes(letter.toLowerCase())).join('');
  







/**
 * Square Every Digit
 * https://www.codewars.com/kata/546e2562b03326a88e000020
 */
// Solution 1
// toString - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
// join - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join 
function squareDigits(num){
  let string = num.toString();  // turn number to a string
  let results = [];             // create an array to save the new values of the string
  for (let i = 0; i < string.length; i++){  // iterate through the string
      results[i] = string[i] * string[i];   // save the square of the number to the array 
  }
  return Number(results.join(''));    // turn the array into a string and then into a number
}

// Solution 2 
// parseInt - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt 
// split - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split 
// map - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map  
function squareDigits(num){
  let array = num.toString().split('').map( function(int) {   // turn number to string then make string to array then use map to return the square of each number
    let i = parseInt(int);
    return i * i;
  });
  
  return parseInt(array.join("")); // turn the array into a string and then a number
}

// Solution 3 
function squareDigits(num){
  let result = num
    .toString()                     // turn number to string
    .split("")                      // turn string into array
    .map( num => parseInt(num) )    // map each index and return a number, now you have a number array
    .map( num => num * num )        // map the number array and return the square of each number
    .join("")                       // turn the number array into a string
   
  return parseInt(result)           // turn the string into a number
}

// Solution 4 - The Victor
const squareDigits = num => parseInt(num.toString().split("").map(num => parseInt(num)).map(num => num * num).join(""))

// Solution 5
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
function squareDigits (num) {
  let x = num.toString().split('').map(Number); 
  x.forEach((element, i) => x[i] = element * element);
  return Number(x.join(''));
}







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
