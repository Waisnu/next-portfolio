"use client"

import { useState } from "react"
import { TestimonialCard, Testimonial } from "./testimonial-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials: Testimonial[] = [
    {
        name: "Clifford Solon",
        title: "Floor Support",
        company: "Concentrix",
        image: "/placeholder.svg?height=80&width=80&text=CS",
        quote:
            "A fun guy to work with; this guy knows his thing! He embraces challenges and is very consistent. Good luck in your career, Vin. As an aspiring Software Engineer, I know you can achieve great heights.",
    },
    {
        name: "Jane Doe",
        title: "Project Manager",
        company: "Tech Solutions",
        image: "/placeholder.svg?height=80&width=80&text=JD",
        quote:
            "Vin is a highly skilled developer who consistently delivers high-quality work. His attention to detail and problem-solving abilities are top-notch.",
    },
    {
        name: "John Smith",
        title: "Lead Designer",
        company: "Creative Co",
        image: "/placeholder.svg?height=80&width=80&text=JS",
        quote:
            "Working with Vin was a pleasure. He is a great communicator and a team player. He is able to translate complex designs into functional and beautiful code.",
    },
]

export function TestimonialsCarousel() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }
    
      const prevTestimonial = () => {
        setCurrentTestimonial(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length,
        )
      }

    return (
        <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative h-[320px] perspective-1000">
          {testimonials.map((testimonial, index) => {
            const offset = index - currentTestimonial
            const isVisible = Math.abs(offset) <= 1
            const isActive = index === currentTestimonial
            const isAdjacent = Math.abs(offset) === 1

            return (
              <div
                key={index}
                className="absolute w-full h-full transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(${offset * 100}%) translateX(${offset * 20}px) scale(${isActive ? 1 : 0.9})`,
                  opacity: isVisible ? 1 : 0,
                  zIndex: testimonials.length - Math.abs(offset),
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  isActive={isActive}
                  isAdjacent={isAdjacent}
                />
              </div>
            )
          })}
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-purple-600/50 hover:bg-purple-600 text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentTestimonial === index
                    ? "bg-purple-500"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-purple-600/50 hover:bg-purple-600 text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    )
} 