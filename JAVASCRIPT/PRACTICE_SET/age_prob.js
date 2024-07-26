

let age=prompt("Enter your age:")
age=Number.parseInt(age)

const drive=(age)=>{
    return age>=18?true:false
}

if(drive(age)){
 alert("you can drive")
}
else{
  alert("you cant driver")
}