let tags = []

export const useTags = () => {
    return tags.slice()
}

export const getTags = () => {
    return fetch("http://localhost:8088/tags")
        .then(response => response.json())
        .then(apiData => {
            tags = apiData
            // debugger
        })
}

export const findTag = (subject) => {
//  return fetch(`${settings.apiURL}/tags?subject=${subject}`)
    return fetch(`http://localhost:8088/tags?subject=${subject}`)
    .then(response => response.json())
}

export const saveTag = (tag) => {

    let fetchURL = "http://localhost:8088/tags"
    return fetch(fetchURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({subject: tag})
    })
    .then(response => response.json())
}
