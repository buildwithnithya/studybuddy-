const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({
  apiKey: process.env.AI_API_KEY,
});

async function ask(prompt) {
  if (!process.env.AI_API_KEY) {
    throw new Error('AI_API_KEY is not configured in .env');
  }

  const response = await ai.models.generateContent({
model: 'gemini-3.5-flash-lite',
    contents: prompt,
  });

  return response.text;
}

module.exports = { ask };