var c = 300// the values outside the "if else" condition,this is called global scope..
let a = 200
if (true) {
    let a = 10// the values in a curly brackets are known as block scope...
    const b = 20
    var c = 30// if we reomve this value then the uper value known as global scope will show...
    console.log("inner: ",a);// this shows the inside value of "a" of block scope....
    
}

console.log(a);
// console.log(b);
// console.log(c);

// the checking of global scope in windows through inspect method is not same as by node method in VSCODE...both methods of checking are different.....
