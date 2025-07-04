import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import SessionProvier from '@/src/app/SessionProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Master Links',
  description: 'Desenvolvido por Sávio Bandeira',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen min-h-screen`}
      >
        <SessionProvier>
          <div className='flex flex-col items-center'>
            <div className=' max-w-xl w-full px-6 py-16'>
              {children}
            </div>
          </div>
        </SessionProvier>
      </body>
    </html>
  );
}
