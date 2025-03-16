const myobject = {
    js : 'javascript',
    cpp : 'c++',
    ruby : 'ruby for apple'
}
for (const key in myobject) {
   // console.log(`${key} shortcut is for ${myobject[key]}`);  // now,the object is iterable in for in loop, this is the method to execute the object in loops by for in loop....
       
}

// now, we try that the array is iterable in for in loop?? let see....

const programming = ["java",'c++','html','css']

for (const key in programming) {
  // console.log(key);   // now, the for in loop gives us the keys not the values we have written in array....but we collect the values of arrays by above method
   
}

const map = new Map()
map.set("IN", "india")
map.set("PAK","Pakistan")  
map.set("IN", "india")

for (const key in map) {
  // console.log(key);     // here, the map is not iterable by this method in for in loop.....
   
}
