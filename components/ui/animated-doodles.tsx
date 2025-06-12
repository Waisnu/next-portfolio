"use client"

import { useEffect, useState } from "react"

export function FloatingDoodle({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay)
        return () => clearTimeout(timer)
    }, [delay])

    return (
        <div 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
            style={{
                animation: `floatingDoodle 6s ease-in-out infinite`,
                animationDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    )
}

export function SketchArrow({ className = "" }: { className?: string }) {
    return (
        <FloatingDoodle className={className}>
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-yellow-400">
                <path 
                    d="M5 20 Q30 5 55 20 Q45 25 50 30 M50 30 L45 35 M50 30 L55 25" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="2,3"
                    className="animate-pulse"
                />
            </svg>
        </FloatingDoodle>
    )
}

export function SketchCircle({ className = "" }: { className?: string }) {
    return (
        <FloatingDoodle className={className} delay={500}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-red-400">
                <circle 
                    cx="25" 
                    cy="25" 
                    r="20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="3,2"
                    className="animate-spin"
                    style={{ animationDuration: '8s' }}
                />
            </svg>
        </FloatingDoodle>
    )
}

export function SketchStar({ className = "" }: { className?: string }) {
    return (
        <FloatingDoodle className={className} delay={1000}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white/60">
                <path 
                    d="M20 5 L22 15 L32 12 L25 20 L35 25 L22 25 L20 35 L18 25 L5 25 L15 20 L8 12 L18 15 Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinejoin="round"
                    strokeDasharray="1,2"
                />
            </svg>
        </FloatingDoodle>
    )
}

export function SketchSquiggle({ className = "" }: { className?: string }) {
    return (
        <FloatingDoodle className={className} delay={1500}>
            <svg width="80" height="30" viewBox="0 0 80 30" fill="none" className="text-blue-400">
                <path 
                    d="M5 15 Q20 5 35 15 T65 15" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="4,2"
                />
            </svg>
        </FloatingDoodle>
    )
}

export function SketchHeart({ className = "" }: { className?: string }) {
    return (
        <FloatingDoodle className={className} delay={2000}>
            <svg width="35" height="32" viewBox="0 0 35 32" fill="none" className="text-pink-400">
                <path 
                    d="M17.5 30 C10 25 2 18 2 10 C2 6 5 3 9 3 C12 3 15 5 17.5 8 C20 5 23 3 26 3 C30 3 33 6 33 10 C33 18 25 25 17.5 30 Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinejoin="round"
                    strokeDasharray="2,1"
                    className="animate-pulse"
                />
            </svg>
        </FloatingDoodle>
    )
}

export function SketchSparkles({ className = "" }: { className?: string }) {
    return (
        <FloatingDoodle className={className} delay={800}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-yellow-300">
                <g className="animate-spin" style={{ animationDuration: '4s' }}>
                    <path d="M30 10 L32 20 L42 18 L34 25 L40 35 L30 30 L20 35 L26 25 L18 18 L28 20 Z" 
                          stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="1,1"/>
                    <circle cx="15" cy="45" r="2" fill="currentColor" className="animate-pulse"/>
                    <circle cx="45" cy="15" r="1.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }}/>
                    <circle cx="50" cy="45" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1s' }}/>
                </g>
            </svg>
        </FloatingDoodle>
    )
} 