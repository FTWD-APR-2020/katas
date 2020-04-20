// 6 kyu
// unique in order - https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  return [...iterable].filter((item, index, arr) => item !== arr[index + 1]);
};

function christmasTree(height) {
  //   let xmasT = '';
  //   for(let i = 0; i<height; i++) {
  //     for(let j = 0; j < (height -i -1); j++) {
  //       xmasT+= " ";
  //     }
  //     for(let k = 0; k < (2*i+1); k++) {
  //       xmasT+="*";
  //     }
  //     for(let r = 0; r < (height -i -1); r++) {
  //       xmasT+= " ";
  //     }
  //     if(i !== height-1) {
  //       xmasT += '\n';
  //     }
  //   }
  //   return xmasT;
  return [...new Array(height).keys()]
    .map((row, i) => row + i + 1)
    .reverse()
    .map((row, i) => " ".repeat(i) + "*".repeat(row) + " ".repeat(i))
    .reverse()
    .join("\n");
}

// https://www.codewars.com/kata/5a1dc4baffe75f270200006b
function onlyDuplicates(str) {
  // your code here

  aaaccccabc; // 0 8 - a
  //  0 !== 8 -> true
  // 9 !== 9 -> false
  return str
    .split("")
    .filter((e) => str.indexOf(e) !== str.lastIndexOf(e))
    .join("");
}
