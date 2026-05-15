'use client';

import { useStore } from '@tanstack/react-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Coins } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useFormContext } from '@/features/text-to-speech/context/text-to-speech-form';
import { Field, FieldError } from '@/components/ui/field';
import type { ComponentProps } from 'react';

export function TextInputPanel() {
  const form = useFormContext();
  const text = useStore(form.store, (state) => state.values.text);
  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);
  const isValid = useStore(form.store, (state) => state.isValid);

  const maxChars = 5000;
  const estimatedCost = (text.length * 0.0003).toFixed(4);

  const handleSubmit: ComponentProps<'form'>['onSubmit'] = (e) => {
    e.preventDefault();
    form.handleSubmit();
  };

  return (
    <div className='flex min-h-0 flex-1 flex-col gap-3 border-b p-6'>
      <form onSubmit={handleSubmit} className='flex flex-1 flex-col gap-3'>
        <form.Field name='text'>
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid} className='flex-1'>
                <Textarea
                  aria-invalid={isInvalid}
                  aria-label='Type your text'
                  id={field.name}
                  name={field.name}
                  placeholder='Start typing or paste your text here...'
                  value={field.state.value}
                  maxLength={maxChars}
                  className='flex-1 resize-none border-none bg-transparent text-lg focus:outline-none focus-visible:ring-0'
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        </form.Field>

        <div className='flex flex-col justify-between gap-4 md:flex-row'>
          <div className='flex items-center gap-3'>
            <Badge variant='secondary'>
              <Coins className='size-3.5' />
              <p>${estimatedCost} estimated</p>
            </Badge>

            <p className='text-muted-foreground text-sm'>
              <span
                className={cn(
                  text.length > 0 ? 'text-foreground font-medium' : ''
                )}
              >
                {text.length}
              </span>{' '}
              / {maxChars.toLocaleString()} characters
            </p>
          </div>

          <Button type='submit' disabled={!isValid || isSubmitting}>
            Generate speech
          </Button>
        </div>
      </form>
    </div>
  );
}
