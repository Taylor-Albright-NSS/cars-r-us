import { PaintColors } from "./PaintColors.js"
import { PlaceOrder } from "./SaveSubmission.js"
import { SeatStyles } from "./SeatStyles.js"
import { Technologies } from "./Technologies.js"

//render function
const render = async () => {
    const paintColors = await PaintColors()
    const seatStyles = await SeatStyles()
    const placeOrder = await PlaceOrder()
    const technologies = await Technologies()
    const container = document.getElementById('container')
    let composedHTML = `
    <section>
        <h2>Choose Color</h2>
        ${paintColors}
    </section>

    <section>
        <h2>Choose Interior</h2>
        ${seatStyles}
    </section>
    <section>
        <h2>Choose Tech Package</h2>
        ${technologies}
    </section>
    
    <section>
    ${placeOrder}
    </section>
    `
    container.innerHTML = composedHTML
}
render()

document.addEventListener("newOrderPlaced", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
