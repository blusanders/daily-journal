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