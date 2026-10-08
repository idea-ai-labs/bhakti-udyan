import type { Metadata } from 'next';
import { Inter, Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bhakti Udyan | Bhakti · Arth · Anubhuti',
  description: 'A sacred cosmic garden for spiritual learning and experience. Discover the 8 Bagiche memory method for Hanuman Chalisa and deeper devotional wisdom.',
  keywords: [
    'Bhakti Udyan',
    'Hanuman Chalisa',
    'Hanuman Chalisa meaning',
    'Hanuman Chalisa memorization',
    '8 Bagiche',
    'Hanuman Chalisa memory technique',
    'mantra meaning',
    'devotional learning',
    'Bhakti',
    'Arth',
    'Anubhuti'
  ],
  authors: [{ name: 'Bhakti Udyan' }],
  openGraph: {
    title: 'Bhakti Udyan | Bhakti · Arth · Anubhuti',
    description: 'Understand, Feel, Remember, Live. Enter the sacred cosmic garden of spiritual learning.',
    url: 'https://bhaktiudyan.com',
    siteName: 'Bhakti Udyan',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhakti Udyan | Bhakti · Arth · Anubhuti',
    description: 'A sacred cosmic garden for spiritual learning and experience.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-cosmos-950 text-gray-100 selection:bg-gold-500 selection:text-cosmos-950">
        {children}
      </body>
    </html>
  );
}
