import { getEntries, useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const contentElement = document.querySelector("#entryLog")
    
export const JournalEntryList = () => {
    getEntries()
    .then(() => {
        const entryArray = useEntries()
        render(entryArray)
    })
}

const render = entryArray => {

    let htmlRep = ""
    // htmlRep += "<div class=criminalContainer>"

    entryArray.forEach(entryOjb => {
        htmlRep += JournalEntryComponent(entryOjb);
    });

    // htmlRep+="</div>"
    // debugger
    contentElement.innerHTML = htmlRep;
}
