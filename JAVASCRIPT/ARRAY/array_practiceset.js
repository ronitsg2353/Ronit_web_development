//create an array of numbers and take input the user to add numbers to the array

let arr=[12,34,21,68,56,99]
let a =prompt("Enter a number:")
a=Number.parseInt(a)
arr.push(a)
console.log(arr)

//filter for number divisible by 10 from a given array


let arr1=[12,34,21,68,56,99,10,1000,30]

let n=arr1.filter((x)=>{
    return x%10==0;
})
console.log(n)

//create an array fo square of given number
let arr2=[12,34,56,32,11,78]
let n1=arr2.map((x)=>{
    return x*x;
})
console.log(n1)

//use reduce-calculate factorial of given number from an array of first n natural numbers.
let arr3=[1,2,3,4,5]
let n3=arr3.reduce((x1,x2)=>{
    return x1*x2;
})
console.log(n3)