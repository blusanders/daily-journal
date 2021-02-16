import { MoodFilter } from "./MoodFilter.js"
import { getMoods, useMoods } from "./MoodProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters")

const render = (moodArray) => {
        contentTarget.innerHTML = `
            ${MoodFilter(moodArray)}
        `
    }

export const MoodList = () => {
    getMoods()
    .then(() => {
        const moodArray = useMoods()
        // debugger
        render(moodArray)
    })
}


eventHub.addEventListener("change", e => {
    if (e.target.name === "moodFilter") {
        alert("MOOD CHANGE")
    }
})

