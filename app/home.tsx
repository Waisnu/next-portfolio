"use client"

import { useEffect } from "react"
import anime from "animejs"
import { Header } from "@/components/home/header"
import { Hero } from "@/components/home/sections/hero"
import { About } from "@/components/home/sections/about"
import { Skills } from "@/components/home/sections/skills"
import { Experience } from "@/components/home/sections/experience"
import { FeaturedProjects } from "@/components/home/sections/featured-projects"
import { Testimonials } from "@/components/home/sections/testimonials"
import { Contact } from "@/components/home/sections/contact"
import { Footer } from "@/components/home/sections/footer"

export default function Home() {
    useEffect(() => {
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

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target

                    anime({
                        targets: target.querySelectorAll(".animate-item"),
                        translateY: [60, 0],
                        opacity: [0, 1],
                        duration: 1000,
                        delay: anime.stagger(200),
                        easing: "easeOutExpo",
                    })

                    observer.unobserve(target)
                }
            })
        }, observerOptions)

        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
            observer.observe(el)
        })

        return () => {
            observer.disconnect()
        }
    }, [])

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

            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <FeaturedProjects />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    )
} 