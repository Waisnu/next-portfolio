"use client"
import { useEffect, useRef, useState } from "react"
import anime from "animejs"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Briefcase,
  Database,
  Cpu,
  Package,
  Network,
  Cloud,
  Share2,
  Triangle,
  Circle,
  Square,
  Hexagon,
  Quote,
  ChevronLeft,
  ChevronRight,
  Globe,
  Phone,
} from "lucide-react"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    // Mouse tracking for subtle parallax
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)

    // Hero animations
    const tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 1000,
    })

    tl.add({
      targets: ".hero-line-1 .char",
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: anime.stagger(50),
    })
      .add(
        {
          targets: ".hero-line-2 .char",
          translateY: [100, 0],
          opacity: [0, 1],
          duration: 1200,
          delay: anime.stagger(40),
        },
        "-=800",
      )
      .add(
        {
          targets: ".hero-line-3 .char",
          translateY: [100, 0],
          opacity: [0, 1],
          duration: 1200,
          delay: anime.stagger(45),
        },
        "-=800",
      )
      .add(
        {
          targets: ".hero-subtitle",
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
        },
        "-=400",
      )
      .add(
        {
          targets: ".hero-description",
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 600,
        },
        "-=200",
      )

    // Advanced scroll animations with special handling for education/experience
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target

          if (target.classList.contains("animate-on-scroll")) {
            // Special animation for education/experience section
            if (target.id === "education") {
              // Main title animation
              anime({
                targets: target.querySelectorAll(".animate-item")[0],
                translateY: [60, 0],
                opacity: [0, 1],
                duration: 1000,
                easing: "easeOutExpo",
              })

              // Title line animation
              anime({
                targets: target.querySelectorAll(".animate-item")[1],
                scaleX: [0, 1],
                opacity: [0, 1],
                duration: 800,
                delay: 500,
                easing: "easeOutExpo",
              })

              // Education column animation
              anime({
                targets: target.querySelector(".education-column"),
                translateX: [-100, 0],
                opacity: [0, 1],
                duration: 1000,
                delay: 700,
                easing: "easeOutExpo",
              })

              // Experience column animation  
              anime({
                targets: target.querySelector(".experience-column"),
                translateX: [100, 0],
                opacity: [0, 1],
                duration: 1000,
                delay: 900,
                easing: "easeOutExpo",
              })

              // Education icon morphing animation
              anime({
                targets: target.querySelector(".education-icon"),
                scale: [0, 1.2, 1],
                rotateY: [0, 360],
                duration: 1500,
                delay: 1100,
                easing: "easeOutElastic(1, .8)",
              })

              // Experience icon morphing animation
              anime({
                targets: target.querySelector(".experience-icon"),
                scale: [0, 1.2, 1],
                rotateZ: [0, 360],
                duration: 1500,
                delay: 1300,
                easing: "easeOutElastic(1, .8)",
              })

              // Education items staggered animation
              anime({
                targets: target.querySelectorAll(".education-item"),
                translateY: [40, 0],
                opacity: [0, 1],
                scale: [0.9, 1],
                duration: 800,
                delay: anime.stagger(150, {start: 1500}),
                easing: "easeOutExpo",
              })

              // Experience items staggered animation
              anime({
                targets: target.querySelectorAll(".experience-item"),
                translateY: [40, 0],
                opacity: [0, 1],
                scale: [0.9, 1],
                duration: 800,
                delay: anime.stagger(150, {start: 1700}),
                easing: "easeOutExpo",
              })

            } else {
              // Standard animations for other sections
              anime({
                targets: target.querySelectorAll(".animate-item"),
                translateY: [60, 0],
                opacity: [0, 1],
                duration: 1000,
                delay: anime.stagger(200),
                easing: "easeOutExpo",
              })
            }

            observer.unobserve(target)
          }
        }
      })
    }, observerOptions)

    // Observe all scroll-animated elements
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      observer.disconnect()
    }
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

  // Text splitting utility for character animations
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char inline-block opacity-0">
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  }

  const TestimonialsCarousel = () => {
    const testimonials = [
      {
        name: "Clifford Solon",
        title: "Floor Support",
        company: "Concentrix",
        image: "/placeholder.svg?height=80&width=80&text=CS",
        quote:
          "A fun guy to work with; this guy knows his thing! He embraces challenges and is very consistent. Good luck in your career, Vin. As an aspiring Software Engineer, I know you can achieve great heights.",
      },
      {
        name: "Gian Alilin",
        title: "Team Leader",
        company: "Concentrix",
        image: "/placeholder.svg?height=80&width=80&text=GA",
        quote:
          "During Vincent's tenure, he consistently delivered exceptional customer service, exceeded responsibilities, and maintained perfect attendance. His dedication and reliability were exemplary. I highly recommend Jhonn for any role requiring outstanding customer experience and responsibility.",
      },
    ]

    const nextTestimonial = () => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
      <div className="relative max-w-6xl mx-auto">
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <TestimonialCard 
                  testimonial={testimonial} 
                  isActive={index === currentTestimonial} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/70 backdrop-blur-xl rounded-full border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 flex items-center justify-center text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/70 backdrop-blur-xl rounded-full border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 flex items-center justify-center text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                index === currentTestimonial ? "bg-blue-500 scale-110" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    )
  }

  const TestimonialCard = ({ testimonial, isActive }: { testimonial: any; isActive: boolean }) => (
    <div
      className={`testimonial-card ${isActive ? "active" : ""} bg-white/5 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 relative overflow-hidden ${
        isActive ? "border-gray-600/40 bg-white/10" : "border-gray-700/20"
      }`}
    >
      {/* Quote icon */}
      <div
        className={`absolute top-6 right-6 transition-opacity duration-300 ${isActive ? "opacity-20" : "opacity-10"}`}
      >
        <Quote className="w-12 h-12 text-white" />
      </div>

      {/* Profile */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className={`w-16 h-16 rounded-full object-cover border-2 transition-colors duration-300 ${
              isActive ? "border-blue-400/50" : "border-gray-600/50"
            }`}
          />
          {isActive && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
          )}
        </div>
        <div>
          <h3
            className={`text-lg font-semibold transition-colors duration-300 ${
              isActive ? "text-blue-400" : "text-white"
            }`}
          >
            {testimonial.name}
          </h3>
          <p className="text-gray-400 text-sm">
            {testimonial.title} at <span className="text-blue-400 font-medium">{testimonial.company}</span>
          </p>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-gray-300 leading-relaxed italic relative z-10">"{testimonial.quote}"</blockquote>

      {/* Subtle gradient overlay */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 relative overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="fixed inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-white/10 rounded-full blur-3xl animate-pulse"
          style={{
            animationDuration: "4s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
          }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-white/15 to-red-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: "1s",
            animationDuration: "4s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
          }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-black/40 to-white/30 rounded-full blur-2xl animate-pulse"
          style={{
            animationDelay: "2s",
            animationDuration: "4s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
          }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-white/25 to-black/25 rounded-full blur-2xl animate-pulse"
          style={{
            animationDelay: "0.5s",
            animationDuration: "4s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
          }}
        ></div>
        <div
          className="absolute top-1/3 left-2/3 w-64 h-64 bg-gradient-to-r from-red-400/20 to-white/25 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: "3s",
            animationDuration: "4s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
          }}
        ></div>
      </div>

      {/* Subtle grain overlay */}
      <div className="grain-overlay"></div>

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
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transform transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
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

      {/* Hero Section - Centered and Improved */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 relative">
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

      {/* About Section */}
      <section id="about" className="py-32 px-6 animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="animate-item font-satoshi text-4xl md:text-6xl font-light text-white mb-12 opacity-0">So Who Am I ?</h2>

          {/* Profile Picture */}
          <div className="animate-item mb-12 opacity-0">
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

      {/* Skills Section - Real Tech Icons with Enhanced Animations */}
      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header with Fixed Text */}
          <div className="mb-16">
            <h2 className="font-gambarino text-4xl md:text-6xl font-light text-gray-400 leading-tight mb-4">
              Building with <span className="text-white font-medium">modern technologies</span>
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
                  })
                }}
              >
                <div
                  className={`tech-icon-${index} w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700/30 flex items-center justify-center transition-all duration-500 group-hover:border-gray-600/50 group-hover:bg-gray-700/50 group-hover:shadow-2xl`}
                >
                  <i className={`${tech.icon} text-3xl md:text-4xl text-white transition-all duration-300 group-hover:scale-110`}></i>
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

      {/* Combined Education & Experience Section with Advanced Animations */}
      <section id="education" className="py-32 px-6 animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          {/* Main Title with Morphing Animation */}
          <div className="text-center mb-20">
            <h2 className="animate-item font-gambetta text-4xl md:text-6xl font-semibold text-white mb-4 opacity-0">
              Education <span className="text-gray-500 font-light">& </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="animate-item opacity-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Side by Side Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Column */}
            <div className="education-column">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center education-icon">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                  </div>
                  <h3 className="font-gambetta text-2xl font-semibold text-white education-title">Education</h3>
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
                  <h3 className="font-gambetta text-2xl font-semibold text-white experience-title">Experience</h3>
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

      {/* Featured Projects Showcase */}
      <section className="py-32 px-6 animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          {/* Clean Header */}
          <div className="text-center mb-20">
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
                  {/* Main Project Card */}
                  <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 overflow-hidden">
                    {/* Image Placeholder */}
                    <div className="relative h-48 bg-gray-800/50 flex items-center justify-center">
                      <div className="text-gray-500 text-lg font-medium">{project.title}</div>
                      
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6 animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="animate-item font-gambarino text-4xl md:text-5xl font-light text-white mb-4 opacity-0">
              What People Say About Me
            </h2>
            <p className="animate-item font-cabinet text-gray-400 text-lg opacity-0">
              Testimonials from colleagues I've worked with
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-cabinet text-gray-500">© 2024 Jhonn Vincent Arcipe. Built with Next.js and deployed on Vercel.</p>
        </div>
      </footer>
    </div>
  )
}
