// FUNCTION WITH OBJECTS AND ARRAYS******************

function calculateCartPrice(num1){ //this shows us the argument but only one argument but we want that the parameter remains one and the arguments show infinity..mtlb jitny hm chahty hn utny add kr sken arguments...see below the solution....
        return num1
}
console.log(calculateCartPrice(200));
// solution of the value....
function calculateCartPrice(...num1){ //these three dots in parameter is called Rest/Spread Operator...by this operator we can add infinity arguments with a single parameter value.......
    return num1
}
console.log(calculateCartPrice(200,250,300));
// Another Example..........

function calculateCartPrice(val1,val2,...num1){ // now the values val1 or val2 etc..these pick there values from arguments according to their sequence and the remaining value is shown by "...num1"....... 
    return num1
}
// console.log(calculateCartPrice(200,250,300,2000));

// Example with Objects......

const user={
    username: "Haris",
    price: 9000
}
function handleuser(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);  
}

handleuser(user)// one method is here....

 handleuser({
    username:"Ahamd", //this is another method to show the Object in a function.....
    price:500
 })
 // Example with Arrays....

 const newArray=[200,300,400,500,600]

 function handleNewArray(getArray){
    return getArray[3]
 }
 console.log(handleNewArray(newArray));//one method is here..
 console.log(handleNewArray([200,300,400,500,600]));// this is another method to direct show the Arrays in a function...
 