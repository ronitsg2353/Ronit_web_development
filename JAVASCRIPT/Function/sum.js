
//method1 -create method
function sum(x,y){
    return x+y;
}

console.log(sum(10,20))


//method2-createe methos
var sum=(x,y)=>{
    let c=x+y;
    return c;
}

console.log("latest value is"+sum(10,20));

// non parametrised function
const hello=()=>{
    console.log("hello bro");
}
//should call function in code
hello();