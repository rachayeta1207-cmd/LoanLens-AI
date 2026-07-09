from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from pdf_parser import extract_text
from ai_service import analyze_loan, chat_with_loan

app = FastAPI()

# Allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==========================
# Chat Request Model
# ==========================

class ChatRequest(BaseModel):
    summary: str
    question: str


# ==========================
# Home
# ==========================

@app.get("/")
def home():
    return {
        "message": "Welcome to LoanLens AI Backend!"
    }


# ==========================
# Upload PDF
# ==========================

@app.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    try:
        # Extract text from the uploaded PDF
        text = extract_text(file.file)

        # AI Analysis
        analysis = analyze_loan(text)

        return {
            "filename": file.filename,
            "content_type": file.content_type,
            **analysis
        }

    except Exception as e:
        return {
            "error": str(e)
        }


# ==========================
# AI Chat Endpoint
# ==========================

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        answer = chat_with_loan(
            request.summary,
            request.question
        )

        return {
            "answer": answer
        }

    except Exception as e:
        return {
            "error": str(e)
        }