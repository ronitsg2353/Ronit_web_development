
//problem 01-->write code on age between 10 to 20



let age=prompt("Enter your age: ")

if(age>10 && age<20 ){
    console.log("your age between 10 &20")
}
else{
    console.log('your age less than 10')
}


//problem-02 using switch-case for valid age
let age=prompt("Enter your age:")

switch(age){
    case '12':
        console.log("your age is 12")
    break;
    
     case '14':
        console.log("your age is 14")
        break;
        
         case '16':
        console.log("your age is 16")
        break;
        
    default:
    console.log("your age is not special")
}

//problem 03--number divisble by 2 n 3

let num=prompt("Enter your number:")
num=Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log("your number divisible by 2 nd 3")
}
else{
    console.log("number is not divisible by 2 and 3")
}


//problem 04--number divisble either 2 or 3

let num=prompt("Enter your number:")
num=Number.parseInt(num)
if(num%2==0 || num%3==0){
    console.log("your number divisible by 2 nd 3")
}
else{
    console.log("number is not divisible by 2 and 3")
}

//problem 04--terniary operators
let age =prompt("please enter your age:")
console.log("your age is permit to",age>18?"your driving":"cant drive");

// aNOTHER Way
let age=prompt("Enter your age")
let a= age >18? "you can drive":"you cant driver"
console.log(a)