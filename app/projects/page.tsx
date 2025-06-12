"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import * as anime from "animejs"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Clock, Target, Linkedin } from "lucide-react"

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Page load animations
    anime({
      targets: ".project-card",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      delay: anime.stagger(150),
      easing: "easeOutExpo",
    })

    anime({
      targets: ".header-item",
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 600,
      delay: anime.stagger(100),
      easing: "easeOutExpo",
    })
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }

    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [menuOpen])

  const projects = [
    {
      id: 1,
      title: "JumpStart E-Commerce",
      description:
        "A full-featured e-commerce application with cart functionality, PayPal integration, and user reviews. Features robust authorization and authentication.",
      longDescription:
        "This project provides a complete shopping experience with product listings, search functionality, user reviews, and secure checkout via PayPal. The application includes admin features for product and order management.",
      tech: ["JavaScript", "Node.js", "Express", "Redux", "React", "MongoDB", "Bootstrap 5"],
      metrics: [
        { label: "Products", value: "1000+", icon: Target },
        { label: "Uptime", value: "99.9%", icon: Clock },
        { label: "Response Time", value: "<200ms", icon: Target },
        { label: "Users", value: "500+", icon: Users },
      ],
      challenges: [
        "Implementing secure user authentication",
        "Creating a responsive shopping cart experience",
        "Integrating PayPal payment processing",
        "Optimizing product search functionality",
      ],
      solutions: [
        "Used JWT for secure authentication",
        "Built real-time cart updates with Redux",
        "Integrated PayPal SDK for seamless payments",
        "Implemented efficient MongoDB queries",
      ],
      github: "https://github.com/Vince-Arcipe/jumpstart-e-commerce",
      demo: "https://jumpstart-e-commerce.onrender.com",
      year: "2023",
      duration: "3 months",
      team: "Solo project",
      featured: true,
      gradient: "from-blue-500/30 to-purple-500/30",
      image: "JumpStart E-Commerce",
    },
    {
      id: 2,
      title: "Infoplay",
      description:
        "A video game discovery platform providing comprehensive information on games, platforms, genres, and ratings, inspired by the RAWG.IO API.",
      longDescription:
        "Infoplay helps users discover new games through an intuitive interface. The platform provides detailed information about games, including ratings, platforms, and genres, making it easy for gamers to find their next favorite title.",
      tech: ["TypeScript", "React", "Chakra UI", "Vite", "Bun"],
      metrics: [
        { label: "Games Listed", value: "100+", icon: Target },
        { label: "Load Time", value: "<50ms", icon: Clock },
        { label: "Platforms", value: "12+", icon: Users },
        { label: "Genres", value: "20+", icon: Calendar },
      ],
      challenges: [
        "Handling complex API data structures",
        "Creating an intuitive search and filter system",
        "Implementing responsive design for all devices",
        "Optimizing performance for large game catalogs",
      ],
      solutions: [
        "Used TypeScript for type-safe API integration",
        "Built advanced filtering with React hooks",
        "Implemented responsive UI with Chakra components",
        "Optimized rendering with React.memo and useMemo",
      ],
      github: "https://github.com/Vince-Arcipe/infoplay",
      demo: "https://infoplay.vercel.app",
      year: "2023",
      duration: "2 months",
      team: "Solo project",
      featured: true,
      gradient: "from-green-500/30 to-yellow-500/30",
      image: "Infoplay Platform",
    },
    {
      id: 3,
      title: "Pyano",
      description:
        "A minimalist virtual piano built with React and Tone.js for music enthusiasts to play melodies in the browser.",
      longDescription:
        "Pyano is a web-based virtual piano that allows users to play music directly in their browser. It features realistic piano sounds powered by Tone.js and a clean, minimalist interface that's easy to use.",
      tech: ["Vite", "React", "TypeScript", "Tone.js", "DaisyUI"],
      metrics: [
        { label: "Keys", value: "88", icon: Clock },
        { label: "Sound Quality", value: "High", icon: Target },
        { label: "Latency", value: "<10ms", icon: Target },
        { label: "Instruments", value: "3", icon: Clock },
      ],
      challenges: [
        "Achieving low audio latency in the browser",
        "Creating responsive piano key layouts",
        "Implementing realistic piano sounds",
        "Supporting both mouse and keyboard input",
      ],
      solutions: [
        "Optimized Tone.js for minimal latency",
        "Used CSS grid for responsive key layout",
        "Implemented high-quality sampled sounds",
        "Added keyboard event listeners for playability",
      ],
      github: "https://github.com/Vince-Arcipe/pyano",
      demo: "https://pyano.vercel.app",
      year: "2023",
      duration: "1 month",
      team: "Solo project",
      featured: true,
      gradient: "from-yellow-500/30 to-red-500/30",
      image: "Pyano Virtual Piano",
    },
    {
      id: 4,
      title: "Cars Portal",
      description:
        "A web application for buying and selling used cars, featuring a bidding system that allows users to acquire vehicles at competitive prices.",
      longDescription:
        "Cars Portal connects car sellers with potential buyers through an intuitive platform. The application includes user authentication, car listings with detailed information, and a bidding system for price negotiation.",
      tech: ["Java", "Spring MVC", "Spring Security", "MySQL", "Thymeleaf", "Bootstrap"],
      metrics: [
        { label: "Listings", value: "500+", icon: Target },
        { label: "Users", value: "300+", icon: Users },
        { label: "Bids/Day", value: "100+", icon: Target },
        { label: "Response Time", value: "<300ms", icon: Clock },
      ],
      challenges: [
        "Implementing secure bidding system",
        "Managing user roles and permissions",
        "Creating efficient search filters for cars",
        "Handling image uploads and storage",
      ],
      solutions: [
        "Built transaction-safe bidding with Spring",
        "Implemented role-based access with Spring Security",
        "Created advanced search with JPA Criteria API",
        "Used cloud storage for efficient image handling",
      ],
      github: "https://github.com/Vince-Arcipe/car-portal",
      demo: "https://carspark.up.railway.app",
      year: "2022",
      duration: "4 months",
      team: "Solo project",
      featured: false,
      gradient: "from-purple-500/30 to-pink-500/30",
      image: "Cars Portal Platform",
    },
    {
      id: 5,
      title: "Chirper",
      description:
        "An enhanced version of the Bootcamp.laravel.com project, upgraded with dynamic timezones, role-based authentication (Gate/Policy), and UI improvements.",
      longDescription:
        "Chirper is a Twitter-like social platform that allows users to post short messages, follow other users, and engage with content. This enhanced version adds several features beyond the original tutorial, including timezone support and role-based permissions.",
      tech: ["PHP", "Laravel", "Blade", "MySQL", "Tailwind CSS"],
      metrics: [
        { label: "Users", value: "200+", icon: Users },
        { label: "Posts", value: "1000+", icon: Target },
        { label: "Response Time", value: "<100ms", icon: Clock },
        { label: "Uptime", value: "99.9%", icon: Target },
      ],
      challenges: [
        "Implementing dynamic timezone support",
        "Creating a role-based permission system",
        "Enhancing the UI beyond the tutorial",
        "Optimizing database queries for timeline",
      ],
      solutions: [
        "Used Carbon for timezone handling",
        "Implemented Laravel Gates and Policies",
        "Enhanced UI with custom Tailwind components",
        "Optimized queries with eager loading",
      ],
      github: "https://github.com/Vince-Arcipe/chirper",
      year: "2022",
      duration: "2 months",
      team: "Solo project",
      featured: false,
      gradient: "from-blue-500/30 to-green-500/30",
      image: "Chirper Social Platform",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-rose-950 relative overflow-hidden">
      {/* Enhanced Aurora Background Effects with Yellow */}
      <div className="fixed inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#ee9ca7]/25 to-white/15 rounded-full blur-3xl animate-pulse"
          style={{
            animationDuration: "4s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
          }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-white/20 to-[#ffdde1]/25 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: "1s",
            animationDuration: "4s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
          }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-black/40 to-[#ee9ca7]/30 rounded-full blur-2xl animate-pulse"
          style={{
            animationDelay: "2s",
            animationDuration: "4s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
          }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-[#ee9ca7]/30 to-black/25 rounded-full blur-2xl animate-pulse"
          style={{
            animationDelay: "0.5s",
            animationDuration: "4s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
          }}
        ></div>
        <div
          className="absolute top-1/3 left-2/3 w-64 h-64 bg-gradient-to-r from-[#ee9ca7]/20 to-[#ffdde1]/25 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: "3s",
            animationDuration: "4s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
          }}
        ></div>
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay"></div>

      {/* Simple Back Button - No Navbar */}
      <div className="fixed top-0 left-0 z-50 p-6">
        <Link href="/" className="flex items-center space-x-3 text-white hover:text-gray-300 transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Premium Hamburger Menu */}
      <div className="fixed top-0 right-0 z-50 p-6">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 w-12 h-12 flex items-center justify-center bg-gray-900/30 backdrop-blur-xl rounded-full border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute h-0.5 w-6 bg-white transform transition-all duration-500 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                menuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-white transform transition-all duration-500 ease-in-out ${
                menuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transform transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-xl font-bold text-white mb-16">Jhonn Vincent Arcipe</div>
          <nav className="flex flex-col items-center space-y-8">
            {[
              { name: "About", href: "/#about" },
              { name: "Skills", href: "/#skills" },
              { name: "Experience", href: "/#experience" },
              { name: "Education", href: "/#education" },
              { name: "Projects", href: "/projects" },
              { name: "Testimonials", href: "/#testimonials" },
              { name: "Contact", href: "/#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="menu-item text-3xl text-gray-400 hover:text-white transition-colors duration-300 font-light relative group"
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
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="header-item text-5xl md:text-7xl font-light text-white mb-8 opacity-0">
              Featured <span className="text-[#ee9ca7] font-medium">Projects</span>
            </h1>
            <p className="header-item text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed opacity-0">
              A showcase of my web development projects demonstrating expertise in frontend and backend technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.id} className={`project-card opacity-0 ${project.featured ? "featured" : ""}`}>
                <div
                  className={`bg-gray-800/20 backdrop-blur-xl rounded-3xl border transition-all duration-500 hover:border-gray-600/50 overflow-hidden group ${
                    project.featured ? "border-[#ee9ca7]/30" : "border-gray-700/30"
                  }`}
                >
                  {project.featured && (
                    <div className="inline-flex items-center space-x-2 bg-[#ee9ca7]/20 text-[#ee9ca7] px-4 py-2 rounded-full text-sm font-medium m-8 mb-0">
                      <span className="w-2 h-2 bg-[#ee9ca7] rounded-full animate-pulse"></span>
                      <span>Featured Project</span>
                    </div>
                  )}

                  <div className="grid lg:grid-cols-5 gap-8 p-8">
                    {/* Project Image */}
                    <div className="lg:col-span-2">
                      <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}></div>
                        <img
                          src={`/placeholder.svg?height=400&width=600&text=${encodeURIComponent(project.image)}`}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>

                        {/* Project Year Badge */}
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xl rounded-full px-3 py-1">
                          <span className="text-white text-sm font-medium">{project.year}</span>
                        </div>
                      </div>

                      {/* Quick Metrics Grid */}
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        {project.metrics.slice(0, 4).map((metric, metricIndex) => {
                          const IconComponent = metric.icon
                          return (
                            <div
                              key={metricIndex}
                              className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-4 border border-gray-700/30 hover:border-[#ee9ca7]/30 transition-colors duration-300"
                            >
                              <div className="flex items-center space-x-3">
                                <IconComponent className="w-5 h-5 text-[#ee9ca7]" />
                                <div>
                                  <div className="text-lg font-bold text-white">{metric.value}</div>
                                  <div className="text-gray-400 text-xs">{metric.label}</div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center space-x-4 mb-4">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white group-hover:text-[#ee9ca7] transition-colors duration-300">
                          {project.title}
                        </h2>
                        <div className="flex items-center space-x-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{project.duration}</span>
                          <span>•</span>
                          <Users className="w-4 h-4" />
                          <span>{project.team}</span>
                        </div>
                      </div>

                      <p className="text-lg text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                      <p className="text-gray-400 mb-8 leading-relaxed">{project.longDescription}</p>

                      {/* Tech Stack */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-white mb-4">Technology Stack</h3>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-700/40 backdrop-blur-xl text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/30 hover:border-[#ee9ca7]/50 hover:bg-[#ee9ca7]/10 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Challenges & Solutions */}
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span>Key Challenges</span>
                          </h3>
                          <ul className="space-y-3">
                            {project.challenges.map((challenge, challengeIndex) => (
                              <li key={challengeIndex} className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-400 text-sm leading-relaxed">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Solutions Implemented</span>
                          </h3>
                          <ul className="space-y-3">
                            {project.solutions.map((solution, solutionIndex) => (
                              <li key={solutionIndex} className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-400 text-sm leading-relaxed">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-xl text-gray-300 hover:text-white px-6 py-3 rounded-full border border-gray-600/30 hover:border-[#ee9ca7]/50 transition-all duration-300 group"
                          >
                            <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                            <span>View Code</span>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-[#ee9ca7]/20 backdrop-blur-xl text-[#ee9ca7] hover:text-[#ffdde1] px-6 py-3 rounded-full border border-[#ee9ca7]/30 hover:border-[#ffdde1]/50 transition-all duration-300 group"
                          >
                            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 bg-gradient-to-t from-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Ready to Build Something <span className="text-[#ee9ca7] font-medium">Amazing?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Let's discuss how we can bring your web application vision to life with clean, efficient, and scalable
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/#contact"
              className="bg-[#ee9ca7] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#ffdde1] transition-colors duration-300 shadow-lg hover:shadow-[#ee9ca7]/25"
            >
              Start a Conversation
            </Link>
            <Link
              href="/"
              className="border border-gray-600 text-white px-8 py-4 rounded-full font-medium hover:border-[#ee9ca7] hover:text-[#ee9ca7] transition-colors duration-300"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
