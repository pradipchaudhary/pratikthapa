import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="max-w-4xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold tracking-tight mb-6 fade">Education</h2>
            <ul className="space-y-4 fade">
                <li className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-600 mt-1" />
                    <p>St. Xavier’s College — Bachelor in Business Studies (2013 – 2017)</p>
                </li>
                <li className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-600 mt-1" />
                    <p>Trinity International College — Plus Two in Business (2011 – 2013)</p>
                </li>
                <li className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-600 mt-1" />
                    <p>Blooming Scholar’s Academy — Schooling</p>
                </li>
            </ul>
        </section>
    );
}
