import Image from "next/image"
import { Quote } from "lucide-react"

export type Testimonial = {
    name: string;
    title: string;
    company: string;
    image: string;
    quote: string;
};

export function TestimonialCard({ testimonial, isActive, isAdjacent = false }: { testimonial: Testimonial; isActive: boolean; isAdjacent?: boolean }) {
    return (
        <div
        className={`testimonial-card relative w-full h-full p-8 bg-[#111] rounded-xl shadow-lg transition-all duration-500 transform-gpu
          ${isActive ? "scale-100 opacity-100 z-10" : "scale-90 opacity-50"}
          ${isAdjacent ? "lg:opacity-70 lg:scale-95" : "lg:opacity-50 lg:scale-90"}
        `}
      >
        <Quote className="absolute top-6 right-6 h-12 w-12 text-purple-500/20" />
        <div className="flex items-center mb-6">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="ml-4">
            <p className="font-bold text-white">{testimonial.name}</p>
            <p className="text-sm text-gray-400">{testimonial.title}, {testimonial.company}</p>
          </div>
        </div>
        <p className="text-gray-300 italic">"{testimonial.quote}"</p>
      </div>
    )
} 