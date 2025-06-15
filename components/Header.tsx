import { Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative isolate overflow-hidden bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center fade">
        <h1 className="text-5xl font-semibold tracking-tight">Pratiik Thapa</h1>
        <p className="mt-4 text-lg">Trans Rights Activist • Banking & Finance • Admin • HR</p>
        <a
          href="https://www.linkedin.com/in/pratiik-thapa-502876205"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-500"
        >
          <Linkedin className="w-5 h-5" /> View LinkedIn
        </a>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500/40 via-purple-600/30 to-indigo-600/40 blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </header>
  );
}
