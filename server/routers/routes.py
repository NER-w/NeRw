from fastapi import APIRouter, Depends, status, Path

from routers.userRoute import router as user_router
from routers.deviceDataRoute import router as device_router
from routers.appointmentRoute import router as appointment_route

api_router = APIRouter()

api_router.include_router(device_router, prefix="/device", tags=["device"])
api_router.include_router(user_router, prefix="/user", tags=["user"])
api_router.include_router(appointment_route, prefix='/appointment', tags=["appointment"])
