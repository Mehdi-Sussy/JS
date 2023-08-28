type userNoteType = {
    title:string;
    description:string
}
const Title = document.querySelector<HTMLInputElement>("#Title")
const description = document.querySelector<HTMLInputElement>("#Description")
const buttonAction = document.querySelector("#button")

buttonAction?.addEventListener("click",()=>{
    console.log(Title?.value)
    console.log(description?.value)
})