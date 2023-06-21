import axios from "axios";

export const API_URL = "https://1b02-2001-1c06-1b06-8e00-bd77-9dd-392c-6cd1.ngrok-free.app/";

const api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
    // cancelToken: axios.CancelToken.source().token // Set default cancelToken
})

// const api = require('./index')
// patient requests
// zdraste
//

export async function patientRegistration(patientDTO) {
    try {
        const res = await api.post('/user/sign-up-patient', patientDTO);
        console.log("Status: " + res.status)
         return res.status;
    } catch (e) {
        console.error(e);
    }
}

export async function patientLogin(patientDTO) {
    try {
        return await api.post('/sign-up-patient', patientDTO);
    } catch (e) {
        console.error(e);
    }
}

export async function doctorLogin(doctorDTO) {
    try {
        return await api.post('/login-doctor', doctorDTO);
    } catch (e) {
        console.error(e);
    }
}

export async function doctorRegister(doctorDTO) {
    try {
        const res =  await api.post('/user/sign-up-doctor', doctorDTO);
        console.log("Status: " + res.status)
        return res.status;
    } catch (e) {
        console.error(e);
    }
}