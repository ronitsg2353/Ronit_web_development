
//let,const & var

//var==>

let a="Ronit"
var b="Gaikwad"
const c=34

{
    var b="Ronit"           //var scope out of black also
    console.log(b)
}
console.log(b)


//let===>
{
    let a="Game"        // let scope only for block
    console.log(a)
}
console.log(a)

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