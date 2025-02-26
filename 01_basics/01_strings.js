const name= "Haris"
const repoCount= 50

// console.log(name +  repoCount + "  Marks");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('haris-dot-com')
// console.log(gameName[2]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt('3'));
console.log(gameName.indexOf('d'));

const newstring = gameName.substring(0,4);
console.log(newstring);


const anotherstring = gameName.slice(-8,-4);
console.log( anotherstring);

const anotherstringOne= "    Haris    "
console.log(anotherstringOne);
console.log(anotherstringOne.trim());

const url = "https.//haris,com/haris%20rajput"
console.log( url.replace('%20','-'));

console.log(url.includes('rajput'));
console.log(url.includes('jan'));

console.log(gameName.split('-'));

const mood= "Happy!"
console.log(`I feel ${mood.repeat(3)}` );










