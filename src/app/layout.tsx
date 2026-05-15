import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import { TooltipProvider } from '@/components/ui/tooltip';
import './globals.css';

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Voice Builder',
    template: '%s | Voice Builder'
  },
  description: 'AI-powered text-to-speech and voice cloning platform'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn('h-full', 'antialiased', 'font-sans', notoSans.variable)}
    >
      <body className='flex min-h-full flex-col'>
        <ClerkProvider appearance={{ cssLayerName: 'clerk' }}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
