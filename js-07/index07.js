"use strict";
//userList
const userList = [
    {
        name: "Mehdi",
        surName: "Zareian",
        age: 21,
        occupation: "WebDeveloper",
        maritalStatus: "bachelor",
        gender: "male",
        height: "179cm",
        weight: "65kg",
        phoneNumber: "+989335728325",
        id: 1233412345123445
    }
];
const userAdder = (user) => {
    userList.push(user);
};
// userAdder function
userAdder({
    name: "Ali",
    surName: "Hosseini",
    age: 22,
    occupation: "drugDeveloper",
    maritalStatus: "married",
    gender: "male",
    height: "179cm",
    weight: "70kg",
    phoneNumber: "+989385224627",
    id: 1432678451362135
});
//idCatcher
const idCatcher = (userid, newName) => {
    const index = userList.findIndex((item) => item.id === userid);
    userList[index] = Object.assign(Object.assign({}, userList[index]), newName);
};
idCatcher(1432678451362135, { name: "Asghar" });
//nameSorter(chatgpt)
const sortByName = () => {
    userList.sort((a, b) => {
        var _a, _b;
        const nameA = ((_a = a.name) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
        const nameB = ((_b = b.name) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || '';
        return nameA.localeCompare(nameB);
    });
};
sortByName();
console.log(userList);
