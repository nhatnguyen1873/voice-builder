import { SignUp } from '@clerk/nextjs';
import { AuthWrapper } from '@/components/auth-wrapper';

export default function SignUpPage() {
  return (
    <AuthWrapper>
      <SignUp />
    </AuthWrapper>
  );
}
