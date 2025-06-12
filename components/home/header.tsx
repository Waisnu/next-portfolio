"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            {/* Premium Hamburger Menu - Fixed Focus Issue */}
            <div className="fixed top-0 right-0 z-50 p-6">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="relative z-50 w-12 h-12 flex items-center justify-center bg-gray-900/30 backdrop-blur-xl rounded-full border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-transparent"
                    aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-6 flex flex-col items-center justify-center">
                        <span
                            className={`absolute h-0.5 w-6 bg-white transform transition-all duration-500 ease-in-out ${menuOpen ? "rotate-45" : "-translate-y-2"}`}
                        ></span>
                        <span
                            className={`absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out ${menuOpen ? "w-0 opacity-0" : "w-6 opacity-100"}`}
                        ></span>
                        <span
                            className={`absolute h-0.5 w-6 bg-white transform transition-all duration-500 ease-in-out ${menuOpen ? "-rotate-45" : "translate-y-2"}`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Full Screen Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transform transition-all duration-500 ease-in-out ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="font-gambarino text-xl font-bold text-white mb-16">Jhonn Vincent Arcipe</div>
                    <nav className="flex flex-col items-center space-y-8">
                        {[
                            { name: "About", href: "#about" },
                            { name: "Skills", href: "#skills" },
                            { name: "Experience", href: "#experience" },
                            { name: "Education", href: "#education" },
                            { name: "Projects", href: "/projects" },
                            { name: "Testimonials", href: "#testimonials" },
                            { name: "Contact", href: "#contact" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="menu-item font-cabinet text-3xl text-gray-400 hover:text-white transition-colors duration-300 font-light relative group"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-6 mt-16">
                        <a
                            href="https://github.com/Vince-Arcipe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                            aria-label="GitHub Profile"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jhonn-vincent-arcipe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:jhonnvincentarcipe1013@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                            aria-label="Send Email"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
} 