
const arr = [1,2,3,4]

for (const num of arr) {
   // console.log(num);
    
}
// let see for strings......

const greetings = "Hello World"

for (const greet of greetings) {
  //  console.log(greet);
    
}
// Maps..........

const map = new Map()
map.set("IN", "india")
map.set("PAK","Pakistan")  // it does not repeats the values....it gives the uniqueness to code.....
map.set("IN", "india")

//console.log(map);

for (const key of map) {
    //console.log(key);    // this gives the values in arrays but we want single single values of key and value.....so see below...
    
}
for (const [key,value] of map) {
   // console.log(key , ":-" , value); // now, this gives us the single single values....this proves that we can apply for of loop to maps easily....
    
}

// now we check the iteration of object to for of loop...

const myobject = {
    "game1" : "pubg",
    "game2" : "racing car",
    "game3" : "criket"
}
for (const games of myobject) {    // this time it gives us the error that the object is not iterable........
    console.log(games);
    
}
