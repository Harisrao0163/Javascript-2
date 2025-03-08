const user ={
    username: "Haris",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);// this shows that "this" tells us about thw current context or current values...        
        
    }
}
user.welcomemessage()    // this gives us the simple values...
user.username = "samm"    // Now, the value has been changed...
user.welcomemessage()

console.log(this);      // this gives us the Empty value"{}"......when any engine runs in a browser then the global object is "Window".....

// function chai(){
//     let username= "Haris"
//     console.log(this.username);            // Now,"this" will not work in a "function"......
// }
// chai()



// const chai = function(){
//     let username= "Haris"
//     console.log(this.username);// this method will not work.....
// }
// chai()



const chai = () => {
    let username= "Haris"        // Now,simply remove the keyword Function and adds the Arrow to convert it into Arrow.....
    console.log(this);         // but,still this is not working....
}
chai()

//***********Arrow Functions********** */

// const addtwo =(num1,num2) => {
//     return num1+num2              // this is the simple or basic Arrow Function....and this is called Explicit return...in which we put the Return...
// }
// console.log(addtwo(5,5))

//const addtwo =(num1,num2) =>  num1+num2    // this method is called as Implicit return...in which return and curley backets are not needed.... 


//const addtwo =(num1,num2) => ( num1+num2 )  // here , we  used parentheses, but it does not affect the value...but if we put curley brackets then ,return is must to put.....


const addtwo =(num1,num2) => ({username:"Haris"})  // this is the method to show the value of object in Arrow function...this is done by putting values in curley backets and then, value with curley brackets will put in parentheses.... 

console.log(addtwo(5,5))