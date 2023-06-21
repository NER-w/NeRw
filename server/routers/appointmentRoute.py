from fastapi import APIRouter, Request, Response
from dbConnect import SessionLocal
from models.dtoModels import AppointmentDTO, AppointmentCreateDTO, BookingDTO

router = APIRouter()
from services.appointmentService import retrieve_appointments_by_doctor, retrieve_appointments_by_patient, \
    create_appointment_service, book_appointment_service


@router.post('/')
async def create_appointment(appointment: AppointmentCreateDTO):
    return await create_appointment_service(appointment)


@router.get('/{id}')
async def rettrieve_by_patient(id: int):
    return await retrieve_appointments_by_patient(id)


@router.get('/')
async def retrieve_by_doctor():
    return await retrieve_appointments_by_doctor()


@router.delete('/{id}')
async def remove_appointment(id: int):
    return await remove_appointment_service(id)


@router.post('/book')
async def book_appointment(booking: BookingDTO):
    return await book_appointment_service(booking)
