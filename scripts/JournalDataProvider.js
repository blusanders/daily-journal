import { JournalEntryList } from "./JournalEntryList.js";
import { saveEntryTags } from "./tags/EntryTagsProvider.js";
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

export const getEntries = (moodId) => {
// debugger
    let fetchURL=""
    if(moodId===0){
        fetchURL= "http://localhost:8088/entries?_expand=mood"
    }else{
        fetchURL= "http://localhost:8088/entries?_expand=mood&moodId=" + moodId
    }   

    return fetch(fetchURL)
        .then(response => response.json())
        .then(parsedEntries => {
            // debugger
            entries = parsedEntries
    })

}

export const saveEntry = (entry, tagArray) => {

    //save entry to entry table
    //save tags to entryTag table with created ID
    //send state change event
    let fetchURL = "http://localhost:8088/entries"
    return fetch(fetchURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(res => res.json())
    .then(createdEntry => {
        console.log(createdEntry.id)
        if (tagArray.length > 0){
            (saveEntryTags(tagArray,createdEntry.id))
        }
    })
    .then(dispatchStateChangeEvent)
}


export const deleteEntry = entryID => {
// debugger
    return fetch('http://localhost:8088/entries/'+entryID, {
        method: "DELETE"
    })
    .then(dispatchStateChangeEvent())
}

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChangedEvent")
    eventHub.dispatchEvent(entryStateChangedEvent)
}
