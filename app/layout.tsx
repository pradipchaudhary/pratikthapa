import './globals.css';



export const metadata = {
  title: 'Welcome | Pratik Thapa',
  description: 'A clean welcome layout built with Next.js 14 and Tailwind CSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 font-sans">
        {children}
      </body>
    </html>
  );
}
