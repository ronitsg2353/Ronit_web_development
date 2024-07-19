
//Q1: print marks of student-using loop
marks={
    Ronit:12,
    sheetal:23,
    mital:34
}
for( let i=0;i<Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[i]+ "marks are:"+marks[Object.keys(marks)[i]])
}

//print only keys
for (let key in marks){
    //console.log(key)
    console.log(key +"marks are:"+marks[key])
}

//problem-03 print  try again utnil get correct answer

let correct_num=4
let i

while(i !=correct_num){
    console.log("Try again")
    i=prompt("Enter correct number:")
}
console.log("4 is corect number")

//problem04--mean of number
// mean use as function property
const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4,3,2,6))