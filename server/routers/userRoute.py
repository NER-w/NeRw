from fastapi import APIRouter, Request, Response
from services.userService import sign_up_doctor, sign_up_patient, login_doctor, login_patient, patient_checker, \
    doctor_checker
from dbConnect import SessionLocal
from models.dtoModels import DoctorDTO, DoctorLoginDTO, PatientDTO, PatientLoginDTO

router = APIRouter()


@router.post('/sign-up-doctor')
async def doc_sign_up(response: Response, doctor: DoctorDTO):
    if sign_up_doctor(doctor):
        # Return a JSON response with a custom status code
        response.status_code = 200
        return doctor
    else:
        response.status_code = 401
        # Return a JSON response with a different status code
        return doctor


@router.post('/login-doctor')
async def doc_login_route(doctor: DoctorLoginDTO):
    return login_doctor(doctor)


@router.get('/get-all')
async def doc_fetch_all():
    return 1


@router.post('/sign-up-patient')
async def pat_sign_up(response: Response, patient: PatientDTO):
    if sign_up_patient(patient):
        # Return a JSON response with a custom status code
        response.status_code = 200
        return patient
    else:
        # Return a JSON response with a different status code
        response.status_code = 401
        return patient


@router.post('/login-patient')
async def pat_login_route(patient: PatientLoginDTO):
    return pat_login_route(patient)


@router.post('/patient-checker')
async def pat_patient_checker(patient: PatientDTO):
    return patient_checker(patient)


@router.post('/doctor-checker')
async def pat_doctor_checker(doctor: DoctorDTO):
    return doctor_checker(doctor)
