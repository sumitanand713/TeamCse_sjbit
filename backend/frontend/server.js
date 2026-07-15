/* --- This is your Back-End Server --- */

// 1. Import required libraries
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors'); // Required to let your front-end talk to this server

// 2. Setup the server
const app = express();
app.use(express.json()); // Middleware to read JSON from the request
app.use(cors());         // Middleware to allow cross-origin requests (from your HTML file)

// 3. Initialize the AI
const API_KEY = process.env.GEMINI_API_KEY;
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

function getModel() {
    if (!genAI) {
        throw new Error('GEMINI_API_KEY is not configured');
    }
    return genAI.getGenerativeModel({ model: 'gemini-2.5-flash-preview-09-2025' });
}

/* --- API ENDPOINT 1: AI Study Plan --- */
app.post('/api/generate-plan', async (req, res) => {
    try {
        if (!genAI) {
            return res.status(500).json({ error: 'AI service is not configured.' });
        }
        // 1. Get user data from your dashboard.js
        const { grade, exam, topics } = req.body;

        // 2. "Prompt Engineering": Tell the AI what you want
        const model = getModel();
        const prompt = `
            You are an expert tutor for the EduPath platform.
            A student needs a personalized 1-week study plan.
            Their grade: ${grade}
            Their target exam: ${exam}
            Their weak topics: ${topics.join(', ')}

            Generate a concise, day-by-day (Day 1, Day 2, etc.) study plan 
            in simple HTML format. Focus on mastering the weak topics.
            Do not include <html> or <body> tags, just list elements like 
            <h3> and <ul>.
        `;

        // 3. Ask the AI and get a response
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const aiText = response.text();

        // 4. Send the AI-generated HTML back to your dashboard
        res.json({ planHtml: aiText });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate study plan.' });
    }
});

/* --- API ENDPOINT 2: AI Quiz --- */
app.post('/api/generate-quiz', async (req, res) => {
    try {
        if (!genAI) {
            return res.status(500).json({ error: 'AI service is not configured.' });
        }
        // 1. Get the topic from the front-end
        const { topic, exam } = req.body;

        // 2. "Prompt Engineering" for a JSON response
        const model = getModel();
        const prompt = `
            You are a quiz generation API. Your sole function is to return valid JSON.
            Generate 5 multiple-choice questions for a student studying for the ${exam} exam.
            The topic is: ${topic}.
            
            Return ONLY a valid JSON array in this exact format:
            [
                {
                    "question": "The question text?",
                    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
                    "answer": "Option 1"
                }
            ]

            Do not include \`\`\`json or any other text before or after the JSON array.
        `;

        // 3. Ask the AI and get a response
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const aiText = response.text();

        // 4. Parse the AI's JSON string and send it to the dashboard
        const quizJson = JSON.parse(aiText);
        res.json(quizJson);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate quiz. The AI may have returned invalid JSON.' });
    }
});

app.post('/api/chat', async (req, res) => {
    try {
        if (!genAI) {
            return res.status(500).json({ error: 'AI service is not configured.' });
        }

        const { contents } = req.body;
        const model = getModel();
        const result = await model.generateContent({
            contents,
            systemInstruction: {
                parts: [{ text: 'You are a helpful study assistant. Be concise and friendly.' }]
            }
        });
        const response = await result.response;
        res.json({ text: response.text() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate chat response.' });
    }
});


// 4. Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});