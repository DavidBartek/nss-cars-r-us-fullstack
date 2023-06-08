const database = {
    paintColor: [
        { id: 1, color: "silver", price: 500 },
        { id: 2, color: "midnight blue", price: 1000 },
        { id: 3, color: "firebrick red", price: 1000 },
        { id: 4, color: "spring green", price: 1000 }
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
        { id: 1, option: "17-inch Pair Radial", size: 17, wheelType: "radial", color: undefined, price: 500 },
        { id: 2, option: "17-inch Pair Radial Black", size: 17, wheelType: "radial", color: "black", price: 1000 },
        { id: 3, option: "18-inch Pair Spoke Silver", size: 18, wheelType: "spoke", color: "silver", price: 1500 },
        { id: 4, option: "18-inch Pair Spoke Black", size: 18, wheelType: "spoke", color: "black", price: 2000 },
    ],
    order: [
        { id: null, paintId: null, interiorId: null, techId: null, wheelsId: null }
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

// setter functions: change state of orderBuilder

export const setPaintColor = (id) => {
    database.orderBuilder.paintId
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId
}

export const setTech = (id) => {
    database.orderBuilder.techId
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId
}

// setter function: change state of order based on inputs from orderBuilder

