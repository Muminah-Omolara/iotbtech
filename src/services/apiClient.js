export const apiClient = {
    async request(url, method = "GET", body = null, headers = {}){
        const options = {
            method: method, 
            headers: {
                "Content-Type": "application/json",
                ...headers
            }
        }
        if (body){
            options.body = JSON.stringify(body)
        }
        const response = await fetch(url, options)
        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message || "An error occured while makeing API request")
        }
        return response.json()
    },

    async get(url, headers = {}){
        const response = await this.request(url, "GET", null, headers)
        return response
    },
    async post(url, body, headers = {}){
        return await this.request(url, "POST", body, headers)
    }
}