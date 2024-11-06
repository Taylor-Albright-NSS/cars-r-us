import { setWheels } from "./TransientState.js"
const wheelsEventHandler = async (changeEvent) => {
    if (changeEvent.target.id === 'wheel') {
        let parsedValue = parseInt(changeEvent.target.value)
        setWheels(parsedValue)
    }
}

export const Wheels = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()
    document.addEventListener("change", wheelsEventHandler)
    let composeWheelsHTML = `
    <select id='wheel' name='wheel'>
        <option value='0'> Choose Wheels
    `
    wheels.map(wheel => {
        composeWheelsHTML += `
        <option value='${wheel.id}'> ${wheel.wheelType}
        `
    })
    composeWheelsHTML += `</select>`
    return composeWheelsHTML
}
