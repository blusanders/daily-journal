import { JournalEntryList } from "./JournalEntryList.js";
const eventHub = document.querySelector(".container")

let entries = [];

export const useEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    return fetch('http://localhost:8088/entries')
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
        })
}

export const clearEntries = () =>{

}

export const saveEntry = entry => {
    // debugger
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(JournalEntryList)
    // .then(clearEntries)
    .then(dispatchStateChangeEvent)
}

const dispatchStateChangeEvent = () => {
    // debugger
    const entryStateChangedEvent = new CustomEvent("entryStateChangedEvent", {
        detail: {
            entryStateEvent: "entrySaved",
        }  
    })

    eventHub.dispatchEvent(entryStateChangedEvent)
}
