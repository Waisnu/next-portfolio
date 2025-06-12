"use client"
import anime from "animejs"

export function Skills() {
    return (
        <section id="skills" className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
            <div className="max-w-7xl mx-auto text-center">
                {/* Header with Dynamic Text */}
                <div className="mb-16 relative h-24">
                    <h2 className="font-gambarino text-4xl md:text-6xl font-light text-gray-400 leading-tight mb-4">
                        Building with <span className="text-pink-200 font-large dynamic-tech-text">modern technologies</span>
                    </h2>
                </div>

                {/* Real Technology Icons with Devicon */}
                <div className="flex flex-wrap gap-6 lg:gap-8 justify-center max-w-4xl mx-auto">
                    {[
                        { name: "Python", icon: "devicon-python-plain", color: "from-yellow-400 to-blue-500" },
                        { name: "TypeScript", icon: "devicon-typescript-plain", color: "from-blue-400 to-blue-600" },
                        { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "from-blue-500 to-indigo-600" },
                        { name: "Postman", icon: "devicon-postman-plain", color: "from-orange-400 to-red-500" },
                        { name: "Docker", icon: "devicon-docker-plain", color: "from-blue-400 to-cyan-500" },
                        { name: "Laravel", icon: "devicon-laravel-original", color: "from-red-500 to-orange-500" },
                        { name: "Bun", icon: "devicon-bun-plain", color: "from-yellow-300 to-yellow-500" },
                        { name: "Git", icon: "devicon-git-plain", color: "from-orange-500 to-red-600" },
                        { name: "Express", icon: "devicon-express-original", color: "from-gray-400 to-gray-600" },
                        { name: "Jira", icon: "devicon-jira-plain", color: "from-blue-500 to-blue-700" },
                        { name: "Jest", icon: "devicon-jest-plain", color: "from-red-500 to-pink-500" },
                        { name: "GitHub Actions", icon: "devicon-githubactions-plain", color: "from-gray-700 to-blue-600" },
                        { name: "Vitest", icon: "devicon-vitest-plain", color: "from-green-400 to-yellow-500" },
                        { name: "Hono", icon: "custom-hono", color: "from-orange-400 to-red-500" },
                    ].map((tech, index) => (
                        <div
                            key={index}
                            className="group relative cursor-pointer transform transition-all duration-500 hover:scale-110"
                            onMouseEnter={() => {
                                // Add rotation animation on hover
                                anime({
                                    targets: `.tech-icon-${index}`,
                                    rotateY: [0, 360],
                                    duration: 800,
                                    easing: "easeInOutQuad"
                                });

                                // Animate the tech name in the header
                                anime({
                                    targets: '.dynamic-tech-text',
                                    opacity: [0, 1],
                                    translateY: [20, 0],
                                    duration: 500,
                                    easing: 'easeOutQuad',
                                    begin: () => {
                                        const element = document.querySelector('.dynamic-tech-text');
                                        if (element) {
                                            element.textContent = tech.name;
                                        }
                                    }
                                });
                            }}
                            onMouseLeave={() => {
                                // Clear any existing timeouts
                                if (typeof window !== 'undefined') {
                                    // Cast window to any to allow custom property
                                    const win = window as any;
                                    if (win._resetTextTimeout) {
                                        clearTimeout(win._resetTextTimeout);
                                    }
                                }

                                // Set new timeout to restore text
                                (window as any)._resetTextTimeout = setTimeout(() => {
                                    anime({
                                        targets: '.dynamic-tech-text',
                                        opacity: [0, 1],
                                        translateY: [10, 0],
                                        duration: 2000,
                                        easing: 'easeOutQuad',
                                        begin: () => {
                                            const element = document.querySelector('.dynamic-tech-text');
                                            if (element) {
                                                element.textContent = 'modern technologies';
                                            }
                                        }
                                    });
                                }, 3000);
                            }}
                        >
                            <div
                                className={`tech-icon-${index} w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700/30 flex items-center justify-center transition-all duration-500 group-hover:border-gray-600/50 group-hover:bg-gray-700/50 group-hover:shadow-2xl`}
                            >
                                {tech.icon === "custom-hono" ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                        fill={"currentColor"} viewBox="0 0 24 24" className="text-white transition-all duration-300 group-hover:scale-110">
                                        <path d="M19.22 12.36c-.68-1.64-1.51-3.19-2.49-4.66a75 75 0 0 0-4.22-5.66.18.18 0 0 0-.14-.04c-1.7 2.1-3.16 4.36-4.38 6.79-.16-.14-.31-.29-.46-.44a25 25 0 0 0-1-1.29 7.2 7.2 0 0 0-1.04 1.77c-.64 1.57-1.04 3.21-1.2 4.9-.1.98 0 1.95.28 2.89 1.09 2.9 3.16 4.66 6.2 5.28 2.55.36 4.79-.28 6.75-1.93 2.23-2.16 2.8-4.69 1.71-7.61Zm-3.84 5.28c-1.54 1.08-3.22 1.4-5.06.96-1.98-.61-3.12-1.95-3.43-4-.08-.65 0-1.28.2-1.89.3-.75.66-1.48 1.08-2.17l1.2-1.77c.91-1.17 1.82-2.35 2.71-3.53 1.47 1.71 2.81 3.53 4 5.46.37.64.68 1.31.92 2.01.51 1.99-.04 3.63-1.63 4.92Z"></path>
                                    </svg>
                                ) : (
                                    <i className={`${tech.icon} text-3xl md:text-4xl text-white transition-all duration-300 group-hover:scale-110`}></i>
                                )}
                            </div>

                            {/* Enhanced Glow Effect */}
                            <div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10 blur-xl scale-110`}
                            ></div>

                            {/* Tech Name Tooltip */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-xl text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                                {tech.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 