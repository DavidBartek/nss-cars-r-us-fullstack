import { CarBuilder } from "./cars-r-us.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await CarBuilder()
}

renderAllHTML()


document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})