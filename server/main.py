from fastapi import FastAPI
from myrouter import router

app = FastAPI()
app.include_router(router)
