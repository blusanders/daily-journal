/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  // debugger
  return `
      <div class="displayJournalEntry">
        <p class="displayJournalEntry__concept displayJournalEntry__p">${entry.concept}</p>
        <p class="displayJournalEntry__date displayJournalEntry__p">${entry.date}</p>
        <p class="displayJournalEntry__mood displayJournalEntry__p">${entry.mood.label}</p>
        <p class="displayJournalEntry__entry ">${entry.entry.replace(new RegExp('\r?\n','g'), '<br />')}
        </p>
        <p>
        <input type="button" class="journalButton" id="journalButtonEdit" value="Edit">
        <input type="button" class="journalButton" id="journalButtonDelete--${entry.id}" value="Delete">
        </p>
        <hr>
      </div>
    `
} 