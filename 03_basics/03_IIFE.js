// Immediately Invoked Function Expressions(IIFE)

function chai(){
    console.log(`DB CONNECTED`);   // this show us the correct result...
}
chai()


(function chai(){
    console.log(`DB CONNECTED`);    //this is another method...use of Parentheses...we used this method bcz,sometime global scope causes pollution or errors...so, to avoid this pollution we use parentheses...."()()" the first parentheses is to show the function and the second one is to Execute the Function..... 
})();



(function aurcode(){
    console.log(`DB CONNECTED TWO`);    // this code may cause error if we not stop or end the previous code or function by Semi-colon ";"...and this is known as named IIFE.....
})();



( () => {
    console.log(`DB CONNECTED THREE`); // this is another method by putting Arrows and parentheses....but,so careful of Semi-colon.....
})();



( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);  // this is another method to put variables into function with Arrows.....this is also known as unnamed IIFE...
})("Haris")