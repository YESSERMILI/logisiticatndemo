'use server';
/**
 * @fileOverview A Genkit flow for generating localized multiple-choice quiz questions.
 *
 * - generateLocalizedQuizContent - A function that handles the generation and translation of quiz questions.
 * - GenerateLocalizedQuizContentInput - The input type for the generateLocalizedQuizContent function.
 * - GenerateLocalizedQuizContentOutput - The return type for the generateLocalizedQuizContent function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateLocalizedQuizContentInputSchema = z.object({
  topic: z.string().describe('The specific topic for the quiz questions (e.g., "Tunisian football legends", "World Cup history 2010-2022").'),
  difficulty: z.enum(['easy', 'medium', 'hard']).describe('The desired difficulty level for the quiz questions.'),
  numQuestions: z.number().int().min(1).max(10).default(5).describe('The number of quiz questions to generate.'),
});
export type GenerateLocalizedQuizContentInput = z.infer<typeof GenerateLocalizedQuizContentInputSchema>;

const QuestionSchema = z.object({
  question_en: z.string().describe('The quiz question in English.'),
  options_en: z.array(z.string()).min(2).max(5).describe('An array of possible answer options in English.'),
  correct_answer_index: z.number().int().min(0).describe('The zero-based index of the correct answer within the options_en array.'),
  question_ar: z.string().describe('The quiz question translated into Tunisian Arabic.'),
  options_ar: z.array(z.string()).min(2).max(5).describe('An array of possible answer options translated into Tunisian Arabic.'),
  question_fr: z.string().describe('The quiz question translated into French.'),
  options_fr: z.array(z.string()).min(2).max(5).describe('An array of possible answer options translated into French.'),
});

const GenerateLocalizedQuizContentOutputSchema = z.array(QuestionSchema).describe('An array of generated quiz questions, each with English, Arabic, and French versions.');
export type GenerateLocalizedQuizContentOutput = z.infer<typeof GenerateLocalizedQuizContentOutputSchema>;

export async function generateLocalizedQuizContent(input: GenerateLocalizedQuizContentInput): Promise<GenerateLocalizedQuizContentOutput> {
  return generateLocalizedQuizContentFlow(input);
}

const quizContentPrompt = ai.definePrompt({
  name: 'quizContentPrompt',
  model: 'googleai/gemini-1.5-flash-latest',
  input: { schema: GenerateLocalizedQuizContentInputSchema },
  output: { schema: GenerateLocalizedQuizContentOutputSchema },
  prompt: `You are an expert quiz question generator for a competitive quiz platform focused on football, culture, and general knowledge in Tunisia. Your goal is to create high-quality, engaging, and challenging questions that are culturally relevant to a Tunisian audience.

Generate exactly {{{numQuestions}}} multiple-choice questions on the specific topic of "{{{topic}}}" with a "{{{difficulty}}}" difficulty level.

Key instructions:
- **Uniqueness**: Ensure the questions are distinct and avoid repetition if this prompt is called multiple times for the same topic.
- **Plausible Distractors**: The incorrect answers (distractors) must be challenging and closely related to the question. They should be plausible enough to make the user think, not obviously wrong.
- **Difficulty Scaling**:
    - For 'easy' difficulty, focus on well-known, foundational knowledge.
    - For 'medium' difficulty, require more detailed knowledge.
    - For 'hard' difficulty, the questions should be for experts, covering obscure facts, specific dates, or nuanced details.
- **Cultural Nuance**: The tone should be clean, sporty, and competitive.

For each question, provide the following structured output:
1.  The question text in English (question_en).
2.  An array of 2-5 plausible answer options in English (options_en). One of these must be the correct answer.
3.  The zero-based index of the correct answer within the options_en array (correct_answer_index).
4.  The question text translated into Tunisian Arabic (question_ar).
5.  An array of the answer options translated into Tunisian Arabic (options_ar). Ensure the order of options matches the English version.
6.  The question text translated into French (question_fr).
7.  An array of the answer options translated into French (options_fr). Ensure the order of options matches the English version.
`,
});

const generateLocalizedQuizContentFlow = ai.defineFlow(
  {
    name: 'generateLocalizedQuizContentFlow',
    inputSchema: GenerateLocalizedQuizContentInputSchema,
    outputSchema: GenerateLocalizedQuizContentOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await quizContentPrompt(input);
      if (!output) {
        throw new Error('AI model did not return any content.');
      }
      return output;
    } catch (e) {
      console.error("Error in generateLocalizedQuizContentFlow:", e);
      const errorMessage = e instanceof Error ? e.message : JSON.stringify(e);
      throw new Error(`Quiz generation failed within the AI flow: ${errorMessage}`);
    }
  }
);
