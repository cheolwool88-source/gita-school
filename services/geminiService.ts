
import { GoogleGenAI, Type } from "@google/genai";
import { Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getPersonalizedAdvice(level: string, goal: string, lang: Language) {
  try {
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
