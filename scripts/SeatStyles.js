import { setSeatStyles } from "./TransientState.js"

const changeInteriorHandler = (changeEvent) => {
    if (changeEvent.target.id === 'interior') {
        let parsedValue = parseInt(changeEvent.target.value)
        setSeatStyles(parsedValue)
    }
}

export const SeatStyles = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()
    document.addEventListener("change", changeInteriorHandler)
    console.log(interiors)
    let composingHTML = `
    <select id='interior' name='interior'>
        <option value='0' name='interior'> Choose Interior
    `
    interiors.map(interior => {
        composingHTML += `
        <option value='${interior.id}' name='color'> ${interior.seatType}
        `
    }).join('')
    composingHTML += `</select>`
    return composingHTML
}