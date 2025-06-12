import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { splitText } from "@/lib/utils"

export function Hero() {
    return (
        <section /*ref={heroRef}*/ className="min-h-screen flex items-center justify-center px-6 relative">
            <div className="max-w-6xl mx-auto w-full text-center">
                {/* Main heading with premium typography */}
                <h1 className="font-clashgrotesk text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] mb-12">
                    <div className="hero-line-1 mb-6">
                        <span className="text-gray-500 font-light">{splitText("The")}</span>{" "}
                        <span className="text-white font-bold">{splitText("Software")}</span>{" "}
                        <span className="text-white font-bold">{splitText("Developer")}</span>
                    </div>
                    <div className="hero-line-2">
                        <span className="text-gray-400 font-light">{splitText("That")}</span>{" "}
                        <span className="text-gray-400 font-light">{splitText("gets")}</span>{" "}
                        <span className="font-stardom text-white italic">{splitText("shit done")}</span>
                    </div>
                </h1>

                <div className="hero-subtitle opacity-0 mb-8">
                    <p className="font-clashgrotesk text-2xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto">
                        Hello friend, It's <span className="text-red-400 font-clashgrotesk font-bold">Vince</span>👋
                    </p>
                </div>

                <div className="hero-description opacity-0 mb-16">
                    <p className="font-cabinet text-gray-500 text-lg max-w-2xl mx-auto leading-[1.6]">
                        I specialize in backend development creating scalable solutions that power modern applications and help businesses grow.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 group"
                    >
                        <span className="text-lg">View Projects</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex items-center space-x-3 border border-gray-600 text-white px-8 py-4 rounded-full font-medium hover:border-gray-500 transition-colors duration-300"
                    >
                        <span className="text-lg">Get In Touch</span>
                    </Link>
                </div>
            </div>
        </section>
    )
} 