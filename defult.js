// const add =(x=0,y=0)=>{
//     return x+y;

// }
// const res = add ();
// console.log(res)

const person ={
    name:'Roksana',
    age:21,
}
// const showInfo=(prom)=>{
//     const {name,age}=prom;
//     console.log(name,age)
// }
const showInfo=({name,age})=>{
    
    console.log(name,age)
}
showInfo(person)