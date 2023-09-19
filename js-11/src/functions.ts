
import { contactInfoType } from "./types";

export const liMaker = (contactInfo: contactInfoType): HTMLLIElement => {
  const liElement = document.createElement("li");
  liElement.className = "my-2 px-2 rounded-md flex flex-col";
  const span1Element = document.createElement("span");
  span1Element.innerText = contactInfo.name;
  span1Element.className = "text-purple-700";
  const span2Element = document.createElement("span");
  span2Element.className = "text-slate-400";
  span2Element.innerText = contactInfo.phoneNumber.toString();
  liElement.appendChild(span1Element);
  liElement.appendChild(span2Element);
  return liElement;
};
export const validateFunctions = (...fields: string[]) => {
  return fields.every((fields) => !!fields);
};
