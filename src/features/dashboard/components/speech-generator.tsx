'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Coins } from 'lucide-react';

export function SpeechGenerator() {
  const router = useRouter();
  const [text, setText] = useState('');
  const length = text.length;
  const cost = (length * 0.0003).toFixed(4);

  const handleGenerate = () => {
    if (length > 0) {
      // TODO: optimize this, which risks exceeding browser URL length limits
      router.push(`/text-to-speech?text=${encodeURIComponent(text)}`);
    }
  };

  return (
    <div className='flex flex-col rounded-[22px] bg-linear-to-r from-pink-300 via-purple-300 to-cyan-300 p-0.5 shadow-sm'>
      <div className='bg-muted flex flex-col gap-2 rounded-[20px] p-1'>
        <div className='bg-card flex flex-col rounded-[16px] p-4'>
          <Textarea
            placeholder='Start typing or paste your text here...'
            className='min-h-40 resize-none rounded-none border-0 bg-transparent p-0 text-lg font-medium shadow-none focus-visible:ring-0'
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={5000}
          />

          <div className='flex items-center justify-between'>
            <Badge variant='outline' className='gap-1.5'>
              <Coins className='h-4 w-4 text-amber-500' />
              {length > 0 ? `$${cost}` : 'Start typing to estimate'}
            </Badge>

            <p className='text-muted-foreground text-xs'>
              {length.toLocaleString()} / 5,000 characters
            </p>
          </div>
        </div>
        <Button
          className='md:self-end'
          disabled={length === 0}
          onClick={handleGenerate}
        >
          Generate speech
        </Button>
      </div>
    </div>
  );
}
