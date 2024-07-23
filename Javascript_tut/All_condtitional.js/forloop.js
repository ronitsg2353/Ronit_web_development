//simple for loop program

for(let i=0;i<=5;i++){
    console.log(i)
}

//for loop --first sum of numbers
let sum=0;
let n=prompt("Enter your number:");
n=Number.parseInt(n);
for(let i=0;i<n;i++){
sum+=(i+1)
   
} 
console.log("sum of first "+n + " natural number is " + sum);


//for-in loop--only iterate key only
let list={
    "Ronit":23,
    "sankit":34,
    "pritesh":45
}

for(let a in list){
    console.log(a +" marks is "+ list[a])
}

//for-of loop---iterate  values of object--used in array

for(let b of list){
    console.log(b)
}

//while-loop

let num=prompt("Enter your number:")
num=Number.parseInt(num)

let i=0;
while(i<num){
    console.log(i);
    i++;
}
console.log(i)

//do-while loop--atleast once its run

let num=prompt("Enter your number:")
num=Number.parseInt(num)

let i=10;
do{
    console.log(i)
    i++;
}
while(i<num)