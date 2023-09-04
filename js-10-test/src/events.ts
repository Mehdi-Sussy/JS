import {contactListDrawer,
    contactListUl,
    conatctDeviceInput,
    conatctNameInput,
    conatctNumberInput} from "./DOMS.js"
    import {userNoteType,sus} from "./types";

export const closeButtonEvent = ()=>{
    contactListDrawer?.classList.add("bottom-[-100%]")
    contactListDrawer?.classList.remove("bottom-[0%]")}
export const showListButtonEvent =()=>{
    contactListDrawer?.classList.add("bottom-[0%]")
    contactListDrawer?.classList.remove("bottom-[-100%]")
    }
    const susList: sus = []
export const submitButtonHandler = ()=>{
    
    const newContact:userNoteType = {
        id:crypto.randomUUID(),
        conatctName:conatctNameInput?.value ?? "",
        conatctNumber:conatctNumberInput?.value ?? "",
        avatar: null,
        storage:conatctDeviceInput?.checked ? "Device" : "SIM"

    }
    susList.push(newContact)
console.log(susList)

const contactli = document.createElement("li")
contactli.style.backgroundColor = "blue-200"  // ba adad daadan be color mishe tone ro kam o ziad kard
contactli.className = "px-4 py-4 bg-slate-300 rounded-md"
const contactName = document.createElement("h2")
contactName.className= "text-slate-900"
contactName.innerText = newContact.conatctName
const contactNumber = document.createElement("p")
contactNumber.className = "text-red-600"
contactNumber.innerText = newContact.conatctNumber.toString()
contactli.appendChild(contactName)
contactli.appendChild(contactNumber)
contactListUl?.appendChild(contactli)  // in hamoon ID tag ul hast xD // bar aval beja conatctlist ye const dige gozashte boodm // deqat konam const li ro append kardm be ID tag ul
}