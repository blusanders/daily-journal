/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "1/1/2021",
        concept: "l'infini",
        entry: "Look up and let us meet among the stars and light up the heavens as we chase each other like comets of twisted fire blazing by astronauts and lost satellites. Past our past as we race history into darkness. Au revoir young planet. Avancer dans l'infini.",
        mood: "meh"
    }

    {
        id: 2,
        date: "1/1/2016",
        concept: "london on a tuesday night",
        entry: "Walk with me in the gray Kiss me in the mist Laugh at all the funny cars Watch the sky kidnap the stars With a hat and a shawl We don't need anyone at all Wrapped up until the foggy light London on a Tuesday night",
        mood: "terrified"
    }

    {
        id: 3,
        date: "1/1/2020",
        concept: "untitled",
        entry: "you are poetry i inted to write",
        mood: "dred"
    }

    {
        id: 4,
        date: "1/1/2019",
        concept: "methylene blue",
        entry: "when you kissed me there must have been poison in your tooth a hidden weapon a colorless hue how else to make sense of loss of breath vertigo time is no antidote i’ll need methylene blue to get over you",
        mood: "empty"
    }

]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

