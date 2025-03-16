
const coding = ['java','javascript','c++','html']

coding.forEach( function(val) {       // here, in this case we cannot write the name of function.....
   // console.log(val);
    
} )

coding.forEach( (val) => {
   // console.log(val);    // here, we can use the basic fuction or arrow function....choice is ours...
    
} )


function printme(val) {
   // console.log(val);
                              // this is another method to print the array by function.......
}
coding.forEach(printme)


coding.forEach( (val,index,arr) => {
    // console.log(val,index,arr);      // here, we can use multiple values to see the code in detail or for edit the code...... 
     
} )


const mycoding = [
     {
        langname : "java",
        filename : "java"
     },
     {
         langname : "javascript",
        filename : "JS"
     },
    {
         langname : "python",
        filename : "py"
    }
]
mycoding.forEach( (item) => {
     // console.log(item.langname);
      
} )
