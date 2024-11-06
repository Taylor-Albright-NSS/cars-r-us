import { saveOrderSubmission } from "./TransientState.js";
import { getTransientState } from "./TransientState.js";

const handlePlaceOrderClick = (clickEvent) => {
    if (clickEvent.target.id === 'saveOrder') {
        const transientState = getTransientState()
        for (const key in transientState) {
            if (transientState[key] < 1) {
                window.alert('Please make a selection in each field before submitting.')
                return
            }
        }
        saveOrderSubmission()
        clearTransientState(transientState)
    }
}

function clearTransientState(state) {
    for (const key in state) {
        state[key] = 0
    }
}

export const PlaceOrder = () => {
    document.addEventListener("click", handlePlaceOrderClick)
    return `<button id='saveOrder'>Save Order</button>`
}