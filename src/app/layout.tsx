import type { Metadata } from 'next';
import { Titillium_Web, Montserrat } from 'next/font/google';
import './globals.scss';

const titilium = Titillium_Web({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Desafio Maeztra',
  description: 'Por Cleberson Leite, utilizando Next',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body className={titilium.className}>{children}</body>
    </html>
  );
}
