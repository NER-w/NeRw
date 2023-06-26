from sqlalchemy.orm import relationship,Mapped,mapped_column
from sqlalchemy import Column, Integer, String, ForeignKey, Date, DateTime
from dbConnect import Base


class Patient(Base):
    __tablename__ = "patient"
    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String(255), unique=True)
    name = Column(String(255))
    lastname = Column(String(255))
    hashed_password = Column(String(255))
    permissions = relationship("DataPermissions", back_populates="patient")
    user_tracker = relationship("UserTracker", back_populates="patient")
    appointments = relationship("Appointment", back_populates="patient")
    sensor_data = relationship("MeasuredData", back_populates="patient")


class Appointment(Base):
    __tablename__ = "appointment"
    id = Column(Integer, primary_key=True, autoincrement=True)
    dateTime = Column(String(255))
    Duration = Column(Integer)
    patient_id = Column(Integer, ForeignKey("patient.id"), nullable=True)
    patient = relationship("Patient", back_populates="appointments")
    # doctor_id = Column(Integer,  ForeignKey("doctor.id"))
    doctor_id: Mapped[int] = mapped_column(ForeignKey("doctor.id"))
    doctor = relationship("Doctor",  back_populates="appointments")


class Doctor(Base):
    __tablename__ = "doctor"
    id = Column(Integer, primary_key=True)
    email = Column(String(255), unique=True)
    name = Column(String(255))
    lastname = Column(String(255))
    hashedPassword = Column(String(255))
    appointments = relationship("Appointment", back_populates="doctor")
    permissions = relationship("DataPermissions", back_populates="doctor")


class MeasuredData(Base):
    __tablename__ = "measured_data"
    id = Column(Integer, primary_key=True, autoincrement=True)
    data = Column(String(255), nullable=False)
    value = Column(String(255))
    patient_id = Column(Integer, ForeignKey("patient.id"))
    patient = relationship("Patient", back_populates="sensor_data")


class UserTracker(Base):
    __tablename__ = "user_tracker"
    id = Column(Integer, primary_key=True, autoincrement=True)
    device_ip = Column(Integer)
    patient_id = Column(Integer, ForeignKey("patient.id"))
    patient = relationship("Patient", back_populates="user_tracker")


class DataPermissions(Base):
    __tablename__ = "data_permissions"
    id = Column(Integer, primary_key=True, autoincrement=True)
    doctor_id = Column(Integer, ForeignKey("doctor.id"))
    doctor = relationship("Doctor", back_populates="permissions")
    patient_id = Column(Integer, ForeignKey("patient.id"))
    patient = relationship("Patient", back_populates="permissions")


