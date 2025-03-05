function sayMyName(){
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("i");
    console.log("s");
}
// sayMyName()

function addTwoNumbers(number1,number2){//here the values"(number1+number2)" <= this is called Parameters.....
       console.log(number1+number2); 
}
//addTwoNumbers(8,2)// result is simple 10
//addTwoNumbers(8,"2")//this gives 82 bcz,javascript assumes it as a string and copy the both values..
//addTwoNumbers(8,null) //null means empty so it gives the result 8...and the value =>"(8,null)"this is called Arguments....

function addTwoNumbers(number1,number2){
    //  console.log(number1+number2);
     let result= number1+number2// this is the method to show the result return value...but after return result, no values wil be shown....
    // return result
    // return number1+number2//this is the short trick to find the value of return result.....
}

const result= addTwoNumbers(8,2)
//  console.log("Result:",result);
// function userNamemessage(username){
//     return `${username} just logged In`
// }

function userNamemessage(username){//this is a condition if there is empty space then we apply if statement to respond the user to enter his/her username,etc....
    if(username===undefined){
     console.log("please enter a username");
    }
}
function userNamemessage(username){//this is a shortcut...we can use exclamation mark !, instead of equal to sign like === to respond the user.......
    if(!username){
     console.log("please enter a username");
    }}

    function userNamemessage(username="sam"){// this is for what if we want that the username doesn't appear as undefined..and any value will show to us untill when user do not put his username...
        if(!username){
         console.log("please enter a username");
         return  }
         return `${username} just logged In`
    }

//userNamemessage("Haris")//this doesn't print the value bcz,it has returned the value..
//console.log(userNamemessage("Haris"));//this prints the value..
//console.log(userNamemessage("Haris"));// this gives us undefined value nor null.


 
 



