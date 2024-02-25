let x = 5;
let y = [1,3,5,9,15];

const modify = x =>{
    x = x+2;
    return x;
    console.log(x);
}
 const result =modify(x);
// console.log(x);
// console.log(result);
const modify2 = x =>{
    x.push(20);
    console.log(x);
}
modify2(y);
console.log(y)
