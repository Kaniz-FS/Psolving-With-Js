const num = [2, 67, 30, 51, 89, 126, 23, 78];
num.sort();
console.log(num);

<<<<<<< HEAD
// When sorting an array of numbers in JavaScript without a compare function, it behaves like sorting strings — it compares values character by character from left to right. That’s why, for example - 126 will come before 2, because the first digit 1 is smaller than 2. To sort numbers correctly in ascending or descending order, we need to use a compare function in sort().
=======
// When sorting an array of numbers in JavaScript without a compare function, 
// it behaves like sorting strings — it compares values character by character 
// from left to right. That’s why, for example - 126 will come before 2, because 
// the first digit 1 is smaller than 2. To sort numbers correctly in ascending or
// descending order, we need to use a compare function in sort().

>>>>>>> 9f9e60e8a569356c4349d34d43bb968fb403d57e

//for ascending sort

const numb = [3, 5, 98, 236, 125, 56, 74];
const ascenSort = numb.sort(function (a, b) {
  return a - b;
});
console.log(ascenSort);

//for descending sort

const ages = [44, 22, 53, 19, 14];
const descenSort = ages.sort(function (a, b) {
  return b - a;
});
console.log(descenSort);
