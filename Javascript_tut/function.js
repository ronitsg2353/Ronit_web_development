
function oneplus(x,y){
    return 1+(x+y)/2
}

var a=10;
var b=20;
var c=30;

console.log("oneplus average of a and b:"+oneplus(a,b))
console.log("oneplus aeragae of b and c:"+oneplus(b,c))
console.log("oneplus average of c and a:"+oneplus(c,a))


//another method to represent function

const sum=(x,y)=>{
    return x+y
}
console.log(sum(1,2))

//not return function
let hello=()=>{
    console.log("print hello world")
}
hello();


//function--->
let hello=()=>{
    console.log("print the helllo")
    return "hi"
}
const v=hello()
console.log(v)