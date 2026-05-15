'use client';

import {
  createFormHook,
  createFormHookContexts,
  formOptions
} from '@tanstack/react-form';
import {
  textToSpeechSchema,
  type TextToSpeechValues
} from '@/features/text-to-speech/schemas/text-to-speech-schema';
import { useSearchParams } from 'next/navigation';
import type { ReactNode } from 'react';

const { fieldContext, formContext } = createFormHookContexts();

const textToSpeechFormOptions = formOptions({
  defaultValues: {
    text: '',
    voiceId: '',
    temperature: 0.8,
    topP: 0.95,
    topK: 1000,
    repetitionPenalty: 1.2
  } as TextToSpeechValues
});

const { useAppForm, useTypedAppFormContext } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {},
  formComponents: {}
});

export const useFormContext = () =>
  useTypedAppFormContext(textToSpeechFormOptions);

export function TextToSpeechFormProvider({
  children
}: {
  children: ReactNode;
}) {
  const searchParams = useSearchParams();
  const initialText = searchParams.get('text') || '';

  const form = useAppForm({
    ...textToSpeechFormOptions,
    defaultValues: {
      ...textToSpeechFormOptions.defaultValues,
      text: initialText
    },
    validators: {
      onSubmit: textToSpeechSchema
    },
    onSubmit: async () => {}
  });

  return <form.AppForm>{children}</form.AppForm>;
}
