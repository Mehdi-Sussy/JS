const array = []
const addFunction = () => {
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }
const randomNumber = Math.floor(Math.random() * 1235)
const words = ["hello","blow","delow","yippie"]
const randomWords = words[Math.floor(Math.random()* words.length)]
const randomDate1 = randomDate(new Date(2012, 0, 1), new Date());

return {randomNumber,
    randomWords,
    randomDate1}
}
const arrayGenerator = ()=>{
array.push(addFunction())
}
arrayGenerator()
arrayGenerator()
console.log(array)

