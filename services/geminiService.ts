import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';
import { DOCTORS, SERVICES } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Smile AI", a sophisticated and warm AI receptionist for Smile Dental, a premium dental clinic.
Your goal is to assist potential patients with booking appointments, explaining services, and providing information about our dentists.

Here is our key context:
SERVICES: ${SERVICES.map(s => s.title + ": " + s.description + " (Starting at " + s.priceStart + ")").join('; ')}
DOCTORS: ${DOCTORS.map(d => "Dr. " + d.name + " (" + d.role + ")").join('; ')}

GUIDELINES:
1. Be polite, professional, and empathetic.
2. If asked to book, guide them to the Booking page (tell them to click 'Book Appointment' in the menu).
3. Keep answers concise (under 3 sentences) unless asked for details.
4. Do not make up medical advice. If it's a medical emergency, tell them to call 911 or visit the ER.
5. Use emojis sparingly to maintain a modern, friendly vibe.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: chatHistory
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I apologize, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please try again in a moment.";
  }
};