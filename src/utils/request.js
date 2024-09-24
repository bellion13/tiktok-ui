import axios from 'axios';
console.log(process.env);
const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
export const get = async (path, options = {}) => {
    try {
        const response = await request.get(path, options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
export default request;
