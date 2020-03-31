// 8kyu - Sum of Positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// solution 1
function positiveSum(arr){
  let sum = 0;
  for(const number in arr){
    if(arr[number] > 0){
      sum += arr[number];
    }
  }
  return sum;
}

// solution 2
function positiveSum(arr){
  for(var i=0, count=0; i<=arr.length; i++){
    if(arr[i] >= 0){
      count += arr[i]
    }
  }
  return count;
}

// solution 3
function positiveSum(arr) {
  let sum = 0;
  for(const number of arr){
  console.log(number)
    if(number > 0){
      sum += number;
    }
  }
  return sum;
}

// solution 4
function positiveSum(arr) {
  let sum = 0;
  for(const number in arr){
    if(arr[number] > 0){
      sum += arr[number];
    }
  }
  return sum;
}


// solution 5
// filter - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
// reduce - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// reduce - https://alligator.io/js/finally-understand-reduce/  
function positiveSum(arr){
return arr
      .filter(positivenumbers => positivenumbers > 0)
      .reduce((a,b) => a + b, 0);
}

// // reduce example
// const array1 = [1, 2, 3, 4];
// const total = array1.reduce((sum, currentValue) => {
//   console.log(`sum: ${sum} currentValue: ${currentValue}`)
//   return sum + currentValue;
//   }, 0)
// console.log(total);

// solution 6
// ternary operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator  
function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
