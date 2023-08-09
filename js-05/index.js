

const Array = []

const addFunction = () => {
const random = {
    number : Math.random(),
    randomDate: function (start,end){
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        
    },
    randomWord : ()=>{
        const things = ['Rock', 'Paper', 'Scissor'];
        const thing = things[Math.floor(Math.random()*things.length)];
        console.log('The computer chose:' + thing);
    }
}
Array.push(random)
console.log(random)
}
console.log(Array)
addFunction()

randomWord()
