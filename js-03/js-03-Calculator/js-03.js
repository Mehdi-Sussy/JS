// const x = +prompt("e")
// const operator = prompt("enter sign!")
// const y = +prompt("e2!")
// if (isNaN(x + y)){
//     console.log("Error")
// } else {
//     switch (operator){
//         case "+": console.log(x+y)
//         break;
//     }
//     switch (operator){
//         case "-": console.log(x-y)
//         break;
//     }
//     switch (operator){
//         case "*": console.log(x*y)
//         break;
//     }
//     switch (operator){
//         case "/": console.log(x/y)
//         break;
//     }
// }

const Entry1 = +prompt("enter ur shit")
const Entry2 = +prompt("enter ur shit2")
const operator = prompt("enter ur shit3")

function Calculator(Entry1 = 0, Entry2 = 0, operator){
if (!isNaN(Entry1 + Entry2)){
    switch (operator) {
         case "+": return (Entry1+Entry2)
         }
         switch (operator) {
            case "-": return (Entry1-Entry2)
            }
            switch (operator) {
                case "*": return (Entry1*Entry2)
                }
                switch (operator) {
                    case "/": return (Entry1/Entry2)
                    }
}  return document.writeln("Fatal Error!!") 

}
console.log(Calculator(Entry1,Entry2,operator))