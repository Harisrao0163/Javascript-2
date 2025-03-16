// while loops................

let index = 0
while (index <= 10) {
  console.log(`value of index is ${index}`);   // while loop execution with variable just....
    index = index + 2
}

let myArray = ['virat', 'babar', 'Rizwan']
let arr = 0
while (arr < myArray.length) {
    console.log(`player is ${myArray[arr]}`);  // while loop execution with Arrays....
    arr = arr + 1
}

//    do while loops.....................

// let score = 1

// do {
//     console.log(` value is ${score}`);
//     score++
// } while (score <= 10);

let score = 11

do {
    console.log(` value is ${score}`);   // bcz, the condition is in last and the code executes according to first part of code....
    score++
} while (score <= 10);