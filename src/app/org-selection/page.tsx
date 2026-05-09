import { OrganizationList } from '@clerk/nextjs';
import { AuthWrapper } from '@/components/auth-wrapper';

export default function OrgSelectionPage() {
  return (
    <AuthWrapper>
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl='/'
        afterSelectOrganizationUrl='/'
      />
    </AuthWrapper>
  );
}
