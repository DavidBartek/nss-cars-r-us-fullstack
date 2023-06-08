import { getTechnology } from "./database.js";

const technologies = getTechnology()

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