import { getPaintColors, getInterior, getTechnology, getWheels, getOrders } from "./database.js";

// this module will export an HTML string of custom orders.


export const Orders = () => {
    const orders = getOrders()
    let html = `<h2>Custom Car Orders</h2>`
    html += `<section class="orders__list">`
    for (const order of orders) {
        if (order.id === null) {
            html += ""
        } else {
            html += `   <div id="orders__${order.id}">`
            html += `       <p>Order #${order.id} was placed on ${order.timestamp}</p>`
            html += `   </div>`
        }
//         // return paint
//         // return interior
//         // return tech
//         // return wheels
    }
    return html
}

// const paintOrder = (order) => {
//     const paintColors = getPaintColors()
//     let foundPaint = null
//     for (const paint of paintColors) {
//         if (order.paintId === paint.id) {

//         }
//     }
//     return 
// }