import { getWheels } from "./database.js";

const wheels = getWheels()

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