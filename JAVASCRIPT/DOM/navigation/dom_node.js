
//firstChild--> is the firstchild of document.body
console.log(document.body.firstChild)

//lastChild-->is the lastChild of document.body
console.log(document.body.lastChild)

//childNodes-->is the all childNodes of document.body
console.log(document.body.childNodes)


//we can find nodes as per index-->childNodes[0]-->first child of childNodes
console.log(document.body.childNodes[0])


//we can find last node of childNodes
console.log(document.body.childNodes[document.body.childNodes.length-1])


console.log(document.body.childNodes)

//we can print nodeList -->array
let arr=Array.from(document.body.childNodes)
console.log(arr)



console.log(document.body.parentNode)

console.log(document.body.parentElement)

console.log(document.body.previousElementSibling)