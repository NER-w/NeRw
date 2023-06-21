from pydantic import BaseModel
from datetime import datetime, date


class PatientDTO(BaseModel):
    email: str
    name: str
    lastname: str
    hashedPassword: str


class PatientLoginDTO(BaseModel):
    email: str
    password: str


class DoctorDTO(BaseModel):
    email: str
    name: str
    lastname: str
    hashedPassword: str


class DoctorLoginDTO(BaseModel):
    email: str
    password: str


class AppointmentDTO(BaseModel):
    id: int
    dateTime: datetime
    duration: int
    doctor: DoctorDTO


class MeasuredDataDTO(BaseModel):
    id: int
    data: str
    value: str
    patient: PatientDTO


class UserTrackerDTO(BaseModel):
    id: int
    deviceIP: int
    patient: PatientDTO


class DataPermissionsDTO(BaseModel):
    id: int
    doctor: DoctorDTO
    patient: PatientDTO


class PatientCreateDTO(BaseModel):
    email: str
    name: str
    lastname: str
    dateOfBirth: datetime


class AppointmentCreateDTO(BaseModel):
    dateTime: str
    duration: int
    patient_id: int
    doctor_id: int


class DoctorCreateDTO(BaseModel):
    email: str
    name: str
    lastname: str
    password: str


class MeasuredDataCreateDTO(BaseModel):
    data: str
    value: str
    patient_id: int


class UserTrackerCreateDTO(BaseModel):
    device_ip: int
    patient_id: int


class DataPermissionsCreateDTO(BaseModel):
    doctor_id: int
    patient_id: int


class UserResponseDto(BaseModel):
    id: int
    email: str
    name: str
    lastname: str
    user_id: int
    access_token: str


class BookingDTO(BaseModel):
    user_id: int
    appointment_id: int
