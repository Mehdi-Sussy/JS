import {
  drawerBottomExample,
  nameInput,
  numberInput,
  SIMInput,
  ulList,
} from "./DOMS.js";
import { userType, contactInfoType } from "./types.js";
import { liMaker, validateFunctions } from "./functions.js";
import { userContactInfo } from "./state.js";

export const drawerFunction = () => {
  drawerBottomExample?.classList.remove("bottom-[-100%]");
  drawerBottomExample?.classList.add("bottom-[0%]");
};
export const closeFunction = () => {
  drawerBottomExample?.classList.remove("bottom-[0%]");
  drawerBottomExample?.classList.add("bottom-[-100%]");
};

const validateCreateContact = (contactInfo: contactInfoType) => {
  if (!validateFunctions(contactInfo.name, contactInfo.phoneNumber + "")) {
    return alert("Fill all Inputs!");
  }
};

export const buttonSubmit = () => {
  validateCreateContact({
    name: nameInput!.value,
    phoneNumber: numberInput!.value,
  });
  const contactInfo: userType = {
    id: crypto.randomUUID(),
    name: nameInput?.value ?? "",
    phoneNumber: numberInput?.value ?? "",
    storage: SIMInput?.checked ? "SIM" : "Device",
    avatar: null,
  };
  const liElement = liMaker({
    name: contactInfo.name,
    phoneNumber: contactInfo.phoneNumber,
  });
  ulList?.appendChild(liElement);
userContactInfo.push(contactInfo)
console.log(userContactInfo)
};