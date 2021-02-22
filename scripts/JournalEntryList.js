import { deleteEntry, getEntries, useEntries } from "./JournalDataProvider.js"
import { getEntryTags, useEntryTags } from "./../scripts/tags/EntryTagsProvider.js"
import { getTags, useTags } from "./../scripts/tags/TagsProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const contentElement = document.querySelector("#entryLog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryStateChangedEvent", clickEvent => {
    //if journal entry list has changed then rerender it
// debugger
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
    .then(getTags)
    .then(getEntryTags)
    .then(()=>{
        const allEntries = useEntries()
        const allTags = useTags()
        const allEntryTags = useEntryTags()
        render(allEntries,allTags,allEntryTags)
    })
}

//renders entry list with tags to DOM 
const render = (allEntries, allTags, allEntryTags) => {

    let htmlRep = ""

    allEntries.forEach(entryObj => {

    //get all tags from each entry
    let currentEntryTags = allEntryTags.filter(eachEntryTag => entryObj.id === eachEntryTag.entryId)
    let currentTagName = currentEntryTags.map(x => allTags.find(tag => tag.id === x.tagId))
    //make tags string from array
    let tagsHTML = currentTagName.map(eachTag=>eachTag.subject).join(", ")

    //create html for each item sending entry and tags
    htmlRep += JournalEntryComponent(entryObj,tagsHTML);

    });

    //render each entry on DOM
    contentElement.innerHTML = htmlRep;
}

