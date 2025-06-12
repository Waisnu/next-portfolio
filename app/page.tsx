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

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target

          if (target.classList.contains("animate-on-scroll")) {
            anime({
              targets: target.querySelectorAll(".animate-item"),
              translateY: [40, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(100),
              easing: "easeOutExpo",
            })
          }
        }
      })
    }, observerOptions)

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      observer.disconnect()
    }
  }, [])

  // Prevent body scroll when menu is open
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

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char inline-block">
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
      // Animate the current testimonial out
      anime({
        targets: ".testimonial-card.active",
        translateX: [0, -50],
        opacity: [1, 0],
        easing: "easeInOutQuad",
        duration: 300,
        complete: () => {
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
          // Animate the new testimonial in
          setTimeout(() => {
            anime({
              targets: ".testimonial-card.active",
              translateX: [50, 0],
              opacity: [0, 1],
              easing: "easeOutQuad",
              duration: 300,
            })
          }, 50)
        },
      })
    }

    const prevTestimonial = () => {
      // Animate the current testimonial out
      anime({
        targets: ".testimonial-card.active",
        translateX: [0, 50],
        opacity: [1, 0],
        easing: "easeInOutQuad",
        duration: 300,
        complete: () => {
          setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
          // Animate the new testimonial in
          setTimeout(() => {
            anime({
              targets: ".testimonial-card.active",
              translateX: [-50, 0],
              opacity: [0, 1],
              easing: "easeOutQuad",
              duration: 300,
            })
          }, 50)
        },
      })
    }

    return (
      <div className="relative">
        <div className="flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 z-10 w-12 h-12 bg-gray-800/50 backdrop-blur-xl rounded-full border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 flex items-center justify-center text-white hover:text-gray-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonials Container */}
          <div className="flex items-center space-x-8 max-w-6xl mx-auto px-16">
            {/* Left Testimonial (Shadowed) */}
            <div className="flex-1 opacity-30 scale-90 transition-all duration-500">
              <TestimonialCard
                testimonial={testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length]}
                isActive={false}
              />
            </div>

            {/* Center Testimonial (Highlighted) */}
            <div className="flex-1 scale-105 transition-all duration-500">
              <TestimonialCard testimonial={testimonials[currentTestimonial]} isActive={true} />
            </div>

            {/* Right Testimonial (Shadowed) */}
            <div className="flex-1 opacity-30 scale-90 transition-all duration-500">
              <TestimonialCard
                testimonial={testimonials[(currentTestimonial + 1) % testimonials.length]}
                isActive={false}
              />
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 z-10 w-12 h-12 bg-gray-800/50 backdrop-blur-xl rounded-full border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 flex items-center justify-center text-white hover:text-gray-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-white" : "bg-gray-600"
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
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-red-600/25 to-black/20 rounded-full blur-2xl animate-pulse"
          style={{
            animationDelay: "0.5s",
            animationDuration: "4s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
          }}
        ></div>
      </div>

      {/* Subtle grain overlay */}
      <div className="grain-overlay"></div>

      {/* Premium Hamburger Menu */}
      <div className="fixed top-0 right-0 z-50 p-6">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 w-12 h-12 flex items-center justify-center bg-gray-900/30 backdrop-blur-xl rounded-full border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute h-0.5 w-6 bg-white transform transition-all duration-500 ease-in-out ${menuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
            ></span>
            <span
              className={`absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out ${menuOpen ? "w-0 opacity-0" : "w-6 opacity-100"}`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-white transform transition-all duration-500 ease-in-out ${menuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
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
            <a
              href="mailto:jhonnvincentarcipe1013@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section - Centered and Improved */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-6xl mx-auto w-full text-center">
          {/* Main heading with improved typography */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] mb-12">
            <div className="hero-line-1 mb-4">
              <span className="text-gray-500 font-thin">{splitText("The")}</span>{" "}
              <span className="text-white font-black">{splitText("Software")}</span>
            </div>
            <div className="hero-line-2 mb-4">
              <span className="text-white font-light">{splitText("Engineer")}</span>{" "}
              <span className="text-gray-400 font-thin">{splitText("That")}</span>
            </div>
            <div className="hero-line-3">
              <span className="text-white font-light">{splitText("Gets ")}</span>
              <span className="text-white font-black">{splitText("Shit Done")}</span>
            </div>
          </h1>

          <div className="hero-subtitle opacity-0 mb-8">
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              Software Engineer specializing in <span className="text-white font-medium">web development</span> and{" "}
              <span className="text-white font-medium">backend architecture</span>
            </p>
          </div>

          <div className="hero-description opacity-0 mb-16">
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              3+ years building robust, high-performance web applications. From frontend interfaces to backend systems,
              I create the solutions that power modern applications.
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
          <h2 className="animate-item text-4xl md:text-6xl font-light text-white mb-12 opacity-0">About Me</h2>

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
            <p className="animate-item text-xl md:text-2xl text-gray-300 leading-relaxed opacity-0 font-light">
              I build robust and efficient web applications.
            </p>
            <p className="animate-item text-lg text-gray-400 leading-relaxed opacity-0 max-w-3xl mx-auto">
              My passion lies in solving complex problems through technology. I am committed to continuous learning and
              applying modern software engineering practices to deliver high-quality, impactful solutions. I thrive in
              collaborative environments and am driven by the opportunity to contribute to meaningful projects and help
              organizations achieve their technical goals.
            </p>
            <p className="animate-item text-lg text-gray-400 leading-relaxed opacity-0 max-w-3xl mx-auto">
              I specialize in translating business requirements into clean, scalable code, with a focus on backend
              architecture and system design. With experience across the complete software development lifecycle, I've
              shipped over 15 projects demonstrating a wide range of technical skills.
            </p>
          </div>

          {/* Dynamic Page Navigation */}
          <div className="animate-item mt-16 opacity-0">
            <div className="max-w-4xl mx-auto">
              {/* Main Preview Card */}
              <div className="relative mb-8 h-64 md:h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/30">
                <img
                  src="/page-preview.png"
                  alt="Page Preview"
                  className="w-full h-full object-cover opacity-80 transition-all duration-500"
                  id="page-preview-image"
                />
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-xl rounded-full px-4 py-2">
                  <span className="text-white text-sm font-medium" id="page-year">
                    2024
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Page Navigation Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    page: "Page 1",
                    title: "Home",
                    description: "Landing & Hero",
                    image: "/placeholder.svg?height=300&width=400&text=Home+Section",
                    year: "2024",
                  },
                  {
                    page: "Page 2",
                    title: "About",
                    description: "Personal Story",
                    image: "/placeholder.svg?height=300&width=400&text=About+Section",
                    year: "2024",
                  },
                  {
                    page: "Page 3",
                    title: "Projects",
                    description: "Featured Work",
                    image: "/placeholder.svg?height=300&width=400&text=Projects+Section",
                    year: "2024",
                  },
                  {
                    page: "Page 4",
                    title: "Contact",
                    description: "Get In Touch",
                    image: "/placeholder.svg?height=300&width=400&text=Contact+Section",
                    year: "2024",
                  },
                ].map((pageData, index) => (
                  <div
                    key={index}
                    className="group bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 cursor-pointer hover:scale-105"
                    onMouseEnter={() => {
                      const previewImage = document.getElementById("page-preview-image") as HTMLImageElement
                      const pageYear = document.getElementById("page-year")
                      if (previewImage) {
                        previewImage.style.opacity = "0"
                        setTimeout(() => {
                          previewImage.src = pageData.image
                          previewImage.style.opacity = "0.8"
                        }, 150)
                      }
                      if (pageYear) {
                        pageYear.textContent = pageData.year
                      }
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{pageData.title}</div>
                        <div className="text-gray-400 text-xs">{pageData.description}</div>
                      </div>
                    </div>
                    <div className="text-gray-500 text-xs">{pageData.page}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-light text-gray-400 leading-tight mb-4">
              Building with <span className="text-white font-medium">{hoveredTech || "modern technologies"}</span>
            </h2>
            <p className="text-gray-500 text-lg">Hover over the technologies to see them in action</p>
          </div>

          {/* Technology icons - centered */}
          <div className="flex flex-wrap gap-6 lg:gap-8 justify-center max-w-4xl mx-auto">
            {[
              { name: "TypeScript", icon: "Square", color: "text-blue-400" },
              { name: "Go", icon: "Circle", color: "text-blue-500" },
              { name: "Python", icon: "Triangle", color: "text-yellow-400" },
              { name: "Node.js", icon: "Hexagon", color: "text-green-400" },
              { name: "React", icon: "Circle", color: "text-blue-400" },
              { name: "PostgreSQL", icon: "Database", color: "text-blue-600" },
              { name: "MongoDB", icon: "Database", color: "text-green-500" },
              { name: "Docker", icon: "Package", color: "text-blue-400" },
              { name: "Express", icon: "Network", color: "text-gray-400" },
              { name: "Laravel", icon: "Share2", color: "text-red-500" },
            ].map((tech, index) => {
              const IconComponent =
                tech.icon === "Circle"
                  ? Circle
                  : tech.icon === "Hexagon"
                    ? Hexagon
                    : tech.icon === "Square"
                      ? Square
                      : tech.icon === "Triangle"
                        ? Triangle
                        : tech.icon === "Database"
                          ? Database
                          : tech.icon === "Package"
                            ? Package
                            : tech.icon === "Network"
                              ? Network
                              : tech.icon === "Cloud"
                                ? Cloud
                                : tech.icon === "Share2"
                                  ? Share2
                                  : Cpu

              return (
                <div
                  key={index}
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-gray-600/50 group-hover:bg-gray-700/50`}
                  >
                    <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${tech.color} transition-all duration-300`} />
                  </div>

                  {/* Subtle glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl ${tech.color.replace(
                      "text-",
                      "bg-",
                    )} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`}
                  ></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <h2 className="animate-item text-4xl md:text-5xl font-light text-white mb-16 opacity-0">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                degree: "Applied Degree in Software Engineering",
                school: "Lithan Academy | EduCLaaS",
                period: "2022 - 2026 (Expected)",
                details:
                  "Higher Diploma in Software Engineering. Rigorous, hands-on training focused on Java, React, Agile methodologies, and full-stack development in a real-world context.",
              },
              {
                degree: "Bachelor of Science in Information Technology (BSIT)",
                school: "University of Cebu",
                period: "2022 - 2026 (Expected)",
                details: "Specialization: Software Engineering.",
              },
            ].map((edu, index) => (
              <div key={index} className="animate-item opacity-0">
                <div className="group relative bg-gray-800/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/20 transition-all duration-300 ease-in-out hover:border-gray-600/40 hover:bg-gray-800/30 cursor-pointer">
                  {/* Compact view */}
                  <div className="transition-all duration-300 ease-in-out">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <span className="text-gray-500 text-sm">{edu.period}</span>
                    </div>
                    <p className="text-gray-400 font-medium">{edu.school}</p>

                    {/* Expanded details */}
                    <div
                      className="overflow-hidden transition-all duration-500 ease-in-out group-hover:mt-4"
                      style={{
                        maxHeight: "0px",
                        transition: "max-height 0.5s ease-in-out, margin-top 0.3s ease-in-out",
                      }}
                    >
                      <div className="pt-4 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                        <p className="text-gray-400 text-sm leading-relaxed">{edu.details}</p>
                      </div>
                    </div>
                  </div>

                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                </div>

                <style jsx>{`
                  .group:hover .overflow-hidden {
                    max-height: 120px !important;
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <h2 className="animate-item text-4xl md:text-5xl font-light text-white mb-16 opacity-0">Experience</h2>
          <div className="space-y-4">
            {[
              {
                title: "Backend Developer (Contract)",
                company: "Ohmyhome (NASDAQ:OMH)",
                period: "Feb 2024 - Present",
                location: "Remote",
                description:
                  "Architect and develop backend services using TypeScript and PostgreSQL for a new student-focused application.",
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
                description:
                  "Developed and maintained data visualizations in Power BI to translate complex datasets into actionable business insights.",
                achievements: ["Created custom DAX measures and queries", "Met specific client reporting requirements"],
                technologies: ["Power BI", "DAX", "Data Visualization"],
              },
              {
                title: "Web Developer Intern",
                company: "Glorious",
                period: "May 2024 - Jul 2024",
                location: "Remote",
                description:
                  "Led the planning, design, and development of a Minimum Viable Product (MVP) for a care operations platform, focusing on the core scheduling and matching system.",
                achievements: [
                  "Designed core scheduling system",
                  "Implemented matching algorithm",
                  "Delivered MVP on schedule",
                ],
                technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
              },
            ].map((job, index) => (
              <div key={index} className="animate-item opacity-0">
                <div className="group relative bg-gray-800/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/20 transition-all duration-300 ease-in-out hover:border-gray-600/40 hover:bg-gray-800/30 cursor-pointer">
                  {/* Compact view */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {job.title}
                          </h3>
                          <div className="flex items-center space-x-3">
                            <p className="text-gray-400 font-medium">{job.company}</p>
                            <span className="text-gray-600">•</span>
                            <span className="text-gray-500 text-sm">{job.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 text-sm">{job.period}</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto"></div>
                    </div>
                  </div>

                  {/* Expanded details */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out group-hover:mt-6"
                    style={{
                      maxHeight: "0px",
                      transition: "max-height 0.6s ease-in-out, margin-top 0.3s ease-in-out",
                    }}
                  >
                    <div className="pt-6 space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-200">
                      <p className="text-gray-400 leading-relaxed">{job.description}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Key Achievements</h4>
                          <ul className="space-y-1">
                            {job.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start space-x-2">
                                <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-400 text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-lg text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                </div>

                <style jsx>{`
                  .group:hover .overflow-hidden {
                    max-height: 300px !important;
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-32 px-6 animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="animate-item text-4xl md:text-5xl font-light text-white opacity-0">Featured Projects</h2>
            <Link
              href="/projects"
              className="animate-item opacity-0 text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "JumpStart E-Commerce",
                description:
                  "A full-featured e-commerce application with cart functionality, PayPal integration, and user reviews.",
                tech: ["JavaScript", "Node.js", "Express", "React", "MongoDB"],
                metrics: "1000+ products, 99.9% uptime",
                image: "E-commerce Dashboard",
                gradient: "from-blue-500/20 to-purple-500/20",
                demo: "https://jumpstart-e-commerce.onrender.com",
                github: "https://github.com/Vince-Arcipe/jumpstart-e-commerce",
              },
              {
                title: "Infoplay",
                description:
                  "A video game discovery platform providing comprehensive information on games, platforms, genres, and ratings.",
                tech: ["TypeScript", "React", "Chakra UI", "Vite"],
                metrics: "100+ games, <50ms latency",
                image: "Game Discovery Platform",
                gradient: "from-green-500/20 to-blue-500/20",
                demo: "https://infoplay.vercel.app",
                github: "https://github.com/Vince-Arcipe/infoplay",
              },
            ].map((project, index) => (
              <div key={index} className="animate-item opacity-0">
                <Link href="/projects">
                  <div className="group bg-gray-800/30 backdrop-blur-xl rounded-3xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-[1.02] cursor-pointer">
                    {/* Project Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}></div>
                      <img
                        src={`/placeholder.svg?height=300&width=500&text=${encodeURIComponent(project.image)}`}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                      {/* Floating metrics */}
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-xl rounded-full px-3 py-1">
                        <span className="text-white text-xs font-medium">{project.metrics.split(",")[0]}</span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600/50 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-sm font-medium">{project.metrics}</p>
                        <div className="flex items-center space-x-2 text-gray-400 group-hover:text-white transition-colors duration-300">
                          <span className="text-sm">View Project</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6 animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="animate-item text-4xl md:text-5xl font-light text-white mb-4 opacity-0">
              What People Say About Me
            </h2>
            <p className="animate-item text-gray-400 text-lg opacity-0">
              Testimonials from colleagues I've worked with
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            I'm open to new opportunities and collaborations. Let's discuss how we can work together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:jhonnvincentarcipe1013@gmail.com"
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a
              href="tel:+639773230337"
              className="border border-gray-600 text-white px-8 py-3 rounded-full font-medium hover:border-gray-500 transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>+63 977 323 0337</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: <Github className="w-6 h-6" />, href: "https://github.com/Vince-Arcipe", label: "GitHub" },
              { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com", label: "LinkedIn" },
              {
                icon: <Globe className="w-6 h-6" />,
                href: "https://jhonnvincentarcipe1013.github.io/",
                label: "Portfolio",
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
          <p className="text-gray-500">© 2024 Jhonn Vincent Arcipe. Built with Next.js and deployed on Vercel.</p>
        </div>
      </footer>
    </div>
  )
}
