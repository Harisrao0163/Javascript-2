const temperature = 60

// if (temperature < 50){
//       console.log("true");
// } else {
//     console.log(false);
    
// }
// console.log("yes,true");

const score = 200

// if(score > 100){
//       var power ="fly" 
//       console.log(`user power: ${power}`);
      
// }
// console.log(`user power: ${power}`);// now it shows bcz, var defines as global...

// if(score > 100){
//     let power ="fly" 
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power: ${power}`);// now, it does not defines the outer value of log bcz of let/const.....

const balance = 1000

// if (balance > 500) console.log("true");// this another method to express the if value....this is also known as implicit scope...


// if (balance < 500) {
//     console.log("true");
// } else if(balance  < 750){
//     console.log("true");              // this all code is for multiple checking.....
// } else if(balance < 900){
// } else{
//     console.log("equal to 1000");
// }

// real life example............

const userloggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitcard ) {
   // console.log("Allow to Access"); // this is called AND operator....
}

if (loggedInFromEmail || loggedInFromGoogle) {
   // console.log("user logged in");     // this is called OR operator........
    
}

// Another operator is Nullish coalescing operator (??); Null , Undefined.

let val1;
val1 = 5 ?? 10    // it will gives us the first value.....
val1 = null ?? 10  // now, it gives us the second value to removes the error from code...agr kisi waja sy value 0 ajye ya null ho then ,
// it will assign the second value.....
val1 = undefined ?? 20 // same as above....
val1 = null ?? 10 ?? 30 // now this will assign the first value...this all the process is used for Errors Handeling.....

console.log(val1);

// Another is Terniary Operator....
// condition ? true : false

const iceprice= 100
iceprice >= 80 ? console.log("true"): console.log("false");


