import { findTag, saveTag } from "../tags/TagsProvider.js"

let entryTags = []

export const useEntryTags = () => {
    return entryTags.slice()
}

export const getEntryTags = () => {
    return fetch("http://localhost:8088/entrytags")
        .then(response => response.json())
        .then(apiData => {
            entryTags = apiData
        })
}

export const saveEntryTags = (tagArray, createdEntryId) => {
    //find if tag is in tag table
    //if it is in table then find tag entry and use id
    //if it isn't then add tag to table and use newly created id
    tagArray.forEach(tagInArray => {
    
        findTag(tagInArray)  // tag variable will have a string value
        .then(matches => {  // `matches` variable value will be array of matching objects
            let matchingTag = null
    
            if (matches.length > 0) {
                matchingTag = matches[0].id
            }
debugger
            if (matchingTag === null) {
                // Tag doesn't exist. Create it then assign it to entry.
                saveTag(tagInArray)
                    .then(new_tag => {
debugger
                        saveEntryTag(createdEntryId, new_tag.id)
                    })
            }
            else {
                // Tag does exist. Assign it to entry.
                saveEntryTag(createdEntryId, matchingTag)
            }
        })

    });

}

const saveEntryTag = (entryId, tagId) => {

    const newEntryTag = {
        entryId: parseInt(entryId),
        tagId: parseInt(tagId)
    }

    let fetchURL = "http://localhost:8088/entrytags"
    return fetch(fetchURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntryTag)
    })
}

