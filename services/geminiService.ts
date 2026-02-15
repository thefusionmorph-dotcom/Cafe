
import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

export const getCoffeeRecommendation = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const menuContext = MENU_ITEMS.map(item => 
    `${item.name} (${item.category}): ${item.description}`
  ).join('\n');

  const systemInstruction = `
    You are an expert Barista and Coffee Concierge at L'Artiste Cafe. 
    Your goal is to suggest ONE perfect item from our menu based on the user's mood or preference.
    
    Our Menu:
    ${menuContext}
    
    Guidelines:
    1. Be warm, sophisticated, and concise.
    2. Recommend exactly one item from the menu above.
    3. Explain briefly why this item suits their current mood or request.
    4. If they ask for something not on the menu, politely steer them toward the closest match.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't find the perfect match right now. How about our signature Vanilla Lavender Latte?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I seem to be having trouble connecting with my inner barista. Feel free to browse our menu!";
  }
};
