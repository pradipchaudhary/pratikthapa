import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl font-semibold text-gray-900">
          Hi, I’m <span className="text-blue-600">Pratiik Thapa</span>
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Trans Rights Activist · HR &amp; Administration · Social Advocate
        </p>

        <nav className="mt-8 flex justify-center space-x-8">
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Contact
          </Link>
        </nav>

        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/pratiik-thapa-502876205/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition"
            aria-label="LinkedIn Profile"
          >
            🔗 Connect on LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
