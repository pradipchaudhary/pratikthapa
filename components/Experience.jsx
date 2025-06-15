import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Federation of Dalit Women Nepal',
    role: 'Admin & Finance Officer',
    date: 'Jun 2024 – Apr 2025',
    desc: 'Managed full administrative and financial responsibilities; ensured donor compliance.',
  },
  {
    company: 'LOOM',
    role: 'Finance & Admin Co-Ordinator',
    date: 'Aug 2020 – Jul 2024',
    desc: 'Oversaw project finances, budgeting, reporting, and daily operations.',
  },
  {
    company: 'NIC ASIA Bank',
    role: 'Operation In-Charge',
    date: 'Apr 2018 – Oct 2019',
    desc: 'Led branch operations, ensuring excellent service delivery and internal compliance.',
  },
  {
    company: 'Global IME Bank Limited',
    role: 'Junior Assistant',
    date: 'Jun 2016 – Apr 2018',
    desc: 'Supported operational teams during peak periods; assisted with customer service and admin.',
  },
];

export default function Experience() {
  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-tight mb-10 fade">Professional Experience</h2>
        <ol className="relative border-l border-gray-200">
          {experiences.map((item, index) => (
            <li key={index} className="pl-6 mb-12 fade">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-4 ring-white">
                <Briefcase className="w-3 h-3 text-white" />
              </span>
              <h3 className="text-lg font-medium">{item.company}</h3>
              <p className="text-sm text-gray-500 italic">{item.role} • {item.date}</p>
              <p className="mt-1">{item.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
