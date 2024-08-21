let transientState = {
    "paintColorsId": 0,
    "interiorsId": 0,
    "technologiesId": 0,
    "wheelsId": 0
}

export const setPaintColors = (chosenColor) => {
    transientState.paintColorsId = chosenColor
    console.log(transientState)
}
export const setSeatStyles = (chosenInterior) => {
    transientState.interiorsId = chosenInterior
    console.log(transientState)
}
export const setTechnologies = (chosenTechnology) => {
    transientState.technologiesId = chosenTechnology
    console.log(transientState)
}
export const setWheels = (chosenWheel) => {
    transientState.wheelsId = chosenWheel
    console.log(transientState)
}

export const saveOrderSubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
}