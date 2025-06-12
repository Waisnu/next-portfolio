import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { splitText } from "@/lib/utils"
import { SketchArrow, SketchCircle, SketchStar, SketchSquiggle, SketchHeart, SketchSparkles } from "@/components/ui/animated-doodles"

export function Hero() {
    return (
        <section /*ref={heroRef}*/ className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
            {/* Animated Doodles scattered around */}
            <SketchArrow className="absolute top-20 left-8 opacity-40" />
            <SketchCircle className="absolute top-32 right-12 opacity-30" />
            <SketchStar className="absolute bottom-40 left-16 opacity-50" />
            <SketchSquiggle className="absolute top-1/3 left-1/4 opacity-25" />
            <SketchHeart className="absolute bottom-32 right-20 opacity-35" />
            <SketchSparkles className="absolute top-16 right-1/3 opacity-45" />
            
            {/* Additional scattered doodles */}
            <div className="absolute top-1/4 right-8 opacity-20">
                <span className="text-4xl animate-pulse">✨</span>
            </div>
            <div className="absolute bottom-20 left-8 opacity-30">
                <span className="text-3xl animate-pulse" style={{ animationDelay: '1s' }}>✨</span>
            </div>
            <div className="absolute top-40 left-1/3 opacity-25">
                <span className="text-2xl animate-pulse" style={{ animationDelay: '2s' }}>✨</span>
            </div>

            <div className="max-w-6xl mx-auto w-full text-center relative z-10">
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