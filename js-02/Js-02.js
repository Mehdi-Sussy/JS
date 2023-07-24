

const leftNumber = +prompt("enter number!")
const operator = prompt("enter sign!")
const rightNumber = +prompt("enter number!")

if (isNaN(rightNumber || leftNumber)){
     console.log("error in left or right number data type!")
 }

if (operator === "+") {
    document.writeln(leftNumber + rightNumber)
}
if (operator === "-") {
    document.writeln(leftNumber - rightNumber)
}
if (operator === "*") {
    document.writeln(leftNumber * rightNumber)
}
if (operator === "/") {
    document.writeln(leftNumber / rightNumber)
}