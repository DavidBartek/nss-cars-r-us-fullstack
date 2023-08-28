const database = {
    orderBuilder: {

    },
    paints: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 710 },
        { id: 3, color: "Firebrick Red", price: 965 },
        { id: 4, color: "Spring Green", price: 965 }
    ],
    technologies: [
        { id: 1, package: "Basic Package", price: 500 },
        { id: 2, package: "Navigation Package", price: 710 },
        { id: 3, package: "Visibility Package", price: 965 },
        { id: 4, package: "Ultra Package", price: 965 }
    ],
    interiors: [
        { id: 1, material: "Beige Fabric", price: 405 },
        { id: 2, material: "Charcoal Fabric", price: 782 },
        { id: 3, material: "White Leather", price: 1470 },
        { id: 4, material: "Black Leather", price: 1997 }
    ],
    wheels: [
        { id: 1, style: "17-inch Pair Radial", price: 12.42 },
        { id: 2, style: "17-inch Pair Radial Black", price: 736.4 },
        { id: 3, style: "18-inch Pair Spoke Silver", price: 1258.9 },
        { id: 4, style: "18-inch Pair Spoke Black", price: 795.45 }
    ],
    customOrders: [
        {
            id: 1,
            interiorId: 3,
            wheelId: 2,
            technologyId: 1,
            paintId: 3
        }
    ]
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
    // document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getCurrentOrder = () => {
    return database.orderBuilder
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
    // document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
    // document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
    // document.dispatchEvent(new CustomEvent("stateChanged"))
}

// NEW add custom order POST

export const addCustomOrder = async () => {
    const newOrder = {...database.orderBuilder}
    await fetch(`${apiDomain}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newOrder),
    });
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
};

// NEW completeOrder - called when "complete" button on an order in the orders list is clicked

export const completeOrder = async (orderId) => {
    await fetch(`${apiDomain}/orders/${orderId}/fulfill`, {
        method: "POST",
    });
    document.dispatchEvent(new CustomEvent("stateChanged"));
};

// NEW API getters

const apiDomain = `https://localhost:7226`

export const getOrders = async () => {
    const res = await fetch(`${apiDomain}/orders`);
    const data = await res.json();
    return data;
}

export const getWheels = async () => {
    const res = await fetch(`${apiDomain}/wheels`);
    const data = await res.json();
    return data;
}

export const getInteriors = async () => {
    const res = await fetch(`${apiDomain}/interiors`);
    const data = await res.json();
    return data;
}

export const getTechnologies = async () => {
    const res = await fetch(`${apiDomain}/technologies`);
    console.log(res); // ^^ waits for the promise returned by fetch; res is the server response object
    const data = await res.json();
    console.log(data); // ^^ reads the server response object as JSON data. Returns another promise, resolves to parsed JSON data, stored in "data". "Await" waits for this promise to resolve.
    return data;
};

export const getPaints = async () => {
    const res = await fetch(`${apiDomain}/paintColors`);
    const data = await res.json();
    return data;
}

// original local database getters

// export const getOrders = () => {
//     return [...database.customOrders]
// }

// export const getWheels = () => {
//     return [...database.wheels]
// }

// export const getInteriors = () => {
//     return [...database.interiors]
// }

// export const getTechnologies = () => {
//     return [...database.technologies]
// }

// export const getPaints = () => {
//     return [...database.paints]
// }

// original database create order setter

// export const addCustomOrder = () => {
//     const newOrder = {...database.orderBuilder}
//     newOrder.timestamp = new Date().toLocaleDateString("en-US")
//     newOrder.id = database.customOrders[database.customOrders.length - 1].id + 1
//     database.customOrders.push(newOrder)

//     database.orderBuilder = {}
//     document.dispatchEvent(new CustomEvent("stateChanged"))