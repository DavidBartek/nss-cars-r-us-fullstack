const database = {
    paintColor: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 1000 },
        { id: 3, color: "Firebrick Red", price: 1000 },
        { id: 4, color: "Spring Green", price: 1000 }
    ],
    interior: [
        { id: 1, option: "beige fabric", color: "beige", fabricType: "fabric", price: 500 },
        { id: 2, option: "charcoal fabric", color: "charcoal", fabricType: "fabric", price: 500 },
        { id: 3, option: "white leather", color: "white", fabricType: "leather", price: 1500 },
        { id: 4, option: "black leather", color: "black", fabricType: "leather", price: 1500 }
    ],
    technology: [
        { id: 1, package: "Basic Package", features: ["basic sound system"], price: 0 },
        { id: 2, package: "Navigation Package", features: ["basic sound system", "integrated navigation controls"], price: 2000 },
        { id: 3, package: "Visibility Package", features: ["basic sound system", "side and rear cameras"], price: 3000 },
        { id: 4, package: "Ultra Package", features: ["basic sound system", "integrated navigation controls", "side and rear cameras"], price: 4500 },
    ],
    wheels: [
        { id: 1, option: "17-inch Pair Radial", size: 17, wheelType: "radial", color: "none", price: 500 },
        { id: 2, option: "17-inch Pair Radial Black", size: 17, wheelType: "radial", color: "black", price: 1000 },
        { id: 3, option: "18-inch Pair Spoke Silver", size: 18, wheelType: "spoke", color: "silver", price: 1500 },
        { id: 4, option: "18-inch Pair Spoke Black", size: 18, wheelType: "spoke", color: "black", price: 2000 },
    ],
    orders: [
       { id: 1, paintId: 1, interiorId: 1, techId: 1, wheelsId: 1, timestamp: 1 }
    ],
    orderBuilder: {
        paintId: null, interiorId: null, techId: null, wheelsId: null
    }
}

// "getter" functions

export const getPaintColors = () => {
    return database.paintColor.map(paint => ({ ...paint }))
}

export const getInterior = () => {
    return database.interior.map(interiorOpt => ({ ...interiorOpt }))
}

export const getTechnology = () => {
    return database.technology.map(tech => ({ ...tech }))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}

export const getOrders = () => {
    return database.orders.map(order => ({ ...order }))
}

// setter functions: change temporary state of orderBuilder

export const setPaintColor = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

// setter function: change permanent state of orders based on inputs from orderBuilder

export const addNewOrder = () => {
    // initializes new object in variable newOrder
    const newOrder = { ...database.orderBuilder}

    // assigns the "next in line" index to the new order
    const mostRecentIndex = database.orders.length - 1
    newOrder.id = database.orders[mostRecentIndex].id + 1

    // populates timestamp property to when the button is clicked
    newOrder.timestamp = Date.now()

    // pushes new order object to orders array
    database.orders.push(newOrder)

    // resets orderBuilder
    database.orderBuilder = {}

    // dispatches a new custom event ("stateChanged") to the DOM; synchronously invokes the affected event listener.
    // this is the final step to "firing" an event; created and initialized in main.js
    document.dispatchEvent(new CustomEvent("stateChanged"))
}