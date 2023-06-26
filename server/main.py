from fastapi import FastAPI
from routers.routes import api_router
from dbConnect import init_db
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost",
    "http://localhost:3000",
    "2001:1c06:1b0c:a800:d2a6:aeaa:413f:1c83",
    "2001:1c06:1b0c:a800:d2a6:aeaa:413f:1c83:0"
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

app.include_router(api_router)


@app.on_event("startup")
def startup():
    init_db()
