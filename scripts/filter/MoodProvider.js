const eventHub = document.querySelector(".container")

let allMoods = [];

//return slice ordered by newest entry first
export const useMoods = () => {
    return allMoods
}

export const getMoods = () => {
    let fetchURL = "http://localhost:8088/moods"
    return fetch(fetchURL)
        .then(response => response.json())
        .then(parsedEntries => {
            allMoods = parsedEntries
        })
}
