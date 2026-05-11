import Link from 'next/link';
import { Headphones, ThumbsUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function PageHeader() {
  return (
    <header className='bg-background sticky top-0 z-10 flex h-16 items-center gap-2 px-4 md:hidden'>
      <div className='flex flex-1 items-center gap-2'>
        <SidebarTrigger />
        <h1 className='text-lg font-semibold'>Dashboard</h1>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant='ghost' size='icon-sm' asChild>
          <Link href='mailto:nhatnguyen1873@gmail.com'>
            <ThumbsUp className='h-5 w-5' />
            <span className='sr-only'>Feedback</span>
          </Link>
        </Button>
        <Button variant='ghost' size='icon-sm' asChild>
          <Link href='mailto:nhatnguyen1873@gmail.com'>
            <Headphones className='h-5 w-5' />
            <span className='sr-only'>Help</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
