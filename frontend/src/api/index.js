const axios = require('axios');

export const API_URL = 'http://localhost:8000/api'

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    cancelToken: axios.CancelToken.source().token // Set default cancelToken
})

export default api