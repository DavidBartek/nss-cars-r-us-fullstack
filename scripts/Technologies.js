import { getTechnology } from "./database.js";

const technologies = getTechnology()

// see algorithm in Paints.js

export const Technologies = () => {
    let HTMLString = `<h2>Technologies</h2>`
    HTMLString += `<select id="technologies">`
    HTMLString += `  <option value="">Select technology package...</option>`
    for (const technology of technologies) {
        HTMLString += `  <option value="${technology.id}">${technology.package}</option>`
    }
    HTMLString += `</select>`
    return HTMLString
}

// see algorithm in Paints.js

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technologies") {
            const choice = event.target.value
            window.alert(`User has chosen tech package ${choice}`)
        }
    }
)