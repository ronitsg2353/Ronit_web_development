
let name="Ronit" //double quote
var friend='rohit' //single quote
console.log(name)
console.log(friend)
console.log(name.length) //length of string

let sentence=`my name is ronit` //using templete literals using"backtick--> `` " 
console.log(sentence)


//with templete literals we can use single and double quote inside the variable.
let sentence1=`my name is "Ronit" `
console.log(sentence1)


//we can insert directly in templete literals..this is called string interpolation
let sentence2=`my name is ${name}`
console.log(sentence2)

//Escape Sequence-->
let surname="Gaikwad\'s"
console.log(surname)

// \n  -->newline
// \t -->tab
// \r -->carriage return

//String properties
//1/toUpperCase()-->for upper case charachter of string
console.log(name.toUpperCase())

//2.toLowerCase()-->for lowercase charachter of string
console.log(name.toLowerCase())

//3.slice-->string index alway starting from zero -->we can mention the index of string
console.log(name.slice(2,4))

console.log(name.slice(2))

//4/replace() -->replace with antoher string
let n_name="harry bhau"
console.log(n_name.replace("bhau","bhai"))

//concat()-->property of combine two string 
console.log(name.concat(n_name,"yes"))

//we can use "+" (plus operators)-->
console.log(n_name+name)

//string is immautuable in nature--we cant change it

//its name[index]-->print name character as per number
console.log(name[2])


//trim()--->remove whitespace in string
let p_name="    meeru  ";
console.log(p_name.trim())


//startsWith() & endsWith property alway return true and false
console.log(name.startsWith("R"))
console.log(name.endsWith("y"))

//includes()--> if string contains string-->always returns true & false

console.log(n_name.includes("bhau"))

//string is immutable-we cant change string

let str2='deepiksha'
str2[3]='m'
console.log(str2) // its printing deepiksha 




