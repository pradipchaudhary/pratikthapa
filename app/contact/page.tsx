import Link from "next/link";

export default function ContactPage() {
    return (
        <section className="max-w-3xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-semibold mb-4">Contact</h2>
            <p>
                Connect with me on LinkedIn:{" "}
                <Link href="https://www.linkedin.com/in/pratiik-thapa-502876205/" target="_blank" className="text-blue-600 underline">
                    Pratiik Thapa
                </Link>
            </p>
        </section>
    );
}