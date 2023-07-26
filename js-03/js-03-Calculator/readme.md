# HW-03, in this part of HW i was assigned to create a calculator with JS using function.
I had some troublesome challenges while solving this HW but i managed to do it almost perfectly i'll write what was the challenges:
.......................................
function Calculator(Entry1 = 0, Entry2 = 0, operator){
if (!isNaN(Entry1 + Entry2)){
    switch (operator) {
         case '+': return (Entry1+Entry2)
         }
         switch (operator) {
            case '-': return document.writeln(Entry1-Entry2)
            }
            switch (operator) {
                case '*': return document.writeln(Entry1*Entry2)
                }
                switch (operator) {
                    case '/': return document.writeln(Entry1/Entry2)
                    }
}  return document.writeln("Fatal Error!!")
}
console.log(Calculator(10,10,"-"))

# Problem: why console.log(Calculator(10,10,"-")) show me a undefined ?
# Solution= because we put no document.writeln after return.
