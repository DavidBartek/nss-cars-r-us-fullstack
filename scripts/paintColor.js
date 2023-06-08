import { getPaintColors } from "./database.js";

const paintColors = getPaintColors()

// renders HTML for the paint color selector
// This will iterate through the paintColors array
// Format:
/* 
<select id="paintColors">
    <option value="">Please select one...</option>
    <option value="${paint.id}">paint.color</option>
    ...
</select> */

export const paintButtonHTML = () => {
    let paintHTML = `<select id="paintColors">`
    paintHTML += `  <option value="">Select paint color...</option>`
    for (const paint of paintColors) {
        paintHTML += `  <option value="${paint.id}">${paint.color}</option>`
    }
    paintHTML += `</select>`
    return paintHTML
}

// adds change event
// when the element target's id === paintColors,
// create variable containing the selected targets **value**

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id = "paintColors") {
            const choice = event.target.value
            // console.log(choice)
        }
    }
)