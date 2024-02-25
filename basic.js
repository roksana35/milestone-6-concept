// primitive datatype
let a = 5;
let b = 8;
let c = a;
    c =10;
// console.log('a =',a);
// console.log('c =',c);

// non-primitive
const x = {name:'Roksana'};
const y = [1,3,5,7,8];
const z = x;
z.age=21;
// console.log('x =',x);
// console.log('z =',z)
const r = y;
// console.log(r);
// console.log(y);

r.push(9,10,12);

// console.log('y =',y);
// console.log('r =',r)

// truthy & false value
// false => false,"",0,null,undefined,NaN
// true => true,1,string,number,{},[]

const value = 0;
console.log(!!value);