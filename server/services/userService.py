from models.dbModels import Patient, Doctor
from models.dtoModels import PatientDTO, DoctorDTO, DoctorLoginDTO, PatientLoginDTO
from sqlalchemy.orm import Session
from dbConnect import SessionLocal
import bcrypt

salt = bcrypt.gensalt(5)


def patient_checker(patient: PatientDTO):
    db = SessionLocal()
    # salt = bcrypt.gensalt(5)
    user = db.query(Patient).filter_by(id=patient.id, password=pwhash).first()
    return user is not None


async def sign_up_patient(patient: PatientDTO):
    db = SessionLocal()
    # salt = bcrypt.gensalt(5)
    pwhash = bcrypt.hashpw(patient.hashedPassword.encode(), salt)
    added_patient = await db.query(Patient).filter_by(email=patient.email).first()
    if added_patient:
        return False
    new_patient = Patient(
        name=patient.name,
        lastname=patient.lastname,
        email=patient.email,
        hashed_password=pwhash
    )
    db.add(new_patient)
    db.commit()
    return True


async def login_patient(patient: PatientLoginDTO):
    db = SessionLocal()
    pwhash = bcrypt.hashpw(patient.password.encode(), salt)
    patient_ = await db.query(Patient).filter_by(email=patient.email, hashed_password=pwhash).first()
    if patient_:
        return True
    else:
        return False


def doctor_checker(doctor: DoctorDTO):
    db = SessionLocal()
    # salt = bcrypt.gensalt(5)
    pwhash = bcrypt.hashpw(doctor.hashedPassword.encode(), salt)
    user = db.query(Doctor).filter_by(id=doctor.id, password=pwhash).first()
    return user is not None


async def  sign_up_doctor(doctor: DoctorDTO):
    db = SessionLocal()
    # salt = bcrypt.gensalt(5)
    added_doc = db.query(Doctor).filter_by(email=doctor.email).first()
    print(added_doc)
    if added_doc:
        return False
    else:
        pwhash = bcrypt.hashpw(doctor.hashedPassword.encode(), salt)
        new_doctor = await Doctor(name=doctor.name, lastname=doctor.lastname, email=doctor.email, hashedPassword=pwhash)
        status = db.add(new_doctor)
        status2 = db.commit()

        return True


async def login_doctor(doctor: DoctorLoginDTO):
    db = SessionLocal()
    print("you")

    pwhash = bcrypt.hashpw(doctor.password.encode(), salt)
    doctor_ = await db.query(Doctor).filter_by(email=doctor.email, hashedPassword=pwhash).first()
    print(doctor_)
    if doctor_:
        return True
    else:
        return False


async def login_patient(patient: PatientLoginDTO):
    db = SessionLocal()
    pwhash = bcrypt.hashpw(patient.password.encode(), salt)
    patient_ = await db.query(Patient).filter_by(email=patient.email, hashed_password=pwhash).first()
    print(patient_)
    if patient_:
        return True
    else:
        return False
