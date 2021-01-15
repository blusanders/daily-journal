/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
       <div class="displayJournalEntry">
         <p class=displayJournalEntry__date>${entry.date}</p>
         <p class=displayJournalEntry__concept>${entry.concept}</p>
         <p class=displayJournalEntry__mood>${entry.mood}</p>
         <p class=displayJournalEntry__entry>${entry.entry}</p>
         <p>
         <input type="button" id="journalFields__button" value="Edit">
         <input type="button" id="journalFields__button" value="Delete">
         </p>
       </div>

    `
}