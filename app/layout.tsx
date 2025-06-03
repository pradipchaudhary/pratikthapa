import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pratiik Thapa | Trans Rights Activist & HR Professional',
  description: 'Portfolio of Pratiik Thapa, a passionate Trans Rights Activist and HR professional based in Kathmandu, Nepal.',
  keywords: [
    'Pratiik Thapa',
    'Trans Rights Activist Nepal',
    'HR Professional Kathmandu',
    'Social Advocacy',
    'Banking and Procurement',
    'Dalit Women Nepal',
    'LGBTQ Rights Nepal'
  ],
  authors: [{ name: 'Pratiik Thapa', url: 'https://www.linkedin.com/in/pratiik-thapa-502876205/' }],
  creator: 'Pratiik Thapa',
  metadataBase: new URL('https://pratikthapa.vercel.app'), // change to your domain once deployed
  openGraph: {
    title: 'Pratiik Thapa | Portfolio',
    description: 'Explore the personal portfolio of Pratiik Thapa, showcasing advocacy, professional work in HR, and social impact initiatives.',
    url: 'https://pratikthapa.vercel.app',
    siteName: 'Pratiik Thapa Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratiik Thapa | Portfolio',
    description: 'Activist, HR & Admin Professional | Kathmandu, Nepal',
  },
  alternates: {
    canonical: 'https://pratikthapa.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 font-sans antialiased">
        <Navbar />
        <main className="min-h-screen px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
