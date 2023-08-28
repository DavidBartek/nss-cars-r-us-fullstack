import { getOrders } from "./database.js"

export const Orders = async () => {
    
    const orders = await getOrders()

    return `${
        orders.map(order => {
            // const paint = paints.find(p => p.id === order.paintId)
            // const technology = techs.find(t => t.id === order.technologyId)
            // const interior = interiors.find(i => i.id === order.interiorId)
            // const wheel = wheels.find(w => w.id === order.wheelId)

            return `<section class="order">
                ${order.paintColor.color} car with
                ${order.wheels.style} wheels,
                ${order.interior.material} interior,
                and the ${order.technology.package}
                for a total cost of $${order.totalCost}
                <input type="button" name="complete" id="${order.id}" value="Complete">
            </section>`
        })
        .join("")
    }`
}