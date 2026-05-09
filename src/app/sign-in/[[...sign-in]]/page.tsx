import { SignIn } from '@clerk/nextjs';
import { AuthWrapper } from '@/components/auth-wrapper';

export default function SignInPage() {
  return (
    <AuthWrapper>
      <SignIn />
    </AuthWrapper>
  );
}
