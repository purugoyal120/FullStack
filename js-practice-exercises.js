//question 1

let a = 100;

let f = a*(9/5) + 32;

console.log(f);

//question 2

function student(name,number,isstudent  
){
    this.name = name;
    this.number = number;
    this.isstudent = isstudent;
}

let s1 = new student("Ayush", 101, true);

console.log(s1);
console.log(s1.name);
console.log(s1.number);
console.log(s1.isstudent);


//question 3
function trafficlight(color){
    this.color = color;
    if(color === "red"){
        console.log("stop");
    }else if(color === "yellow"){
        console.log("slow down");
    }else if(color === "green"){
        console.log("go");
    }   
}
let color = "red";

let light = new trafficlight(color);
