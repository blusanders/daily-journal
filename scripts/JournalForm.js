// import { saveEntry } from "./JournalDataProvider.js"
const contentTarget = document.querySelector(".journalForm")

export const JournalForm = () => {
    renderJournalEntryForm()
}

const renderJournalEntryForm = () => {
    contentTarget.innerHTML =

    `<label for="journalTitle">Title</label>
    <input type="text" id=journalFields__title>

    <label for="journalMood">Mood</label>
    <select name="journalMood" id="journalFields__mood">
        <option value="1">Meh</option>
        <option value="2">Empty</option>
        <option value="3">Terrified</option>
        <option value="4">Dread</option>
    </select>

    <label for="journalDate">Date of Entry</label>
    <input type="date" name="journalDate" id="journalFields__date">

    <label for="journalEntry">Journal Entry</label>
    <textarea rows="4" cols="50" id="journalFields__entry" name="journalEntry">
    </textarea>

    <input type="button" id="journalFields__button" value="Record Journal Entry">`
}



// // Handle browser-generated click event in component
// eventHub.addEventListener("click", clickEvent => {
//     clickEvent.preventDefault(); 
//         if (clickEvent.target.id === "journalFields__button") {
//             const newEntry = {
//                 title: document.getElementById("noteAuthor").value,
//                 mood: document.getElementById("noteText").value,
//                 date: document.getElementById("noteSuspect").value,
//                 entry: document.getElementById("noteTimestamp").value,
//             }
    
//             // Change API state and application state
//             saveEntry(newEntry);
//         }
//     })
    
    