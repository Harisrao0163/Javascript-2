// primitive type...
// string,Number,Boolean,bigint,symbol,null,undefined.

const score= 100
const scorevalue= 100.3

const isloggedin= false
let userEmail;
const outsidetemp=null
 
const id= Symbol('123');
const anotherid= Symbol('123');

// console.log( id === anotherid);

const bigNumber= 42346432342354321436n

// reference type (non-primitive type)....
// Array,Objects,Functions.
const names=["haris","owais","Ahmad"]
let myobj={
    name:"haris",
    age: 22
}
const myFunction = function(){
    console.log("Hello World"); 
}
console.log(typeof outsidetemp);

// https://262.ecma-international.org/5.1/#sec-11.4.3
// *************stack and heap examples********************


let myzindagidot = "harisdotcom"

let anothername = myzindagidot
anothername= "chaiaurcode"

console.log(myzindagidot);
console.log(anothername);

let userOne = {
    email: "haris@google.com",
    easypaisa:"hi@.com"
}
let userTwo = userOne

userTwo.email="owais@google.com"
console.log(userOne.email);
console.log(userTwo.email);





