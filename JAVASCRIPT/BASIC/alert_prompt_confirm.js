alert("Enter the number below")


let a=prompt("Enter your number here:")

//convert string to int
a=Number.parseInt(a);

alert("you entered a type is"+typeof(a))
let write=confirm("Do you want to write page")
if(write){
    document.write(a)
}
else{
    document.write("please allow me to write")
}