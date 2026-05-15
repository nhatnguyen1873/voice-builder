import type { Metadata } from 'next';
import { TextInputPanel } from '@/features/text-to-speech/components/text-input-panel';
import { PreviewPanel } from '@/features/text-to-speech/components/preview-panel';
import { SettingsPanel } from '@/features/text-to-speech/components/settings-panel';
import { TextToSpeechFormProvider } from '@/features/text-to-speech/context/text-to-speech-form';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Text To Speech',
  description: 'Convert your text into high-quality AI voices.'
};

export default function TextToSpeechPage() {
  return (
    <Suspense>
      <TextToSpeechFormProvider>
        <div className='flex h-dvh'>
          <div className='flex flex-1 flex-col'>
            <TextInputPanel />
            <PreviewPanel />
          </div>
          <SettingsPanel />
        </div>
      </TextToSpeechFormProvider>
    </Suspense>
  );
}
