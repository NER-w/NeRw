// import {Axios} from 'axios';
// const axios = require('axios');


    import axios from "axios";

    export const API_URL = process.env.API_HOST;

    const api = axios.create({
        withCredentials: true,
        baseURL: API_URL,
        // cancelToken: axios.CancelToken.source().token // Set default cancelToken
    })

export default api