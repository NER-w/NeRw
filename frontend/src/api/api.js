import axios from "axios";

export const API_URL = process.env.API_HOST;

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    // cancelToken: axios.CancelToken.source().token // Set default cancelToken
})

// const api = require('./index')
/// patient requests

//

export async function patientRegistration(patientDTO) {
    try {
        return await api.post('/patient-registration', patientDTO);
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

export async function doctorRegister() {
    try {
        return await api.post('/user/sign-up-doctor', {
            name: "oskar",
            lastname: "sada",
            password: "mamaka",
            email: "test@"
        });
    } catch (e) {
        console.error(e);
    }
}