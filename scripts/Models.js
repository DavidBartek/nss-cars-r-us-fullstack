import { getModels, setModel } from "./database.js"

const models = getModels()

export const Models = () => {
    let HTMLString = `<h2>Models</h2>`
    HTMLString += `<select id="models">`
    HTMLString += `  <option value="">Select model...</option>`
    for (const model of models) {
        HTMLString += `  <option value="${model.id}">${model.model}</option>`
    }
    HTMLString += `</select>`
    return HTMLString
}

document.addEventListener("change", e => {
    if (e.target.id === "models") {
        setModel(parseInt(e.target.value))
    }
})