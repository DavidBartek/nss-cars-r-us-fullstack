import { Interiors } from "./Interiors.js";
import { Paints } from "./Paints.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";
import { Orders } from "./Orders.js";
import { addNewOrder } from "./database.js";

// event listener
// when user clicks the order button, their currently-chosen options (stored as state in orderBuilder) construct a new order object to be placed in state

document.addEventListener(
    "click", 
    e => {
        const selection = e.target
        if (selection.id === "orderButton") {
            addNewOrder()
        }
})


export const CarsRUs = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="selectors">
            <section class="selectors__paints">
                ${Paints()}
            </section>
            <section class="selectors__interiors">
                ${Interiors()}
            </section>
            <section class="selectors__technologies">
                ${Technologies()}
            </section
            <section class="selectors__wheels">
                ${Wheels()}
            </section>
        </article>
        
        <article>
            <button id="orderButton">Place Order</button>
        </article>
        
        <article class="orders">
            ${Orders()}
        </article>   
    `
}