// singleton
//Object.create// this method mades the singleton by Constructor..

// object literals

const mysym= Symbol("Haris1")

const Jsuser={
    name: "Haris",
    location: "shujabad",
    mysym: "keymy1",//this cannot gives us a symbol value,to gve a symbol value we apply square brackets to key....
    [mysym]:"keymy2",
    email:"haris@google.com",
    isloggedIn: false,
    lastloggedInDays:["Monday","Saturday"],
    "Full name":"Rao Haris"
}
console.log(Jsuser.email);// but this method is not preferable...
console.log(Jsuser["email"]);//this method is more preferable...bcz,it can access any type of value....like...see below
console.log(Jsuser["Full name"]);//this is the example
console.log(Jsuser.mysym);//this shows the value but this is incorrect bcz,we want a symbol and this gives gives us a string...if we check the typeof mysym then we know that this is a string acctually....see below
console.log(typeof Jsuser.mysym);//see the value...

console.log(Jsuser[mysym]);//this is correct way to find the value of symbol....
console.log(typeof Jsuser[mysym]);//this gves us the type string but give the value of symbol we want..

Jsuser.email="haris@microsoft.com"//this method changes the value if we want..
console.log(Jsuser);
//Object.freeze(Jsuser);// we have freezed the all values of "Jsuser"..now,noone can change the values....
Jsuser.email="haris@chatgpt.com"// the email now can't change 


Jsuser.greetings= function(){
    console.log("Hello Pakistan");// this function gives us the value exactly which we have written in console.log(...)..
}
Jsuser.greetings2= function(){
    console.log(`Hello kia hal hn ${this.name}` );//this is another example of function,where we write the values in backticks,and we can put the "${}",and also find the values of keys by putting the keys into that dollar sign..e.g: ${...}    
}
console.log(Jsuser.greetings());
console.log(Jsuser.greetings2());












