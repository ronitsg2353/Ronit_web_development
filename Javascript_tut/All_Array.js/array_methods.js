let num=[23,56,32,89,54]

//1.reverse()- make the array reverse
console.log(num.reverse())

//2.toString()--> make array into string
console.log(num.toString())

//3.join() --use as a joiner -join all the array element using a seperators
console.log(num.join("-"))

//4.pop()-->remove last element of array
console.log(num.pop())

//push()-->adds new element in array
console.log(num.push(9))
console.log(num)

//shift()--> remove first element of array
console.log(num.shift())
console.log(num)

//unshift()-->adds elment at beginning of array
console.log(num.unshift(12))
console.log(num)

//concat()-->use to join arrray to the given array
let num1=[1,2,3,4]
let numerical=num.concat(num1)
console.log(numerical)

//sort()-->arragge element alphabetically
console.log(numerical.sort())

//use compare function-->create for sorting as 
let compare=(a,b)=>{
    return a-b //sorting by acending order
    //return b-a -->sorting by decending order
}
console.log(numerical.sort(compare))


//slice()-->slice is peice out from array and create new element

console.log(numerical.slice(2,4))
console.log(numerical.slice(2))

//splice()--> splice can be add new items in to array
//splice(x,y,z,w)
// x is postion to add
//y is no of element remove
//z and w are rhe element to be added
const number=[1,2,3,4,5]
console.log(number.splice(2,1,23,45))
console.log(number)

