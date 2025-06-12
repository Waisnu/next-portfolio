"use client"

import { TestimonialCard, Testimonial } from "./testimonial-card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SketchArrow, SketchCircle, SketchHeart, SketchSparkles } from "@/components/ui/animated-doodles"

const testimonials: Testimonial[] = [
    {
        name: "Clifford Solon",
        title: "Floor Support",
        company: "Concentrix",
        handle: "clifford_tech",
        platform: "LinkedIn",
        timestamp: "1w",
        image: "/placeholder.svg?height=80&width=80&text=CS",
        quote:
            "A fun guy to work with; this guy knows his thing! He embraces challenges and is very consistent. Good luck in your career, Vin. As an aspiring Software Engineer, I know you can achieve great heights.",
    },
    {
        name: "Sarah Chen",
        title: "Senior Product Manager",
        company: "TechFlow Inc",
        handle: "sarahc_pm",
        platform: "Twitter",
        timestamp: "3d",
        image: "/placeholder.svg?height=80&width=80&text=SC",
        quote:
            "Vin's technical expertise and creative problem-solving approach made our project launch seamless. His ability to translate complex requirements into elegant solutions is remarkable. Highly recommend!",
    },
    {
        name: "Marcus Rodriguez",
        title: "Lead Designer",
        company: "Creative Studios",
        handle: "marcus_designs",
        platform: "Dribbble",
        timestamp: "1d",
        image: "/placeholder.svg?height=80&width=80&text=MR",
        quote:
            "Working with Vin was an absolute pleasure! His attention to detail and collaborative spirit brought our design vision to life perfectly. The final product exceeded all expectations.",
    },
    {
        name: "Dr. Amanda Liu",
        title: "Tech Lead",
        company: "Innovation Labs",
        handle: "amanda_codes",
        platform: "GitHub",
        timestamp: "5d",
        image: "/placeholder.svg?height=80&width=80&text=AL",
        quote:
            "Vin's code quality and architectural thinking are top-notch. He delivered clean, maintainable solutions while meeting tight deadlines. A true professional and team player.",
    },
    {
        name: "James Thompson",
        title: "Startup Founder",
        company: "NextGen Solutions",
        handle: "james_builds",
        platform: "LinkedIn",
        timestamp: "2w",
        image: "/placeholder.svg?height=80&width=80&text=JT",
        quote:
            "Vin helped us build our MVP from scratch and his expertise was invaluable. His communication skills and technical depth made the entire development process smooth and enjoyable.",
    }
]

export function TestimonialsCarousel() {
    return (
        <div className="relative w-full max-w-6xl mx-auto">
            {/* Animated Doodles */}
            <SketchArrow className="absolute -top-8 left-4 z-0" />
            <SketchCircle className="absolute top-12 -right-6 z-0" />
            <SketchHeart className="absolute -bottom-4 left-8 z-0" />
            <SketchSparkles className="absolute top-0 right-1/3 z-0" />

            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="relative z-10"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="p-2">
                                <TestimonialCard
                                    testimonial={testimonial}
                                    isActive={true}
                                    isAdjacent={false}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-white/90 hover:bg-white border-gray-200 text-gray-900 hover:text-gray-900" />
                <CarouselNext className="bg-white/90 hover:bg-white border-gray-200 text-gray-900 hover:text-gray-900" />
            </Carousel>

            {/* Additional Floating Doodles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-12 opacity-30">
                    <SketchSparkles />
                </div>
                <div className="absolute bottom-1/4 -right-12 opacity-40">
                    <SketchArrow />
                </div>
            </div>
        </div>
    )
} 