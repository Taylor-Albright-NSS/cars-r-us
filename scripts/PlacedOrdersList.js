export const PlacedOrdersList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=interiors&_expand=paintColors&_expand=wheels&_expand=technologies")
    const placedOrders = await response.json()
    let compiledOrders = ``
    placedOrders.map(order => {
        console.log(order)
        let price = (order.paintColors.price + order.interiors.price + order.technologies.price + order.wheels.price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        compiledOrders += `
        <div class='singleOrder'>A ${order.paintColors.color} car with ${order.interiors.seatType} seats, a ${order.technologies.package}, and ${order.wheels.wheelType} wheels.<br>
        The total price is ${price}
        </div>`
    })
    return compiledOrders
}

//?_expand=