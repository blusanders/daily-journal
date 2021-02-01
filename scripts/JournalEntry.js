/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
      <div class="displayJournalEntry">
        <p class="displayJournalEntry__concept displayJournalEntry__p">${entry.concept}</p>
        <p class="displayJournalEntry__date displayJournalEntry__p">${entry.date}</p>
        <p class="displayJournalEntry__mood displayJournalEntry__p">${entry.mood}</p>
        <p class="displayJournalEntry__entry ">${entry.entry}</p>
        <p>
        <input type="button" class="journalButton" value="Edit">
        <input type="button" class="journalButton" value="Delete">
        </p>
        <hr>
      </div>

    `
}