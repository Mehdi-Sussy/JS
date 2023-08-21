const array = [{
    name:"Mehdi",
    lastName:"Zareian",
    age:20 ,
    id: self.crypto.randomUUID()
},{
    name:"ALi",
    lastName:"Rezaii",
    age:20 ,
    id: self.crypto.randomUUID(),

}]
const addFunction = (name,lastName,age) => {
if (!name || !lastName || !age) return null
const newUser = {
    name,
    lastName,
    age,
    id: self.crypto.randomUUID()
}
array.push(newUser)
return newUser
}
const popFunction = ()=> {
array.pop()
}
console.log(array)
addFunction("hello","zawg",25)
const indexToEdit = 2;
if (indexToEdit >= 0 && indexToEdit < array.length) {
    const objectToEdit = array[indexToEdit];
    objectToEdit.name = "Updated Name";
    objectToEdit.age = 28;
    console.log(array);
} else {
    console.log("Invalid index.");
}
