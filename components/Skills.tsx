export default function Skills() {
    const skills = [
        "Budgeting",
        "Donor Reporting",
        "Office Administration",
    ];

    return (
        <section id="skills" className="bg-white py-20 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold tracking-tight mb-6 fade">Key Skills</h2>
                <div className="flex flex-wrap gap-3 fade">
                    {skills.map((skill, i) => (
                        <span
                            key={i}
                            className="px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
