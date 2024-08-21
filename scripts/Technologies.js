import { setTechnologies } from "./TransientState.js"

const changeTechnologyHandler = (changeEvent) => {
    if (changeEvent.target.id === 'technology') {
        let parsedValue = parseInt(changeEvent.target.value)
        setTechnologies(parsedValue)
    }
}

export const Technologies = async () => {
    const response = await fetch("http://localhost:8088/technology")
    const technologies = await response.json()
    document.addEventListener("change", changeTechnologyHandler)
    let composeHTML = `
    <select id='technology' name='technology'>
        <option value='0' name='technology'> Choose Tech
    `
    technologies.map(tech => {
        composeHTML += `
        <option value='${tech.id}'> ${tech.package}
        `
    })
    composeHTML += `</select>`
    return composeHTML
}