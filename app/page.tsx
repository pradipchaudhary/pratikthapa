'use client';

import Link from 'next/link';
import Header from '../components/Header'; // adjust the path if needed

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">Hi, I’m Pratiik Thapa 👋</h1>
      <p className="mt-4 text-lg text-gray-600">
        Trans Rights Activist | HR & Admin | Social Advocate
      </p>
      <div className="mt-6">
        <a href="/about" className="mr-4 text-blue-600 hover:underline">About</a>
        <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
      </div>
      <div className="mt-8">
        <a
          href="https://www.linkedin.com/in/pratiik-thapa-502876205/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600"
        >
          🔗 LinkedIn
        </a>
      </div>
    </main>
      </>
  );
}
