
export const MoodFilter = (allMoods) => {
    return `
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            <input checked type="radio" name="moodFilter" value="0"/>
            <label for="moodFilter--all">All</label>
            ${
                allMoods.map(
                    (mood) => {
                        // debugger
                        return `<input type="radio" name="moodFilter" value="${ mood.id }"/>
                        <label for="moodFilter--happy">${ mood.label }</label>
                        `
                    }
                ).join("")
            }
        </fieldset>
        `
}

