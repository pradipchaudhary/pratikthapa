'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-800">
      <section className="text-center py-10 bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Pratiik Thapa</h1>
        <p className="text-lg mt-2">
          Trans Rights Activist | Banking & Finance | Admin | HR
        </p>
        <Link
          href="https://www.linkedin.com/in/pratiik-thapa-502876205"
          target="_blank"
          className="text-blue-300 underline mt-2 block"
        >
          LinkedIn
        </Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="mb-4">
          I began in customer service, then moved to banking with Global IME Bank in 2016. My branch at NIC ASIA was awarded "Best New Branch" within 6 months.
        </p>
        <p>
          Since 2020, I’ve focused on trans rights activism, combining financial and advocacy experience to promote inclusive development in Nepal.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="font-bold">Federation of Dalit Women Nepal</h3>
            <p className="text-sm italic">Admin & Finance Officer (Jun 2024 – Apr 2025)</p>
            <p>Led all finance and admin functions; managed donor compliance.</p>
          </li>
          <li>
            <h3 className="font-bold">LOOM</h3>
            <p className="text-sm italic">Finance & Admin Co-Ordinator (Aug 2020 – Jul 2024)</p>
            <p>Oversaw project finances, reporting, and operational efficiency.</p>
          </li>
          <li>
            <h3 className="font-bold">NIC ASIA Bank</h3>
            <p className="text-sm italic">Operation Incharge (Apr 2018 – Oct 2019)</p>
            <p>Branch management and daily operations.</p>
          </li>
          <li>
            <h3 className="font-bold">Global IME Bank Limited</h3>
            <p className="text-sm italic">Junior Assistant (Jun 2016 – Apr 2018)</p>
            <p>Supported departments during high workload seasons.</p>
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>St. Xavier’s College – Bachelors in Business Studies (2013 – 2017)</li>
          <li>Trinity International College – Plus Two in Business (2011 – 2013)</li>
          <li>Blooming Scholar's Academy</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Budgeting</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Donor Reporting</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Office Administration</span>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>📍 Kathmandu, Bāgmatī, Nepal</p>
        <p>
          🔗{' '}
          <Link href="https://www.linkedin.com/in/pratiik-thapa-502876205" target="_blank" className="text-blue-600 underline">
            LinkedIn
          </Link>
        </p>
        <p>📧 thapapratiik@gmail.com</p>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 Pratiik Thapa. All rights reserved.</p>
      </footer>
    </main>
  );
}
