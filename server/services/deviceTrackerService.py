from models.dbModels import UserTracker
from models.dtoModels import UserTrackerDTO
from sqlalchemy.orm import Session


def create_user_tracker(db: Session, patient: int):
    return db.add()
