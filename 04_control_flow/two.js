const month = 2

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        // break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break; //  this break is for stopping point....
        // if we comment the break then after the value which we have accessed are all will be print out..
        // Except Default ....see above..
        
        
     
    default:
        console.log("not matched");
        
        break;
}
// another example............

const day = "monday"

switch (day) {
    case "monday":
        console.log("Monday");
        break;
    case "tuesday":
        console.log("tuesday");
        break;
    case "friday":
        console.log("friday");
        break;

    default:
        console.log("not matched");
        
        break;
}
