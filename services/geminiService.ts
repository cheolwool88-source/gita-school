
import { GoogleGenAI, Type } from "@google/genai";
import { Language } from "../types";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is missing. AI features will not work.");
      return null;
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export async function getPersonalizedAdvice(level: string, goal: string, lang: Language) {
  try {
    const ai = getAI();
    if (!ai) return null;

    const langPrompt = lang === 'ko' ? '한국어로 친절하게 답변해주세요.' : 'Please answer kindly in English.';
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User Level: ${level}, Goal: ${goal}. Propose 3 personalized guitar practice tips and a recommended path. ${langPrompt}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
}
