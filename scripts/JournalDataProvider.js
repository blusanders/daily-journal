import { JournalEntryList } from "./JournalEntryList.js";
const eventHub = document.querySelector(".container")

let entries = [];
let entrytags = [];

//return slice ordered by newest entry first
export const useEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    )
    return sortedByDate
}

export const getEntries = (moodId) => {
// debugger
    let fetchURL=""
    if(moodId===0){
        fetchURL= "http://localhost:8088/entries?_expand=mood"
    }else{
        fetchURL= "http://localhost:8088/entries?_expand=mood&moodId="+moodId
    }   

    return fetch(fetchURL)
        .then(response => response.json())
        .then(parsedEntries => {
            // debugger
            entries = parsedEntries
    })

}

export const clearEntries = () =>{

}

export const saveEntry = entry => {

    let fetchURL = "http://localhost:8088/entries"
    return fetch(fetchURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    // .then(getEntries())
    .then(dispatchStateChangeEvent())
}

export const deleteEntry = entryID => {
    return fetch('http://localhost:8088/entries/'+entryID, {
        method: "DELETE"
    })
    // .then(getEntries())
    .then(dispatchStateChangeEvent())
}

const dispatchStateChangeEvent = (eventType) => {
    const entryStateChangedEvent = new CustomEvent("entryStateChangedEvent")
    eventHub.dispatchEvent(entryStateChangedEvent)
}
