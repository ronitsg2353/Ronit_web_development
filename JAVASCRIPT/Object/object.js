


let dict={
    "Name":"Ronit",
    "Surname":"Gaikwad",
    "Number":9922922308
}

console.log(dict);

//print the key only

for(let a in dict){
    console.log(a);
}

//print the values theoguht for loop
let size=Object.keys(dict).length;

//1st method-for loop

for(let i=0;i<size;i++){
    console.log(Object.keys(dict)[i]+" are "+dict[Object.keys(dict)[i]]);

}

//2nd method -for in loop
for (let b in dict){
    console.log("The marks "+ b +" are "+dict[b]);
}