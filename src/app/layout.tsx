// NEXT
import type { Metadata } from 'next';
import Head from 'next/head';
// COMPONENTS
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// STYLES
import './layout.css';

export const metadata: Metadata = {
  title: 'Mayoral Test',
  description: 'Creado por Antonio Delgado',
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
