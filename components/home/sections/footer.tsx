import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto text-center">
                <p className="font-cabinet text-gray-500">© 2024 Jhonn Vincent Arcipe. Built with Next.js and deployed on Vercel.</p>
            </div>
        </footer>
    )
} 