'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import {
  Home,
  LayoutGrid,
  AudioLines,
  Volume2,
  Headphones
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { NavMain } from '@/features/dashboard/components/nav-main';

const mainNavItems = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home
  },
  {
    title: 'Explore voices',
    url: '/voices',
    icon: LayoutGrid
  },
  {
    title: 'Text to speech',
    url: '/text-to-speech',
    icon: AudioLines
  },
  {
    title: 'Voice cloning',
    url: '/voice-cloning',
    icon: Volume2
  }
];

const othersNavItems = [
  {
    title: 'Help and support',
    url: 'mailto:nhatnguyen1873@gmail.com',
    icon: Headphones
  }
];

export function AppSidebar() {
  const pathname = usePathname();
  const container1Ref = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);

  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader>
        <Link
          href='/'
          aria-label='Go to dashboard'
          className='hover:bg-sidebar-accent size-9 rounded-xl p-1'
        >
          <Logo className='size-full' />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={mainNavItems} pathname={pathname} />
        <NavMain label='OTHERS' items={othersNavItems} pathname={pathname} />
      </SidebarContent>
      <SidebarFooter>
        <div ref={container1Ref} className='overflow-hidden'>
          <OrganizationSwitcher
            getContainer={() => container1Ref.current}
            hidePersonal
          />
        </div>
        <div ref={container2Ref} className='overflow-hidden leading-0'>
          <UserButton
            getContainer={() => container2Ref.current}
            showName
            appearance={{
              elements: {
                userButtonBox: 'flex-row-reverse',
                userButtonOuterIdentifier: 'ps-[initial] truncate'
              }
            }}
          />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
