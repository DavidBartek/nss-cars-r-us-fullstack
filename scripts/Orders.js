import { getPaintColors, getInterior, getTechnology, getWheels, getOrders } from "./database.js";

// this module will export an HTML string of custom orders.

// Orders() iteration 2: returns HTML string for each order: 
// carColor car with wheelType, interiorType, and the techPackage package for a total of totalCost

export const Orders = () => {
    const orders = getOrders()
    let html = `<h2>Custom Car Orders</h2>
    <section class="orders__list">`
    
    const builtArray = orders.map(orderHTMLBuilder)
    html += builtArray.join("")

    html += `</section>`
    return html
}


// helper function: orderHTMLBuilder
// takes 1 parameter: order
// get arrays (paints, interiors, tech, or wheels) & assign to local variable
// for each, use .find() to find the specified object and return into the function when id matches id in order.
// create new variable, totalCost, by accessing and adding up all price properties
// include 15000 for the base cost of the car
// convert totalCost into a string, to be interpolated into the returned string
// return an HTML-ready interpolated string

const orderHTMLBuilder = (order) => {
    // get arrays
    const paints = getPaintColors()
    const interiors = getInterior()
    const technologies = getTechnology()
    const wheels = getWheels()

    // access correct objects from each array
    const chosenPaint = paints.find((paint) => { // .find(): takes paints array; iterates through each element (assigns to parameter, paint); returns if paint.id === order.paintId
        return paint.id === order.paintId
    })
    const chosenInterior = interiors.find((interior) => {
        return interior.id === order.interiorId
    })
    const chosenTech = technologies.find((tech) => {
        return tech.id === order.techId
    })
    const chosenWheels = wheels.find((wheel) => {
        return wheel.id === order.wheelsId
    })

    // add up prices and convert to a string
    const totalCost = chosenPaint.price + chosenInterior.price + chosenTech.price + chosenWheels.price + 15000
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `    <div id="orders__list--item">
            <p>${chosenPaint.color} car with ${chosenWheels.option} wheels, ${chosenInterior.option}, and the ${chosenTech.package} for a total of ${costString}
        </div>`
}



// Orders() iteration 1: returns HTML string for each order: <p>Order #${order.id} was placed on ${order.timestamp}</p>`

// export const Orders = () => {
//     const orders = getOrders()
//     let html = `<h2>Custom Car Orders</h2>`
//     html += `<section class="orders__list">`
//     for (const order of orders) {
//         if (order.id === null) {
//             html += ""
//         } else {
//             html += `   <div id="orders__${order.id}">`
//             html += `       <p>Order #${order.id} was placed on ${order.timestamp}</p>`
//             html += `   </div>`
//         }
//     }
//     return html
// }