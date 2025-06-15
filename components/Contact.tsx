import { MapPin, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold tracking-tight mb-6 fade">Get in Touch</h2>
            <address className="not-italic space-y-4 text-lg fade">
                <p className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" /> Kathmandu, Nepal
                </p>
                <p className="flex items-center gap-2">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <a
                        href="https://www.linkedin.com/in/pratiik-thapa-502876205"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600"
                    >
                        LinkedIn
                    </a>
                </p>
                <p className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    thapapratiik@gmail.com
                </p>
            </address>
        </section>
    );
}
