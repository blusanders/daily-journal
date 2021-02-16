import { JournalEntryList } from "./JournalEntryList.js";
const eventHub = document.querySelector(".container")

let entries = [];

//return slice ordered by newest entry first
export const useEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    let fetchURL = "http://localhost:8088/entries?_expand=mood"
    return fetch(fetchURL)
        .then(response => response.json())
        .then(parsedEntries => {
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
    .then(JournalEntryList)
    // .then(clearEntries)
    .then(dispatchStateChangeEvent("entrySaved"))
}

export const deleteEntry = entryID => {
    // debugger
    return fetch('http://localhost:8088/entries/'+entryID, {
        method: "DELETE"
    })
    .then(JournalEntryList)
    .then(dispatchStateChangeEvent("entryDeleted"))
}

const dispatchStateChangeEvent = (eventType) => {
    // debugger
    const entryStateChangedEvent = new CustomEvent("entryStateChangedEvent", {
        detail: {
            entryStateEvent: eventType
        }  
    })

    eventHub.dispatchEvent(entryStateChangedEvent)
}
