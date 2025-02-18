import axios from "axios"
import { Alert } from "react-native";

//header => x-api-key

const ApiClient = axios.create({
    baseURL: "https://api.spoonacular.com/recipes/",
    timeout: 50000,
    headers: {
        "x-api-key": "e3967d1eb9be4fc0a58bbedecd874d62"
    }
})

//API Interceptor 

// ApiClient.interceptors.request.use(
//     (config) => {
//         console.log("request ", config)
//         return config
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )

ApiClient.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        if (error.response.status == "401") {
            Alert.alert("Error with code 401", "please sign in again")
            return null
        }
        return Promise.reject(error)
    }
)

export default ApiClient