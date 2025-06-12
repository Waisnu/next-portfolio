import Image from "next/image"
import { Heart, MessageCircle, Share } from "lucide-react"

export type Testimonial = {
    name: string;
    title: string;
    company: string;
    image: string;
    quote: string;
    handle?: string;
    platform?: string;
    timestamp?: string;
};

export function TestimonialCard({ testimonial, isActive, isAdjacent = false }: { testimonial: Testimonial; isActive: boolean; isAdjacent?: boolean }) {
    return (
        <div
            className={`testimonial-card relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl transition-all duration-500 transform-gpu overflow-hidden
                ${isActive ? "scale-100 opacity-100 z-10" : "scale-90 opacity-70"}
                ${isAdjacent ? "lg:opacity-80 lg:scale-95" : "lg:opacity-70 lg:scale-90"}
            `}
        >
            {/* Social Media Header */}
            <div className="p-4 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full border-2 border-blue-100"
                        />
                        {/* Verification Badge */}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h3>
                            <span className="text-gray-500 text-sm">•</span>
                            <span className="text-gray-500 text-sm">{testimonial.timestamp || "2d"}</span>
                        </div>
                        <p className="text-gray-600 text-xs">{testimonial.title} at {testimonial.company}</p>
                        {testimonial.handle && (
                            <p className="text-blue-500 text-xs">@{testimonial.handle}</p>
                        )}
                    </div>
                    <div className="text-gray-400">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Post Content */}
            <div className="p-4">
                <p className="text-gray-800 text-sm leading-relaxed mb-4">
                    "{testimonial.quote}"
                </p>
                
                {/* Engagement Buttons */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors group">
                        <Heart className="w-4 h-4 group-hover:fill-current" />
                        <span className="text-xs font-medium">42</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs font-medium">8</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                        <Share className="w-4 h-4" />
                        <span className="text-xs font-medium">3</span>
                    </button>
                </div>
            </div>

            {/* Platform Badge */}
            {testimonial.platform && (
                <div className="absolute top-2 right-2">
                    <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {testimonial.platform}
                    </div>
                </div>
            )}
        </div>
    )
} 