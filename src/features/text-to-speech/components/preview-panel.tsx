import { Button } from '@/components/ui/button';
import { Volume2, Sparkles, AudioLines, BookOpen } from 'lucide-react';

export function PreviewPanel() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center'>
      <div className='relative flex items-center justify-center'>
        <div className='bg-muted text-muted-foreground absolute -translate-x-5/6 rounded-full p-3'>
          <Volume2 className='size-6' />
        </div>
        <div className='bg-foreground text-background z-10 rounded-full p-3'>
          <Sparkles className='size-8' />
        </div>
        <div className='bg-muted text-muted-foreground absolute translate-x-5/6 rounded-full p-3'>
          <AudioLines className='size-6' />
        </div>
      </div>

      <h3 className='text-xl font-bold'>Preview will appear here</h3>
      <p className='text-muted-foreground max-w-75 leading-relaxed'>
        Once you generate, your audio result will appear here. Sit back and
        relax.
      </p>

      <Button variant='outline' size='lg'>
        <BookOpen className='size-4' />
        Don&apos;t know how?
      </Button>
    </div>
  );
}
