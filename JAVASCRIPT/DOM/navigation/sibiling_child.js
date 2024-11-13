
//its print title of page
console.log(document.title)

let b=document.body

//first child of -->text,comment,element node
console.log("first child of b is",b.firstChild)


//first element child of--->nav 
console.log(b.firstElementChild)

//last child elment of -->
console.log(b.lastChild)


//last elment child -->
console.log(b.lastElementChild)

const changecolor=()=>{
  document.body.firstElementChild.style.background="red"
}

//previousElementSibiling-->previous element which is an element
console.log(document.body.previousElementSibling)

//previous sibling-->text,comment,element node
console.log(document.body.previousSibling)


//next sibiling element
console.log(document.body.nextSibling)


