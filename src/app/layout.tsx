// NEXT
import type { Metadata } from 'next';
import Head from 'next/head';
// COMPONENTS
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// STYLES
import './layout.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Mayoral Test',
  description: 'Creado por Antonio Delgado',
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
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
};

export default RootLayout;
