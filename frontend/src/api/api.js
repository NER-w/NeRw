import axios from "axios";

export const API_URL = "https://230f-2001-1c06-1b15-4700-8e53-99be-b4ae-3b11.ngrok-free.app/";

const api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Acess-Control-Allow-Methods": ["GET", "POST"],
        "User-Agent": "axios",
    }
})

async function request(method, url, payload) {
    try {
        const res = await method(url, payload);
        console.debug("Status:", res)
        return res;
    } catch (e) {
        console.error(e);
    }
}

const requestGet  = async (url)          => request(api.get, url, null);
const requestPost = async (url, payload) => request(api.post, url, payload);

// User/Doctor login/registration
export const patientLogin    = async (patientDTO) => requestPost("/user/login-patient", patientDTO);
export const patientRegister = async (patientDTO) => requestPost("/user/sign-up-patient", patientDTO);
export const doctorLogin     = async (doctorDTO)  => requestPost("/user/login-doctor", doctorDTO);
export const doctorRegister  = async (doctorDTO)  => requestPost("/user/sign-up-doctor", doctorDTO);

// Appointments
export const appointmentsGet    = async ()               => requestGet("/appointment");
export const appointmentGetById = async (id)             => requestGet("/appointment/" + id);
export const appointmentCreate  = async (appointmentDTO) => requestPost("/appointment", appointmentDTO);
export const appointmentBook    = async (bookDTO)        => requestPost("/appointment/book", bookDTO);