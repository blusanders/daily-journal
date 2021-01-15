/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">

        <div class=displayJournalEntry>
         <p class=displayJournalEntry__date>${entry.date}</p>
         <p class=displayJournalEntry__concept>${entry.concept}</p>
         <p class=displayJournalEntry__mood>${entry.mood}</p>
         <p class=displayJournalEntry__Entry>${entry.entry}</p>
         </div>

         </section>
    `
}