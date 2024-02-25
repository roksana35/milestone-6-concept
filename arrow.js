// normal way 
function add (x,y){
    return x+y;
}

// arrow function
const add2 = (x,y)=>{
    const a = x+y;
    return a;
}
const add3 = x =>x*2;
const sayHello = ()=>console.log('hello friends');
sayHello();
console.log(add3(3));