import {
  QuickActionCard,
  type QuickActionType
} from '@/features/dashboard/components/quick-action-card';

const QUICK_ACTIONS: {
  title: string;
  description: string;
  type: QuickActionType;
  href: string;
}[] = [
  {
    title: 'Narrate a Story',
    description: 'Bring characters to life with expressive AI narration',
    type: 'cyan',
    href: '/text-to-speech?text=Once upon a time in a land far, far away, there lived a brave young hero who dreamed of adventure...'
  },
  {
    title: 'Record an Ad',
    description: 'Create professional advertisements with lifelike AI voices',
    type: 'pink',
    href: '/text-to-speech?text=Discover the perfect sound for your brand. Professional, lifelike, and ready to engage your audience today.'
  },
  {
    title: 'Direct a Movie Scene',
    description: 'Generate dramatic dialogue for film and video',
    type: 'purple',
    href: "/text-to-speech?text=I told you I'd come back for you! We don't have much time, the ship is leaving in five minutes!"
  },
  {
    title: 'Voice a Game Character',
    description: 'Build immersive worlds with dynamic character voices',
    type: 'orange',
    href: '/text-to-speech?text=Halt! Who goes there? State your business in the Kingdom of Aetheria or face the consequences!'
  },
  {
    title: 'Introduce Your Podcast',
    description: 'Hook your listeners from the very first second',
    type: 'blue',
    href: '/text-to-speech?text=Welcome back to another episode of The Creative Pulse, where we dive deep into the minds of today’s visionaries.'
  },
  {
    title: 'Guide a Meditation',
    description: 'Craft soothing, calming audio for wellness content',
    type: 'green',
    href: '/text-to-speech?text=Take a deep breath in, and slowly exhale. Feel the tension leaving your body as you drift into peace.'
  }
];

export function QuickActions() {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-xl font-bold'>Quick actions</h2>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {QUICK_ACTIONS.map((action, index) => (
          <QuickActionCard key={index} {...action} />
        ))}
      </div>
    </div>
  );
}
