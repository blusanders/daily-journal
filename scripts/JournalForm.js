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
        <option value=0>How are you feeling?</option>
        <option value=1>Meh</option>
        <option value=2>Empty</option>
        <option value=3>Terrified</option>
        <option value=4>Dread</option>
    </select><div class="validation journalFormValidation__mood"></div>


    <label for="journalDate">Date of Entry</label>
    <input type="date" id="journalDate">

    <label for="journalEntry">Journal Entry</label>
    <textarea rows="4" cols="50" id="journalEntry"></textarea>

    <label for="journalTags">Tags</label>
    <input id="journalTags">

    <input type="button" class="journalButton" id=journalButtonAdd value="ADD">`
}

eventHub.addEventListener("click", clickEvent => {
    const journalFormValidation__title = document.querySelector(".journalFormValidation__title")
    const journalFormValidation__mood = document.querySelector(".journalFormValidation__mood")

        if (clickEvent.target.id === "journalButtonAdd") {

            let validVar = false

            //require title
            if (document.getElementById("journalTitle").value===""){
                journalFormValidation__title.innerHTML = "Title is required."
                console.log("title "+validVar);
                validVar = false
            }else{
                //if valid then remove invalid message
                validVar = true
                journalFormValidation__title.innerHTML = ""
            }

            //require mood. if title is valid and mood is valid then move on to save
            if (parseInt(document.getElementById("journalMood").value)===0){
                journalFormValidation__mood.innerHTML = "Mood is required."
                console.log("mood "+validVar);
                validVar = false
            }else{
                journalFormValidation__mood.innerHTML = ""
            }

            //build entry object
            const newEntry = {
                concept: document.getElementById("journalTitle").value,
                moodId: parseInt(document.getElementById("journalMood").value),
                date: document.getElementById("journalDate").value,
                entry: document.getElementById("journalEntry").value,
            }

            if (validVar === true) {
                console.log("save");
                //gather tags array
                let tagArray = []
                if (document.getElementById("journalTags").value!=""){
                    tagArray=document.getElementById("journalTags").value.split(",")
                }

                //save entry w tags array to add in entrytag provider after new Id is generated
                saveEntry(newEntry,tagArray)
                
                //re-render form for blank values and default date
                //this may be be wrong? set target values?
                JournalForm();
            };
        }
    })

