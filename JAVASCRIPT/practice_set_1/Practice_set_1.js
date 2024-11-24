



let marks={
    "Harry":98,
    "CHetan":45,
    "Minal":56
}

let size=Object.keys(marks).length;
console.log(size);



for(let i=0;i<size;i++){
    console.log(Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
    
}