const easypaisauser= new Object()// this is singleton object

const jazzcashuser= {}// this is a non-singleton object,but the results are same...
jazzcashuser.id= "123abc"
jazzcashuser.name="Bobby"
jazzcashuser.isloggedIn= false

// console.log(jazzcashuser);

// console.log(Object.keys(jazzcashuser));// the point is that it gives us the values in Array...
// console.log(Object.values(jazzcashuser));//from this we find the values of keys...but still in array...
// console.log(Object.entries(jazzcashuser));// this method gives the keys/values together in a separate separate array...but in a parent array...
// console.log(jazzcashuser.hasOwnProperty('isloggedIn'));// .hasOwnProperty method tells us that the value which we have given in barackets is existing or not...





const regularuser = {
    fullname: {
        userfullname:{
            firstname:"Muhammad",
            lastname:"Haris"
        }
    }
}
// console.log(regularuser);
// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname);


// combine objects..
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}


// const obj3={obj1,obj2}// this combine the values but in arrays...
// console.log(obj3);
// const obj3=Object.assign({},obj1,obj2)//object.assign combine the values in a single parent array...and the curly brackets is graunte sign that the value will be assign in a single array....and all the source code will be transfered into these brackets.....
// console.log(obj3);
// console.log(obj3===obj1);//this method defines that the obj5 is equal to obj1 or not......

const obj3={...obj1,...obj2}//this is called a spread method as same object.assign method...but 90% we use spread method bcz,it is easy and short to assign the values in a single array that we want....

// console.log(obj3);

// OBJECTS DE-STRUCTURE AND API**************************

const course={
    coursename:"chaiorcode",
    price:"999",
    instructor:"Haris"
}
console.log(course.coursename);//this method gives the required values simple but this is not a de=structuring....see below
 //const {price}= course//this gives us the value but for de=structuring...see below
 const {price:money}= course// this called De-structuring...this is acctually when we want to change the value or name of syntax known as de-structuring....

 console.log(money);
 
 const navbar= ({company})=> {// this is the sign "({company})"...where we know that there is de-structuring has been occured...this is mostly used in React....coders used "({company})" method mostly than that sign => props.company...
 }
 navbar(company="Haris")

// JSON API **************

// {
//     "name":"Harisrao"
//     "class":"BS"
//     "price":"4Lac"
// }// this api's is in the form of object....

[
    {},
    {},
    {}
]// this API is in the form of arrays.....
//links**************************

//https://randomuser.me/
//https://jsonformatter.org/