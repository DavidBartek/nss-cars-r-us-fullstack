// main function: renders HTML to the document at location: id="contianer"

import { CarsRUs } from "./cars-r-us.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsRUs()
}

renderAllHTML()