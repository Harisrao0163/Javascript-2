function one (){
    const username= "haris"// this username name is shown by the help of "two()" ,
    // and the two is a function and is in the innerside of function one so,console.log is in function two and "two()" is in function one thats why it will be shown...

    function two(){
        const server="Website"
        console.log(username);
    }
    // console.log(website);// this can't show the value.
    //  bcz,this is a parent or child like process in which child can bring some value from parent but parent cannot give values from child......
    // in simple words,the child variables are able to show the parent variable values....
    two()
}
// one()
//************below is the example of above statement..... */
if (true) {
    const username= "haris"
    if (username==="haris") {
        const website="  Github"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

///////*****************Interesting****** */

function addone(num){
    return num + 1     // this the first technique of function....
}
addone(5)

// const addtwo= function(num){
//     return num + 2                // this is the second technique of function by variables....
// }
// addtwo(5)
//***********************************Another concept***************************************** */
console.log(addone(5))
// if we put the value before function and declare the function in this way..see below...then their is no error will occur...
function addone(num){
    return num + 1     
}

console.log(addtwo(5))
// here the error will occur bcz,we holdes the fuction with variables....
const addtwo= function(num){
    return num + 2    
}
