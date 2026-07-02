import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

// Parse JSON bodies
app.use(express.json());

// Lazy-initialized Gemini Client to prevent crash on startup if key is missing
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required but was not found.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// System Instruction summarizing CVKaro's content for CareerPilot
const SYSTEM_INSTRUCTION = `You are "CareerPilot", the official AI Career Assistant for CVKaro (CVKaro.com).
Your primary mission is to help users navigate the CVKaro platform, answer questions about its features, pricing, learning paths, and guide them in optimizing their resumes and career progression.

Here is key information about CVKaro to use when answering questions:
- **Our Motto**: Build • Analyze • Learn • Get Hired
- **Core Value Proposition**: A professional platform for resume building, automated ATS (Applicant Tracking System) score scanning, deep skill gap analysis, and personalized educational learning paths to help users land their dream job.
- **Key Features**:
  1. **ATS Score Scanning**: Immediately parses uploaded resumes. Highlights formatting errors (complex tables, graphics, or layout issues) that cause ATS to reject resumes, and scores keyword matches.
  2. **AI Gap Analysis**: Compares a user's resume text directly against a specific job description. Identifies matched skills, missing hard/soft skills, and experience gaps.
  3. **Personalized AI Learning Paths**: Automatically creates milestone-by-milestone educational roadmaps for any missing skills. Roadmaps include estimated hours, core concepts, practical project suggestions, and learning resources.
  4. **Career Hub**: Hand-crafted learning paths and upskilling guides for high-growth tech roles (e.g., React 19 Frontend development, advanced state management, real-time WebSockets, etc.).
  5. **Multiple Resume Templates**: Professionally crafted templates built to pass ATS filters.
  6. **Secure Cloud Storage**: High-security cloud backup protecting all resume data with AES-256 encryption. Resumes and history are never sold, shared, or used to train external LLMs without consent.

- **Pricing Plans**:
  - **Free Tier**: Free forever. Includes 1 ATS Scan per month, 1 Standard Template, basic gap analysis, and access to beginner career guides.
  - **Pro Tier**: ₹299/month, or ₹199/month when billed yearly (Save 30% with yearly subscription). Includes unlimited ATS scans, all premium templates, complete AI Gap Analysis, personalized learning path generators, and full access to all Career Hub modules.
  - **Teams (B2B)**: Starting at ₹199/month (Monthly) or ₹149/month (Billed yearly). Ideal for universities, colleges, career centers, and bootcamps. Features bulk resume uploads, student progress reports, customized templates, and an administrator management panel.
  - **Important Rule**: CVKaro DOES NOT have an "Elite Plan". Do NOT include or offer any "Elite Plan" or "Elite Tier" under any circumstances. If a user asks about it, politely explain that CVKaro offers Free, Pro, and Teams (B2B) plans.

- **Response Guidelines**:
  - Speak in a friendly, supportive, professional, and encouraging tone.
  - Be direct and concise. Use bullet points and markdown styling to keep answers readable.
  - Whenever relevant, encourage the user to upload a resume or paste a job description in the CVKaro workspace/simulator to see their ATS score and personalized learning roadmap in real-time.
  - State clearly that they can save 30% with our yearly subscription plans!
  - If asked about generic topics (e.g., programming questions, interviewing tips), answer them warmly but relate them back to how CVKaro's Career Hub guides or learning paths can help them master those topics and present them optimally on their resume.
  - Maintain the persona of CareerPilot. Do not refer to yourself as a general AI or mention Google/Gemini unless asked about the underlying technology.`;

// API route for Chatbot support
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required and must be a string." });
    }

    const ai = getGeminiClient();

    // Map history to the required format: { role: 'user' | 'model', parts: [{ text: string }] }
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        if (msg.role && msg.text) {
          contents.push({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.text }],
          });
        }
      }
    }

    // Append the latest user message
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    // Call the Gemini model as specified in the gemini-api skill guide
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I apologize, but I couldn't formulate a response right now. Please try again.";
    return res.json({ reply });

  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    const errorMessage = error.message || "An unknown error occurred.";
    return res.status(500).json({ 
      error: "Failed to fetch response from CareerPilot. Please ensure GEMINI_API_KEY is configured in your Settings secrets.",
      details: errorMessage
    });
  }
});

// Serve Vite frontend
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode with static assets...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
