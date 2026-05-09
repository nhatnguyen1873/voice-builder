import { type ReactNode } from 'react';

interface AuthWrapperProps {
  children: ReactNode;
}

export function AuthWrapper({ children }: AuthWrapperProps) {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      {children}
    </div>
  );
}
