
let numbers = [1,2,4,5,6,7];

// let number1 = numbers;
let number1 = [...numbers];
number1.push(10,20);
// console.log('numbers:',numbers)
// console.log('number1:',number1)

// Destracture
let nums = [4,3,5,6,2,8,9];
// let a = nums[0];
// let b = nums[1];
// let c = nums[2];

let [a,b,c,...d] =nums;

console.log(a,b,c,d)