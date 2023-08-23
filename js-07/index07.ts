//types
type userTypes = {
    name?: string;
    surName?:string;
    age?:number;
    occupation?:string;
    maritalStatus?:"married"|"bachelor"|"prefer not to say";
    gender?:"male"|"female";
    height?:string;
    weight?:string|number;
    phoneNumber?:string;
    id?:number 
}
//userList
const userList:Array<userTypes> = [
    {
    name:"Mehdi" ,
    surName:"Zareian",
    age:21,
    occupation:"WebDeveloper",
    maritalStatus:"bachelor",
    gender:"male",
    height:"179cm",
    weight:"65kg",
    phoneNumber:"+989335728325",
    id:1233412345123445
}
]
const userAdder = (user:userTypes): void =>{
userList.push(user)
}
// userAdder function
userAdder({
    name:"Ali" ,
    surName:"Hosseini",
    age:22,
    occupation:"drugDeveloper",
    maritalStatus:"married",
    gender:"male",
    height:"179cm",
    weight:"70kg",
    phoneNumber:"+989385224627",
    id:1432678451362135
})
//idCatcher
const idCatcher = (userid:userTypes["id"],newName:userTypes):void => {
const index = userList.findIndex((item)=>item.id === userid) 
userList[index] = {...userList[index],...newName}
}
idCatcher(1432678451362135,{name:"Asghar"})
//nameSorter(chatgpt)
const sortByName = (): void => {
    userList.sort((a, b) => {
        const nameA = a.name?.toLowerCase() || ''
        const nameB = b.name?.toLowerCase() || '';
        return nameA.localeCompare(nameB);
    });
};
sortByName();
console.log(userList);
