
//filter -->make a condtion to passes arry and create a new array

    // a.filter((value,index,array)=>{
    //     value * value
    // })

let num=[12,34,21,55]

 let a2=num.filter((a)=>{
    return a<10
 })
 console.log(a2)
 

 //map-->mmake create array format --in for each loop we are in form of data but map we care getting in form of array
//  a.map((value,index,array)=>{
//     return value * value
//  })
 
 let num1=[11,2,3,40]

let b2=num1.map((b)=>{
    return a*a
})
console.log(b)



//reduce-->reduce an array to a single value
const n=[23,45,21,77]


let n2=n.reduce((h1,h2)=>{
    return h1+h2
})
console.log(n2)
