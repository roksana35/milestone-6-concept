const numbers =[10,20,30,40,50];
for (const nums of numbers) {
    // console.log(nums)
}
// const a = numbers.forEach(item =>console.log(item))
// console.log(a);
const b = numbers.map(item =>item+1);
// console.log(numbers)
// console.log(b);
const c = numbers.find(item =>item>20);
const c1 = numbers.find(item =>item>200);
// console.log(c1)
const numbers2 =[10,21,30,41,50,63,70,67];
const d = numbers2.filter(x => x%2 ===0);
// console.log(d);
const  num = [1,2,3,4,5];
const sum =num.reduce((prevalue,currentValue)=>prevalue+currentValue,0);
console.log(sum);

