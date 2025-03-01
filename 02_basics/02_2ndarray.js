const pakteam = ["babar","shaheen","rizwan"]
const indianteam = ["virat","rohit","pandya"]

pakteam.push(indianteam)// it adds the two values but in still arrays..
console.log(pakteam);

console.log(pakteam[3][1]);

const team =pakteam.concat(indianteam)// it adds the two values without arrays..
console.log(team);

const allnewteams= [...pakteam,...indianteam]// this is a spread method....and this is same as .concat having same functionality,but spread method is more preferable.....
console.log(allnewteams);

const anotherarray= [1,2,3,[4,5],6,[7,8],5,2,9,[4,5,[1,6]]]
const new_another_array = anotherarray.flat(Infinity)// .flat(infinity) basically removes all the arrays from the value..
console.log(new_another_array);

console.log(Array.isArray("Haris"));//.isarray is question mark..that the given value is array or not...
console.log(Array.from("Haris"));// .from converts the value into arrays....
console.log(Array.from({name : "Haris"}));// interesting...bcz, it can't form arrays from keys....

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3));// .of has same functionality as .from to convert the values into arrays but, with the help of .of method we can convert many elements or element values into arrays collectively..






