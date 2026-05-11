import { DashboardHeader } from '@/features/dashboard/components/dashboard-header';
import { PageHeader } from '@/features/dashboard/components/page-header';
import { QuickActions } from '@/features/dashboard/components/quick-actions';
import { SpeechGenerator } from '@/features/dashboard/components/speech-generator';
import { currentUser } from '@clerk/nextjs/server';

export default async function DashboardPage() {
  const user = await currentUser();
  const firstName = user?.firstName || 'John';
  const lastName = user?.lastName || 'Doe';

  return (
    <>
      <PageHeader />
      <div className='flex flex-col gap-6 p-4 md:p-6'>
        <DashboardHeader firstName={firstName} lastName={lastName} />
        <SpeechGenerator />
        <QuickActions />
      </div>
    </>
  );
}
