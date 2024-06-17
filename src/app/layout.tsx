import type { Metadata } from 'next';
import Head from 'next/head';
import './layout.css';

export const metadata: Metadata = {
  title: 'Mayoral Test',
  description: 'Craedo por Antonio Delgado',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
