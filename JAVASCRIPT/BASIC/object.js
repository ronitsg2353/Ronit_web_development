
//object in js like key value pair & object is non primtive datatype

let items = {

    container1: "Ronit",
    container2: "Gaikwad",
    container3: "Sahebrao",
    Roll_No: 2353

}
console.log(items)
console.log("value of container 2 is "+items["container2"])
console.log("value of container 2 is"+items.container2)



const item1 = {
    "Ronit": true,
    "Gaikwad": false,
    "mindful": 56,
    "Rohan": undefined
}
item1["class"] = "A"    //we can add  extra -- object key value pair after 
item1["name"] = "Rohit" //we can change value also

console.log(item1)
console.log(item1["Gaikwad"])
console.log(item1["class"]) // printing of  value of new added key value pair in object
