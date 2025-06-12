import Image from "next/image"
import { SketchArrow, SketchHeart, SketchStar, SketchSparkles } from "@/components/ui/animated-doodles"

export function About() {
    return (
        <section id="about" className="py-32 px-6 animate-on-scroll relative">
            {/* Floating Doodles */}
            <SketchHeart className="absolute top-16 left-12 opacity-40" />
            <SketchStar className="absolute top-20 right-16 opacity-35" />
            <SketchSparkles className="absolute bottom-20 left-20 opacity-45" />
            <SketchArrow className="absolute bottom-16 right-12 opacity-30" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="animate-item font-satoshi text-4xl md:text-6xl font-light text-white mb-12 opacity-0">So Who Am I ?</h2>

                {/* Profile Picture */}
                <div className="animate-item mb-12 opacity-0 relative">
                    {/* Additional sparkles around profile */}
                    <div className="absolute -top-8 -left-8 opacity-30">
                        <span className="text-2xl animate-pulse">✨</span>
                    </div>
                    <div className="absolute -top-4 -right-12 opacity-40">
                        <span className="text-xl animate-pulse" style={{ animationDelay: '1s' }}>✨</span>
                    </div>
                    <div className="absolute -bottom-6 -left-10 opacity-35">
                        <span className="text-lg animate-pulse" style={{ animationDelay: '2s' }}>✨</span>
                    </div>
                    <div className="absolute -bottom-8 -right-8 opacity-30">
                        <span className="text-xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</span>
                    </div>

                    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
                        {/* Wavy circle border */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-pulse"></div>
                        <div className="absolute inset-1 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-700/50">
                            <img
                                src="/placeholder.svg?height=160&width=160&text=Profile"
                                alt="Jhonn Vincent Arcipe"
                                className="w-full h-full object-cover rounded-full opacity-80"
                            />
                        </div>
                        {/* Wavy border effect */}
                        <div
                            className="absolute -inset-2 rounded-full border-2 border-dashed border-blue-500/30 animate-spin"
                            style={{ animationDuration: "20s" }}
                        ></div>
                    </div>
                </div>

                <div className="space-y-8">
                    <p className="animate-item font-cabinet text-lg text-gray-400 leading-relaxed opacity-0 max-w-3xl mx-auto">
                        I developed a passion for coding at a young age and have consistently honed my skills to deliver exceptional software solutions. By combining my expertise with a collaborative mindset, I am driven to turn your vision into reality.
                    </p>
                    <p className="animate-item font-cabinet text-xl md:text-2xl text-gray-300 leading-relaxed opacity-0 font-light">
                        Let's work together to create something extraordinary!
                    </p>

                </div>
            </div>
        </section>
    )
} 