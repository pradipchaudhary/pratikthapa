import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="bg-white py-20 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold tracking-tight mb-10 fade">Professional Experience</h2>
                <ol className="relative border-l border-gray-200">
                    {[
                        {
                            company: "Federation of Dalit Women Nepal",
                            title: "Admin & Finance Officer",
                            duration: "Jun 2024 – Apr 2025",
                            desc: "Managed full administrative and financial responsibilities; ensured donor compliance.",
                        },
                        {
                            company: "LOOM",
                            title: "Finance & Admin Co-Ordinator",
                            duration: "Aug 2020 – Jul 2024",
                            desc: "Oversaw project finances, budgeting, reporting, and daily operations.",
                        },
                        {
                            company: "NIC ASIA Bank",
                            title: "Operation In-Charge",
                            duration: "Apr 2018 – Oct 2019",
                            desc: "Led branch operations, ensuring excellent service delivery and internal compliance.",
                        },
                        {
                            company: "Global IME Bank Limited",
                            title: "Junior Assistant",
                            duration: "Jun 2016 – Apr 2018",
                            desc: "Supported operational teams during peak periods; assisted with customer service and admin.",
                        },
                    ].map((job, index) => (
                        <li key={index} className="pl-6 mb-12 fade">
                            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-4 ring-white">
                                <Briefcase className="w-3 h-3 text-white" />
                            </span>
                            <h3 className="text-lg font-medium tracking-tight">{job.company}</h3>
                            <p className="text-sm text-gray-500 italic">{job.title} • {job.duration}</p>
                            <p className="mt-1">{job.desc}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
