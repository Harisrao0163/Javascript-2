// const useremail = "h@gmail.com"

// if (useremail) {
//     console.log("matched");
// } else {                             // it just assumes the value that the value is present or not and gives the result..........
//     console.log("not matched");
    
// }
const useremail = []

if (useremail) {
    console.log("matched");
} else {                            // the reason is that there are some values like truthy and falsy...except falsy values all the values are truthy...
    console.log("not matched");
    
}

// Falsy values..............
// false , 0 , -0 , "" , undefined , null , BigInt 0n , NaN.   these are all falsy values..
// false == 0
true
// 0 == ""
true
// "" == ''
true

// some surprising truthy values.....
// "0" , 'false' , " " , function(){} , [] , {}

// Now, How to detect the array is empty or not...

if (useremail.length=== 0) {
    console.log("array is empty");
    
}

// How to detect the object is empty or not......

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");        // here, this portion is shown as array =>  "Object.keys(emptyobj)"
    
}

