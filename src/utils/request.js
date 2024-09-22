import axios from "axios";
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    timeout: 5000
})
export const get = async (path,options = {}) => {
    try {
        const response = await request.get(path,options) 
        return response.data
    } catch (error) {
        console.error(error)
    }
}
export default request