import { deleteEntry, getEntries, useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const contentElement = document.querySelector("#entryLog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryStateChangedEvent", clickEvent => {
    //if journal entry list has changed then rerender it
    JournalEntryList(0);
})

eventHub.addEventListener("click", clickEvent => {
    
    //if delete then delete entry after confirmation
    if (clickEvent.target.id.startsWith("journalButtonDelete--")) {
        if (confirm("Are you sure?")) {
            deleteEntry(clickEvent.target.id.split("--")[1])
        }
    }

    //if edit then fill form with entry
    if (clickEvent.target.id === "journalButtonEdit") {
        alert("EDIT")
    }

})

//fetches entries by mood filter and uses a slice of array. then renders to DOM.
export const JournalEntryList = (moodID) => {
    getEntries(moodID)
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
// debugger
    contentElement.innerHTML = htmlRep;
}

