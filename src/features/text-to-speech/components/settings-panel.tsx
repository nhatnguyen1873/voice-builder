'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Slider as UISlider } from '@/components/ui/slider';
import { Settings2, History as HistoryIcon } from 'lucide-react';
import { useFormContext } from '@/features/text-to-speech/context/text-to-speech-form';
import { Field, FieldLabel, FieldError } from '@/components/ui/field';
import { useStore } from '@tanstack/react-form';

interface Slider {
  id: 'temperature' | 'topP' | 'topK' | 'repetitionPenalty';
  label: string;
  leftLabel: string;
  rightLabel: string;
  min: number;
  max: number;
  step: number;
}

const SLIDERS: Slider[] = [
  {
    id: 'temperature',
    label: 'Creativity',
    leftLabel: 'Consistent',
    rightLabel: 'Expressive',
    min: 0,
    max: 2,
    step: 0.1
  },
  {
    id: 'topP',
    label: 'Voice Variety',
    leftLabel: 'Stable',
    rightLabel: 'Dynamic',
    min: 0,
    max: 1,
    step: 0.05
  },
  {
    id: 'topK',
    label: 'Expression Range',
    leftLabel: 'Subtle',
    rightLabel: 'Dramatic',
    min: 1,
    max: 10000,
    step: 100
  },
  {
    id: 'repetitionPenalty',
    label: 'Natural Flow',
    leftLabel: 'Rhythmic',
    rightLabel: 'Varied',
    min: 1,
    max: 2,
    step: 0.1
  }
];

export function SettingsPanel() {
  return (
    <Tabs
      defaultValue='settings'
      className='hidden w-90 flex-col border-l lg:flex'
    >
      <TabsList variant='line'>
        <TabsTrigger value='settings'>
          <Settings2 className='size-4' />
          Settings
        </TabsTrigger>
        <TabsTrigger value='history'>
          <HistoryIcon className='size-4' />
          History
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value='settings'
        className='flex flex-1 flex-col overflow-y-auto'
      >
        <div className='border-muted-foreground/20 border-b border-dashed p-4'>
          <p className='text-sm'>Voice selector coming soon</p>
        </div>
        <div className='flex flex-col gap-6 p-4'>
          {SLIDERS.map((slider) => (
            <SliderSetting key={slider.id} slider={slider} />
          ))}
        </div>
      </TabsContent>
      <TabsContent
        value='history'
        className='text-muted-foreground flex flex-1 p-4'
      >
        No history yet
      </TabsContent>
    </Tabs>
  );
}

function SliderSetting({ slider }: { slider: Slider }) {
  const form = useFormContext();
  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

  return (
    <form.Field name={slider.id}>
      {(field) => {
        const isInvalid =
          field.state.meta.isTouched && !field.state.meta.isValid;
        return (
          <Field data-invalid={isInvalid} className='flex flex-col gap-2'>
            <FieldLabel className='text-foreground text-sm font-semibold'>
              {slider.label}
            </FieldLabel>
            <div className='text-muted-foreground flex justify-between text-xs font-medium tracking-wider'>
              <p>{slider.leftLabel}</p>
              <p>{slider.rightLabel}</p>
            </div>
            <UISlider
              value={[field.state.value]}
              onValueChange={(vals) => field.handleChange(vals[0])}
              min={slider.min}
              max={slider.max}
              step={slider.step}
              id={field.name}
              aria-label={slider.label}
              aria-invalid={isInvalid}
              disabled={isSubmitting}
            />
            {isInvalid && <FieldError errors={field.state.meta.errors} />}
          </Field>
        );
      }}
    </form.Field>
  );
}
