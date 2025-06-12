import { Briefcase } from "lucide-react"

export function Experience() {
    return (
        <section id="education" className="py-32 px-6 animate-on-scroll">
            <div className="max-w-7xl mx-auto">
                {/* Main Title with Morphing Animation */}
                <div className="text-center mb-20">
                    <h2 className="animate-item font-gambetta text-4xl md:text-6xl font-semibold text-white mb-4 opacity-0">
                    From Classrooms to Codebases <span className="text-gray-500 font-light"> </span>
                        {/* <span className="bg-gradient-to-r from-slate-400 to-slate-100 bg-clip-text text-transparent">Experience</span> */}
                    </h2>
                    {/* <div className="animate-item opacity-0 w-64 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div> */}
                </div>

                {/* Side by Side Layout */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div className="education-column">
                        <div className="mb-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center education-icon">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <h3 className="font-satoshi text-2xl font-semibold text-white education-title">Wisdom</h3>
                            </div>

                            <div className="space-y-6">
                                {[
                                    {
                                        degree: "Applied Degree in Software Engineering",
                                        school: "Lithan Academy | EduCLaaS",
                                        period: "2022 - 2026 (Expected)",
                                        details: "Higher Diploma in Software Engineering. Rigorous, hands-on training focused on Java, React, Agile methodologies, and full-stack development in a real-world context.",
                                    },
                                    {
                                        degree: "Bachelor of Science in Information Technology (BSIT)",
                                        school: "University of Cebu",
                                        period: "2022 - 2026 (Expected)",
                                        details: "Specialization: Software Engineering.",
                                    },
                                ].map((edu, index) => (
                                    <div key={index} className="education-item animate-item opacity-0">
                                        <div className="group relative bg-gray-800/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/20 hover:border-green-500/30 transition-all duration-500 cursor-pointer">
                                            <div className="flex items-start justify-between mb-3">
                                                <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                                                    {edu.degree}
                                                </h4>
                                                <span className="text-gray-500 text-sm">{edu.period}</span>
                                            </div>
                                            <p className="text-gray-400 font-medium mb-3">{edu.school}</p>
                                            <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {edu.details}
                                            </p>

                                            {/* Animated border */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div className="experience-column" id="experience">
                        <div className="mb-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center experience-icon">
                                    <Briefcase className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="font-satoshi text-2xl font-semibold text-white experience-title">Exposure</h3>
                            </div>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Backend Developer (Contract)",
                                        company: "Ohmyhome (NASDAQ:OMH)",
                                        period: "Feb 2024 - Present",
                                        location: "Remote",
                                        description: "Architect and develop backend services using TypeScript and PostgreSQL for a new student-focused application.",
                                        achievements: [
                                            "Implement comprehensive API test coverage with Vitest",
                                            "Ensure system reliability through integration and unit testing",
                                        ],
                                        technologies: ["TypeScript", "PostgreSQL", "Vitest", "REST API"],
                                    },
                                    {
                                        title: "Data Designer Intern",
                                        company: "Cube Asia",
                                        period: "Aug 2024 - Nov 2024",
                                        location: "Remote",
                                        description: "Developed and maintained data visualizations in Power BI to translate complex datasets into actionable business insights.",
                                        achievements: ["Created custom DAX measures and queries", "Met specific client reporting requirements"],
                                        technologies: ["Power BI", "DAX", "Data Visualization"],
                                    },
                                    {
                                        title: "Web Developer Intern",
                                        company: "Glorious",
                                        period: "May 2024 - Jul 2024",
                                        location: "Remote",
                                        description: "Led the planning, design, and development of a Minimum Viable Product (MVP) for a care operations platform, focusing on the core scheduling and matching system.",
                                        achievements: [
                                            "Designed core scheduling system",
                                            "Implemented matching algorithm",
                                            "Delivered MVP on schedule",
                                        ],
                                        technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
                                    },
                                ].map((job, index) => (
                                    <div key={index} className="experience-item animate-item opacity-0">
                                        <div className="group relative bg-gray-800/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/20 hover:border-blue-500/30 transition-all duration-500 cursor-pointer">
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                                        {job.title}
                                                    </h4>
                                                    <div className="flex items-center space-x-3 mt-1">
                                                        <p className="text-gray-400 font-medium">{job.company}</p>
                                                        <span className="text-gray-600">•</span>
                                                        <span className="text-gray-500 text-sm">{job.location}</span>
                                                    </div>
                                                </div>
                                                <span className="text-gray-500 text-sm">{job.period}</span>
                                            </div>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-3">{job.description}</p>

                                            {/* Achievements - Only show first 2 */}
                                            <div className="space-y-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {job.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                                                    <div key={achievementIndex} className="flex items-start space-x-2">
                                                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-400 text-xs">{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2">
                                                {job.technologies.slice(0, 3).map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-lg text-xs"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Animated border */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
} 