// function show (){
//     console.log('Roksana Akter');
// }
// function fun1(age,back){
//     console.log('age:',age);
//     // back();
// }
// fun1(22,show())
// function show (age,name){
//     console.log('my name is:',name,'and i am',21,"years old");
// }
// function fun1(age,name,back){
//     console.log('hello friend');
//     // back();
// }
// fun1(21,'roksana',show())
function show (name,age){
    console.log('my name is:',name,'and i am',21,"years old");
}
function fun1(name,age,callback){
    console.log('hello friend');
    callback(name,age);
}
fun1('roksana',21,show)