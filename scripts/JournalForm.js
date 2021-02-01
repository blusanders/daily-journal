import { saveEntry } from "./JournalDataProvider.js"
const contentTarget = document.querySelector(".journalForm")
const eventHub = document.querySelector(".container")

export const JournalForm = () => {
    renderJournalEntryForm()
    const dateVar = getFormattedDate(new Date());
    document.getElementById('journalDate').value = dateVar
}

//get formatted today's date for default form value
function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return year + '-' + month + '-' + day;
}

const renderJournalEntryForm = () => {
    contentTarget.innerHTML =

    `<label for="journalTitle">Title</label>
    <input type="text" id=journalTitle><div class="validation journalFormValidation__title"></div>

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
    const journalFormValidation__title = document.querySelector(".journalFormValidation__title")

    console.log("click");
        if (clickEvent.target.id === "journalButtonAdd") {

            if (document.getElementById("journalTitle").value===""){
                journalFormValidation__title.innerHTML = "Title is required."
                return false
            }

            const newEntry = {
                concept: document.getElementById("journalTitle").value,
                mood: document.getElementById("journalMood").value,
                date: document.getElementById("journalDate").value,
                entry: document.getElementById("journalEntry").value,
            }
    
            saveEntry(newEntry);
            //rerender form for blank values and detaul date
            JournalForm();
        }
    })

