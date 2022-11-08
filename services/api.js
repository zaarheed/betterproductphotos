import config from "@/constants/config";

const { apiUrl } = config;

const lambda_get = (url, headers = {}) => {
    return fetch(`/api${url}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    })
}

const lambda_post = (url, payload, headers = {}) => {
    return fetch(`/api${url}`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    })
}

const api_post = (url, payload, headers = {}) => {
    return fetch(`${apiUrl}/${url}`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    })
}

export const lambda = {
    get: lambda_get,
    post: lambda_post
};

export const api = {
    post: api_post
};