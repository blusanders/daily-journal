import { getEntries, useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const contentElement = document.querySelector("#entryLog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryStateChangedEvent", clickEvent => {
    //if journal entry list has changed then rerender it
    JournalEntryList();
})

eventHub.addEventListener("click", clickEvent => {
    // debugger
    if (clickEvent.target.id === "journalButtonDelete") {
        alert("DELETE")
    }

    if (clickEvent.target.id === "journalButtonEdit") {
        alert("EDIT")
    }
})

//fetches entry, uses a slice of the entry array, renders to DOM
export const JournalEntryList = () => {
    getEntries()
    .then(() => {
        const entryArray = useEntries()
        render(entryArray)
    })
}

//renders entry list to DOM 
const render = entryArray => {

    let htmlRep = ""

    entryArray.forEach(entryOjb => {
        htmlRep += JournalEntryComponent(entryOjb);
    });

    contentElement.innerHTML = htmlRep;
}

