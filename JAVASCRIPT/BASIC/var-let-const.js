
//let,const & var
let a="Ronit"
var b="Gaikwad"
const c=34

//**************------------var-----------------********/


//javascript is dynamically type lang-->its taking latest variable for var and let 

//var==>global scope 
var ab=23;
var ab="Ronit"
console.log(ab)

{
    var b="Ronit"           //var scope out of block also
    console.log(b)
}
console.log(b)

//************************** ------------ let -----------------*******
//let===>
{
    let a="Game"        // let scope only for block
    console.log(a)
}
console.log(a)

//******************************const*********************************** */

//const==>

{
    const c=23          //const scope only for block
    console.log(c)
}
console.log(c)


//let can be updated but no redeclared-we can not use let d again instead we use d only

let d="Riple"
console.log(d)
//let d="mrs"-->cant use
d=99
console.log(d)

//var can updated and redeclared
var e="freedom"
console.log(e)
var e="brunch"
console.log(e)

//const can not updated and neither redeclared
const p="figma"
console.log(p)
//const p=ffdf--> cant use
//p=fdfdf--> redeclared also not use
console.log(p)

//************************Primitive datatype******************* *//

//nn bb ss u
let aa=null
let ah=234
let ac=true //boolean -true/false
let ad=BigInt(234)
let ae="Ram"
let af=Symbol("its a number")
let ag=undefined
console.log(aa,ah,ac,ad,ae,af,ag)

console.log(typeof ae)