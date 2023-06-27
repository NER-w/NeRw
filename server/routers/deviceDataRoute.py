from fastapi import APIRouter, Request, Response
from models.dtoModels import UserTrackerCreateDTO
router = APIRouter()


@router.get('/' )
async def fetch_by_id(id: int):
    return


@router.post('/add_data')
async def add_data():
    return "Hello world"
