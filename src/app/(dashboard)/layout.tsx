import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/features/dashboard/components/app-sidebar';
import { cookies } from 'next/headers';
import type { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const sidebarState = cookieStore.get('sidebar_state')?.value;
  const defaultOpen = sidebarState ? sidebarState === 'true' : true;

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className='flex-1'>{children}</main>
    </SidebarProvider>
  );
}
