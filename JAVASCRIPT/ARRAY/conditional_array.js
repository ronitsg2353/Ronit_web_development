
//for loop -iterate the array 
let num=[1,23,56,32]

for(i=0;i<num.length;i++){
    console.log(num [i])
}

//forEachLoop-->using function for array
num.forEach((element)=>{
    console.log(element * element )
})

//Array.from()--> covert object into array 
let name='Ronit'
let arr=Array.from(name)
console.log(arr)

//for --off --. we can use for-off instead of for loop
// for-off --->printing to get value from an array
for (let i  of num){
    console.log(i)
}

//for -in -->used to get keys from an array
for(let i in num){
    console.log(i)
}