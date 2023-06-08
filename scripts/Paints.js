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

export const Paints = () => {
    let HTMLString = `<h2>Paint Colors</h2>`
    HTMLString += `<select id="paintColors">`
    HTMLString += `  <option value="">Select paint color...</option>`
    for (const paint of paintColors) {
        HTMLString += `  <option value="${paint.id}">${paint.color}</option>`
    }
    HTMLString += `</select>`
    return HTMLString
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