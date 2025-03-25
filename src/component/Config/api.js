import axios from "axios"

export const API_URL="http://localhost:8085"

export const api=axios.create({
    baseURL: API_URL,
    headers:{
        "Cntent-Type":"application/json",
    }
})