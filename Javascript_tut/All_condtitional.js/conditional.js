
//code-01--if-else condition
let a=prompt("please enter your age1:")
a=Number.parseInt(a)
console.log(a)
if(a>0){
    console("user not permitted");
}
else{
    console.log("user can user this facility")
}


//code-02-- if -else if--else

let age=prompt("please enter your age1:")
age=Number.parseInt(age) //string convert to number

if(age<0){
 alert("This is not permitted");
}
else if(age<18 && age>1){
    alert("please bring your goverment document!")
}
else{
    alert("This is permitted")
}

//code-3  switch case

const fruit="Mango"
switch(fruit){
    case 'pineapple':
        console.log("pineapple is availabe");
        break;

        case 'jackfruit':
            case 'jerryjam':
                console.log("jackfruit and jerryjam");
                break;

                default:
                    console.log("ur {fruit} is not available")
}


//code-04 with using terniary operator 
let age1=12
console.log("you are age is",age1<18? "dont drive":"drive")
