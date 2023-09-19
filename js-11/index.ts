import { drawerButton, closeButton, sumbitButton } from "./src/DOMS.js";
import { drawerFunction, closeFunction, buttonSubmit } from "./src/events.js";
drawerButton?.addEventListener("click", drawerFunction);
closeButton?.addEventListener("click", closeFunction);
sumbitButton?.addEventListener("click", buttonSubmit);
