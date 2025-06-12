"use client"

import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-gambarino text-4xl md:text-5xl font-light text-white mb-8">Let's Connect</h2>
                <p className="font-cabinet text-xl text-gray-400 mb-12 leading-relaxed">
                    I'm open to new opportunities and collaborations. Let's discuss how we can work together.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <a
                        href="mailto:jhonnvincentarcipe1013@gmail.com"
                        className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="font-cabinet">Email Me</span>
                    </a>
                    <a
                        href="tel:+639773230337"
                        className="border border-gray-600 text-white px-8 py-3 rounded-full font-medium hover:border-gray-500 transition-colors duration-300 flex items-center gap-2"
                    >
                        <Phone className="w-5 h-5" />
                        <span className="font-cabinet">+63 977 323 0337</span>
                    </a>
                </div>

                <div className="flex justify-center space-x-6">
                    {[
                        { icon: <Github className="w-6 h-6" />, href: "https://github.com/Vince-Arcipe", label: "GitHub" },
                        { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/jhonn-vincent-arcipe/", label: "LinkedIn" },
                        {
                            icon: <Globe className="w-6 h-6" />,
                            href: "https://jhonnvincentarcipe1013.github.io/",
                            label: "Previous Portfolio",
                        },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
} 