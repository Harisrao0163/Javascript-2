// array
const myarry= [0,1,2,3,4,5,6]
const hello=["haris","owais"]
const arry2=new Array(1,2,3,4)

console.log(myarry[1]);
console.log(hello[""]);

//array Methods
myarry.push(8)//.push adds the written value 
myarry.pop()// .pop removes the last value
myarry.unshift(9)// .unshift adds the given value to first
myarry.shift()// .shift simply removes the first value

console.log(myarry.includes(9));
console.log(myarry.indexOf(3));

const newarray= myarry.join()//.join coverts the different datatypes into string..

console.log(myarry);
console.log(newarray);
console.log(typeof newarray);

//slice and splice 

console.log("A", myarry);

const myn1= myarry.slice(1,4)//.slice doesn't change the values of original array, but it can print the values which we have given in the brackets except the last one......


console.log(myn1);
console.log("B", myarry);

const myn2= myarry.splice(1,4)//.splice it removes the values which we have given in the brackets from the original array,but it pastes all the given values of brackets...........

console.log(myn2);
console.log("C", myarry);












