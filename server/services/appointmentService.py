from models.dtoModels import AppointmentDTO, BookingDTO, AppointmentCreateDTO
from sqlalchemy.orm import Session
from models.dbModels import Appointment
from fastapi import HTTPException
from dbConnect import SessionLocal


async def retrieve_appointments_by_patient(patient_id_):
    db = SessionLocal()
    appointment_ = await db.query(Appointment).filter(patient_id=patient_id_).all()
    if appointment_:
        return appointment_
    else:
        raise HTTPException(status_code=400, detail="Appointment not found")


async def retrieve_appointments_by_doctor():
    db = SessionLocal()
    appointment_ = db.query(Appointment).filter(Appointment.patient_id is None).all()
    if appointment_:
        return appointment_
    else:
        raise HTTPException(status_code=400, detail="Appointment not found")


async def create_appointment_service(appointment_dto: AppointmentCreateDTO):
    db = SessionLocal()
    new_appointment = Appointment(dateTime=appointment_dto.dateTime, Duration=appointment_dto.duration,
                                  doctor_id=appointment_dto.doctor_id, patient_id=None)
    # new_appointment = Appointment(datetime= "2022-12-27 08:26:49.219717", duration=24,
    #                               doctor_id=1, patient_id=None)
    some = db.add(new_appointment)
    db.commit()
    return some


async def book_appointment_service(booking: BookingDTO):
    db = SessionLocal()
    appointment = db.query(Appointment).filter_by(id=booking.appointment_id).first()
    if appointment.patient_id is None:
        appointment.patient_id = booking.user_id
        db.commit()
        return appointment.patient_id
    else:
        raise HTTPException(status_code=400, detail="Appointment already booked")


async def remove_appointment(id_):
    db = SessionLocal()
    record = await db.query(Appointment).filter_by(id=id_).first()
    if record:
        db.delete(record)
    else:
        raise HTTPException(status_code=400, detail="Appointment not found")
