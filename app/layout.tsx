import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IKEA - Affordable home furniture, designs & ideas - IKEA',
  description:
    'Furniture, home accessories, design ideas and inspiration for big dreams and small budgets. A better everyday life begins at home!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          inter.className,
        )}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
