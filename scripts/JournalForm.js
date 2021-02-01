import { saveEntry } from "./JournalDataProvider.js"
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
        <option value="Meh">Meh</option>
        <option value="Empty">Empty</option>
        <option value="Terrified">Terrified</option>
        <option value="Dread">Dread</option>
    </select>

    <label for="journalDate">Date of Entry</label>
    <input type="date" id="journalDate">

    <label for="journalEntry">Journal Entry</label>
    <textarea rows="4" cols="50" id="journalEntry"></textarea>

    <input type="button" class="journalButton" id=journalButtonAdd value="Record Journal Entry">`
}

eventHub.addEventListener("click", clickEvent => {
    console.log("click");
        if (clickEvent.target.id === "journalButtonAdd") {

            const newEntry = {
                concept: document.getElementById("journalTitle").value,
                mood: document.getElementById("journalMood").value,
                date: document.getElementById("journalDate").value,
                entry: document.getElementById("journalEntry").value,
            }
    
            saveEntry(newEntry);
            document.getElementById("journalTitle").value=""
            document.getElementById("journalMood").value=""
            document.getElementById("journalDate").value=""
            document.getElementById("journalEntry").value=""
        }
    })

