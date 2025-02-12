import axios from "axios"


const ApiClient = axios.create({
    baseURL: "https://api.spoonacular.com/recipes/",
    timeout: 50000,
    headers: {
        "x-api-key": "e3967d1eb9be4fc0a58bbedecd874d62"
    }
})


export default ApiClient