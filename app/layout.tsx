import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

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
            <main className="min-h-screen flex items-center justify-center">
              {children}
            </main>
          </body>
        </html>
    );
}
