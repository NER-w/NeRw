from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

#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
