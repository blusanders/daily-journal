/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
       <div class=displayJournalEntry class="journalEntry">
         <p class=displayJournalEntry__date>${entry.date}</p>
         <p class=displayJournalEntry__concept>${entry.concept}</p>
         <p class=displayJournalEntry__mood>${entry.mood}</p>
         <p class=displayJournalEntry__entry>${entry.entry}</p>
       </div>

    `
}