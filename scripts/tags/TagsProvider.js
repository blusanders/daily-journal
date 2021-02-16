let tags = []

export const usetags = () => {
    return tags.slice()
}

export const gettags = () => {
    return fetch("http://localhost:8088/tags")
        .then(response => response.json())
        .then(apiData => {
            tags = apiData
        })
}