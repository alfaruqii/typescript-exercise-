"use strict";
let myName = "alfaruqi";
let yourName = "zahra";
let temen1 = {
    name: "Dika",
    gender: "lelaki",
    hutang: 40000000
};
let absens = 123; //usually use "number" instead of "Number" and also "String" use "String"
//array
let data = ["hehe"];
let newData = ["haloo", 10];
//function
function callMe(x, y) {
    let a = x;
    let b = y;
    let z = a + b;
    console.log(z);
}
let callMyName = () => {
    //if i return myName that i have type "String" not "string" it will have an error
    return yourName;
};
console.log(myName);
console.log(callMyName());
callMe(4, 5);
console.log({ temen1 });
console.log({ absens });
console.log({ myName });
console.log(data);
console.log(newData);
