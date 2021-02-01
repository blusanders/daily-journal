// import { saveEntry } from "./JournalDataProvider.js"
const contentTarget = document.querySelector(".journalForm")
const eventHub = document.querySelector(".container")

export const JournalForm = () => {
    renderJournalEntryForm()
}

const renderJournalEntryForm = () => {
    contentTarget.innerHTML =

    `<label for="journalTitle">Title</label>
    <input type="text" id=journalTitle>

    <label for="journalMood">Mood</label>
    <select id="journalMood">
        <option value="1">Meh</option>
        <option value="2">Empty</option>
        <option value="3">Terrified</option>
        <option value="4">Dread</option>
    </select>

    <label for="journalDate">Date of Entry</label>
    <input type="date" id="journalDate">

    <label for="journalEntry">Journal Entry</label>
    <textarea rows="4" cols="50" id="journalEntry"></textarea>

    <input type="button" class="journalButton" id=journalButton value="Record Journal Entry">`
}

eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "journalButton") {
            debugger
            const newEntry = {
                title: document.getElementById("journalTitle").value,
                mood: document.getElementById("journalMood").value,
                date: document.getElementById("journalDate").value,
                entry: document.getElementById("journalEntry").value,
            }
    
            // Change API state and application state
            // saveEntry(newEntry);
            alert("Save Entry");
        }
    })

