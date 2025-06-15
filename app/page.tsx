'use client';

import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="antialiased text-gray-800 bg-gray-50">
      {/* Header */}
      <Header />

      {/* About Me */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="mb-4">
          I began my journey in customer service and transitioned to banking with Global IME Bank in 2016.
          At NIC ASIA, my branch was awarded &quot;Best New Branch&quot; within six months of operation.
        </p>
        <p>
          Since 2020, I’ve been actively involved in trans rights activism—leveraging my professional
          background to advocate for inclusive development across Nepal.
        </p>
      </section>

      {/* Experience */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-lg font-bold">Federation of Dalit Women Nepal</h3>
            <p className="text-sm italic">Admin & Finance Officer (Jun 2024 – Apr 2025)</p>
            <p>Managed full administrative and financial responsibilities; ensured donor compliance.</p>
          </li>
          <li>
            <h3 className="text-lg font-bold">LOOM</h3>
            <p className="text-sm italic">Finance & Admin Co-Ordinator (Aug 2020 – Jul 2024)</p>
            <p>Oversaw project finances, budgeting, reporting, and daily operations.</p>
          </li>
          <li>
            <h3 className="text-lg font-bold">NIC ASIA Bank</h3>
            <p className="text-sm italic">Operation Incharge (Apr 2018 – Oct 2019)</p>
            <p>Led branch operations, ensuring excellent service delivery and internal compliance.</p>
          </li>
          <li>
            <h3 className="text-lg font-bold">Global IME Bank Limited</h3>
            <p className="text-sm italic">Junior Assistant (Jun 2016 – Apr 2018)</p>
            <p>Supported operational teams during peak periods; assisted with customer service and admin.</p>
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>St. Xavier’s College – Bachelor in Business Studies (2013 – 2017)</li>
          <li>Trinity International College – Plus Two in Business (2011 – 2013)</li>
          <li>Blooming Scholar’s Academy – Schooling</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {['Budgeting', 'Donor Reporting', 'Office Administration'].map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <address className="not-italic space-y-1 text-base">
          <p>📍 Kathmandu, Bāgmatī, Nepal</p>
          <p>
            🔗{' '}
            <Link
              href="https://www.linkedin.com/in/pratiik-thapa-502876205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              LinkedIn
            </Link>
          </p>
          <p>📧 thapapratiik@gmail.com</p>
        </address>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Pratiik Thapa. All rights reserved.</p>
      </footer>
    </main>
  );
}
