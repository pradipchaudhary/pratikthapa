'use client';

import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Pratiik Thapa
        </Link>
        <nav>
          <ul className="flex space-x-6 text-sm md:text-base">
            <li>
              <Link href="#about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="#experience" className="hover:underline">Experience</Link>
            </li>
            <li>
              <Link href="#education" className="hover:underline">Education</Link>
            </li>
            <li>
              <Link href="#skills" className="hover:underline">Skills</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
