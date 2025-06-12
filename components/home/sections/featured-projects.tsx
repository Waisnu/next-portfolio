import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { SketchArrow, SketchCircle, SketchSquiggle, SketchSparkles } from "@/components/ui/animated-doodles"

export function FeaturedProjects() {
    return (
        <section className="py-32 px-6 animate-on-scroll relative">
            {/* Floating Doodles */}
            <SketchCircle className="absolute top-8 left-8 z-0 opacity-40" />
            <SketchSquiggle className="absolute top-16 right-12 z-0 opacity-30" />
            <SketchSparkles className="absolute bottom-20 left-16 z-0 opacity-50" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Clean Header */}
                <div className="text-center mb-20 relative">
                    <SketchArrow className="absolute -top-4 right-1/4 opacity-60" />
                    <h2 className="animate-item font-gambarino text-4xl md:text-6xl font-light text-white mb-6 opacity-0">
                        Featured <span className="text-gray-400">Projects</span>
                    </h2>
                    <p className="animate-item font-cabinet text-xl text-gray-400 mb-8 opacity-0">
                        Some of my recent work
                    </p>
                    <Link
                        href="/projects"
                        className="animate-item opacity-0 inline-flex items-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 group"
                    >
                        <span className="font-cabinet">View All Projects</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>

                {/* Clean Project Grid */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {[
                        {
                            title: "JumpStart E-Commerce",
                            subtitle: "Full-Stack E-Commerce Platform",
                            description: "Complete shopping experience with PayPal integration, real-time inventory, and advanced user management.",
                            tech: [
                                { name: "JavaScript", icon: "devicon-javascript-plain" },
                                { name: "Node.js", icon: "devicon-nodejs-plain" },
                                { name: "React", icon: "devicon-react-original" },
                                { name: "MongoDB", icon: "devicon-mongodb-plain" },
                                { name: "Express", icon: "devicon-express-original" }
                            ],
                            demo: "https://jumpstart-e-commerce.onrender.com",
                            github: "https://github.com/Vince-Arcipe/jumpstart-e-commerce",
                        },
                        {
                            title: "Infoplay",
                            subtitle: "Game Discovery Platform",
                            description: "Game recommendation engine with comprehensive database integration and fast search capabilities.",
                            tech: [
                                { name: "TypeScript", icon: "devicon-typescript-plain" },
                                { name: "React", icon: "devicon-react-original" },
                                { name: "Vite", icon: "devicon-vitejs-plain" },
                                { name: "Chakra UI", icon: "devicon-chakraui-plain" }
                            ],
                            demo: "https://infoplay.vercel.app",
                            github: "https://github.com/Vince-Arcipe/infoplay",
                        },
                    ].map((project, index) => (
                        <div key={index} className="animate-item opacity-0">
                            <div className="group relative">
                                {/* Decorative Sparkles */}
                                <div className="absolute -top-2 -left-2 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-2xl animate-pulse">✨</span>
                                </div>
                                <div className="absolute -top-1 -right-3 z-10 opacity-50 group-hover:opacity-80 transition-opacity duration-300">
                                    <span className="text-lg animate-pulse" style={{ animationDelay: '0.5s' }}>✨</span>
                                </div>
                                <div className="absolute -bottom-1 -left-4 z-10 opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                                    <span className="text-xl animate-pulse" style={{ animationDelay: '1s' }}>✨</span>
                                </div>

                                {/* Main Project Card */}
                                <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 overflow-hidden">
                                    {/* Image Placeholder */}
                                    <div className="relative h-48 bg-gray-800/50 flex items-center justify-center">
                                        <div className="text-gray-500 text-lg font-medium">{project.title}</div>

                                        {/* More Decorative Sparkles in Corner */}
                                        <div className="absolute top-3 right-3 opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                                            <span className="text-sm">✨</span>
                                        </div>

                                        {/* Tech Icons */}
                                        <div className="absolute bottom-4 right-4 flex space-x-2">
                                            {project.tech.slice(0, 3).map((tech, techIndex) => (
                                                <div key={techIndex} className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center">
                                                    <i className={`${tech.icon} text-sm text-gray-300`}></i>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6">
                                        <div className="mb-4">
                                            <h3 className="font-cabinet text-xl font-semibold text-white mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="font-cabinet text-gray-400 text-sm">{project.subtitle}</p>
                                        </div>

                                        <p className="font-cabinet text-gray-400 leading-relaxed mb-6">{project.description}</p>

                                        {/* Action Buttons */}
                                        <div className="flex items-center space-x-3">
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 group/btn"
                                            >
                                                <span>Live Demo</span>
                                                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </a>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                                            >
                                                <Github className="w-3 h-3" />
                                                <span>Code</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 