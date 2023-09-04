import {closeButton,
    ShowListButton,
    button
} from "./src/DOMS.js"
import {closeButtonEvent,
    showListButtonEvent,
    submitButtonHandler} from './src/events.js'

closeButton?.addEventListener("click",closeButtonEvent
)
ShowListButton?.addEventListener("click",showListButtonEvent)

button?.addEventListener("click",submitButtonHandler);