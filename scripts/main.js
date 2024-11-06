import { PaintColors } from "./PaintColors.js"
import { PlaceOrder } from "./SaveSubmission.js"
import { SeatStyles } from "./SeatStyles.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { PlacedOrdersList } from "./PlacedOrdersList.js"

//render function
const render = async () => {
    const paintColors = await PaintColors()
    const seatStyles = await SeatStyles()
    const placeOrder = await PlaceOrder()
    const technologies = await Technologies()
    const wheels = await Wheels()
    const placedOrdersList = await PlacedOrdersList()
    const container = document.getElementById('container')
    let composedHTML = `
    <section class='allSelections'>
    <section class='paintColors'>
        <h2>Choose Color</h2>
        ${paintColors}
    </section>
    <section class='seatStyles'>
        <h2>Choose Interior</h2>
        ${seatStyles}
    </section>
    <section class='technologies'>
        <h2>Choose Tech</h2>
        ${technologies}
    </section>
    <section class='wheels'>
        <h2>Choose Wheels</h2>
        ${wheels}
    </section>
    </section>

    <section class='placedOrdersList'>
    <section class='placeOrderButton'>
    ${placeOrder}
    </section>
    ${placedOrdersList}
    </section>
    `
    container.innerHTML = composedHTML
}
render()

document.addEventListener("newOrderPlaced", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
