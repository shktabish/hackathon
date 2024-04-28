import axios from "axios"

const api = axios.create({
    withCredentials: true,
    baseURL: "https://kms-omega.vercel.app/api/v1"
})

export default api