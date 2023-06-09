import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

// see algorithm in Paints.js

export const Wheels = () => {
    let HTMLString = `<h2>Wheels</h2>`
    HTMLString += `<select id="wheels">`
    HTMLString += `  <option value="">Select wheels...</option>`
    for (const wheel of wheels) {
        HTMLString += `  <option value="${wheel.id}">${wheel.option}</option>`
    }
    HTMLString += `</select>`
    return HTMLString
}

// see algorithm in Paints.js

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            const choice = event.target.value
            // debugging
            // window.alert(`User has chosen wheel style ${choice}`)
            setWheels(parseInt(choice))
        }
    }
)