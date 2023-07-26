
const Entry1 = +prompt("enter ur number")
const Entry2 = +prompt("enter ur number2")
const operator = prompt("enter operator")

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
