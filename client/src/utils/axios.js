import axios from "axios"

const api = axios.create({
    withCredentials: true,
    baseURL: "https://kms-omega.vercel.app"
})

export default api