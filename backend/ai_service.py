import os
import json
from dotenv import load_dotenv
import google.generativeai as genai

# ==========================
# Load Environment Variables
# ==========================

load_dotenv()

# ==========================
# Configure Gemini
# ==========================

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Gemini Model

model = genai.GenerativeModel("gemini-2.5-flash")


# =====================================================
# AI Loan Analysis
# =====================================================

def analyze_loan(text):
    prompt = f"""
You are a financial loan expert.

Analyze the following loan document.

Return ONLY a valid JSON object.

Format:

{{
    "risk_score": 0,
    "risk_level": "",
    "summary": "",
    "interest_rate": "",
    "processing_fee": "",
    "hidden_charges": 0,
    "hidden_clauses": [
        "",
        "",
        ""
    ],
    "recommendation": "",
    "verdict": ""
}}

Instructions:

- risk_score should be between 0 and 100
- risk_level should be Low Risk, Medium Risk or High Risk
- summary should be short (3-5 lines)
- interest_rate should contain only the percentage if available
- processing_fee should contain only the fee if available
- hidden_charges should be the number of hidden charges detected
- hidden_clauses should be a list of important risky clauses
- recommendation should be concise
- verdict should be one sentence

Loan Document:

{text}
"""

    response = model.generate_content(prompt)

    cleaned = (
        response.text.replace("```json", "")
        .replace("```", "")
        .strip()
    )

    return json.loads(cleaned)


# =====================================================
# AI Chat Assistant
# =====================================================

def chat_with_loan(summary, question):
    prompt = f"""
You are LoanLens AI, an intelligent financial assistant.

You have already analyzed the user's loan agreement.

Loan Summary:

{summary}

User Question:

{question}

Instructions:

- Answer only using the loan summary.
- Explain in simple English.
- Maximum 5-6 lines.
- Be friendly and professional.
- If the answer cannot be determined from the summary, say:
"I cannot determine that from the available loan information."
"""

    response = model.generate_content(prompt)

    return response.text