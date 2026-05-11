import { Button } from '@/components/ui/button';
import { Headphones, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

interface DashboardHeaderProps {
  firstName: string;
  lastName: string;
}

export function DashboardHeader({ firstName, lastName }: DashboardHeaderProps) {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col gap-1'>
        <p className='text-lg font-medium text-gray-500'>Nice to see you</p>
        <h1 className='text-4xl font-bold tracking-tight'>
          {firstName} {lastName}
        </h1>
      </div>
      <div className='hidden gap-3 md:flex'>
        <Button variant='secondary' asChild>
          <Link href='mailto:nhatnguyen1873@gmail.com'>
            <ThumbsUp className='h-4 w-4' />
            Feedback
          </Link>
        </Button>
        <Button variant='secondary' asChild>
          <Link href='mailto:nhatnguyen1873@gmail.com'>
            <Headphones className='h-4 w-4' />
            Need help?
          </Link>
        </Button>
      </div>
    </div>
  );
}
