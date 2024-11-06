import { setPaintColors } from "./TransientState.js"

const changeColorHandler = (changeEvent) => {
    if (changeEvent.target.id === 'color') {
        let parsedValue = parseInt(changeEvent.target.value)
        setPaintColors(parsedValue)
    }
}

export const PaintColors = async () => {
    const response = await fetch("http://localhost:8088/paintColors")
    const paintColors = await response.json()
    document.addEventListener("change", changeColorHandler)


    let composingHTML = `
    <select id='color' name='color'>
        <option value='0' name='color'> Choose Color
    `
    paintColors.map(color => {
        composingHTML += `
        <option value='${color.id}' name='color'> ${color.color}
        `
    }).join('')
    composingHTML += `</select>`
    return composingHTML
}