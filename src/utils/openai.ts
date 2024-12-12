import OpenAI from 'openai';
import { env } from '../config/env';

export async function callOpenAI(
  systemInstruction: string,
  userInput: string
): Promise<string> {
  try {
    const openai = new OpenAI({
      apiKey: env.OPENAI_API_KEY,
      dangerouslyAllowBrowser: true
    });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemInstruction },
        { role: "user", content: userInput }
      ],
    });

    return response.choices[0]?.message?.content || 'No response generated';
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`OpenAI API Error: ${error.message}`);
    }
    throw error;
  }
}