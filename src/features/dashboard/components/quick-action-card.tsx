import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export type QuickActionType =
  | 'cyan'
  | 'pink'
  | 'purple'
  | 'orange'
  | 'blue'
  | 'green';

interface QuickActionCardProps {
  title: string;
  description: string;
  type: QuickActionType;
  href: string;
}

const gradientMap: Record<QuickActionType, string> = {
  cyan: 'from-cyan-300 to-cyan-100',
  pink: 'from-pink-400 to-pink-200',
  purple: 'from-purple-400 to-purple-200',
  orange: 'from-orange-400 to-orange-200',
  blue: 'from-blue-400 to-blue-200',
  green: 'from-green-400 to-green-200'
};

export function QuickActionCard({
  title,
  description,
  type,
  href
}: QuickActionCardProps) {
  const gradient = gradientMap[type];

  return (
    <Card
      size='sm'
      className='flex flex-row gap-4 p-3 transition-transform duration-150 ease-in-out hover:scale-[1.01]'
    >
      <div
        className={cn(
          'flex h-24 w-32 shrink-0 items-center justify-center rounded-xl bg-linear-to-br',
          gradient
        )}
      >
        <div className='h-12 w-12 rounded-full bg-white/30 backdrop-blur-md' />
      </div>
      <div className='flex flex-col justify-between gap-4'>
        <div className='flex flex-col gap-1'>
          <h3 className='font-semibold'>{title}</h3>
          <p className='text-muted-foreground text-sm'>{description}</p>
        </div>
        <Button asChild variant='outline' className='self-start'>
          <Link href={href}>
            Try now <ArrowRight className='size-3' />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
