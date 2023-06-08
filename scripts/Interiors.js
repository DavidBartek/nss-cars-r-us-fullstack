import { getInterior } from "./database.js";

const interiors = getInterior()

// see algorithm in Paints.js

export const Interiors = () => {
    let HTMLString = `<h2>Interiors</h2>`
    HTMLString += `<select id="interiors">`
    HTMLString += `  <option value="">Select interior style...</option>`
    for (const interior of interiors) {
        HTMLString += `  <option value="${interior.id}">${interior.option}</option>`
    }
    HTMLString += `</select>`
    return HTMLString
}

// see algorithm in Paints.js

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id = "interiors") {
            const choice = event.target.value
            window.alert(`User has chosen interior ${choice}`)
        }
    }
)