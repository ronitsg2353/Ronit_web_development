

let t=document.body.firstElementChild

//table-row
console.log(t.rows)

//table-caption-->print caption comes under table
console.log(t.caption)

//tHead-->table-is reference <thead>
console.log(t.tHead)

//tFoot-->table-is reference <tfoot>
console.log(t.tFoot)

//tBodies-->collection of <tbody> elements
console.log(t.tBodies)

//tbody-rows-->collection of <tr> inside
// console.log(t.tBodies[0].rows)
console.log(t.tbody.rows)


//td.cellIndex-->no of cells inside enclosing <tr>
console.log(t.rows[0].rowIndex)