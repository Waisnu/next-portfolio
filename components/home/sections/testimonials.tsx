import { TestimonialsCarousel } from "../testimonials-carousel"

export function Testimonials() {
    return (
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
    )
} 