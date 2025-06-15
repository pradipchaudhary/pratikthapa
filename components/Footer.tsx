"use client";
import { useEffect, useState } from "react";

export default function Footer() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-gray-900 text-white text-center py-8">
            <p className="fade">&copy; {year} Pratiik Thapa. All rights reserved.</p>
        </footer>
    );
}
