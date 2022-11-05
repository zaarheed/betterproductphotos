const post = (url, payload, headers = {}) => {
    return fetch(`/api${url}`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    })
}

export const lambda = {
    post
};