import { z } from 'zod';

export const textToSpeechSchema = z.object({
  text: z.string().trim().min(1, 'Text is required'),
  voiceId: z.string().optional(),
  temperature: z.number().min(0).max(2),
  topP: z.number().min(0).max(1),
  topK: z.number().min(1).max(10000),
  repetitionPenalty: z.number().min(1).max(2)
});

export type TextToSpeechValues = z.infer<typeof textToSpeechSchema>;
