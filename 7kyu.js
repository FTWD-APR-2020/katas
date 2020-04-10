<<<<<<< HEAD


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
  
=======
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
>>>>>>> 63c7a565c11005d6fd2276279b08a25922f284e7
