const score= 400
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().repeat(3));
console.log(balance.toFixed(1));

const balance2 = 24.556
console.log(balance2.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString());// This gives the value according to US Standards.
console.log(hundreds.toLocaleString('en-IN'));// this gives the value according to Indian State.

//*******************Maths****************** */

console.log(Math);
console.log(Math.abs(-8));
console.log(Math.round(4.3));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

console.log(Math.max(4,2,5,8,6,8));
console.log(Math.random()); // it gives the value b/w 0-1.
console.log(Math.random()*10);
console.log(Math.random()*10+1);///this removes the zero digit possibility.
console.log((Math.random()*10)+1)// we use round brackets to minimize the errors.

const min= 10
const max=20

console.log(Math.floor((Math.random()*(max-min+1)))+min);


















