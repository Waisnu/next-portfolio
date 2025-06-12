"use client"

import { useState } from "react"
import {
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
} from "lucide-react"

const techCategories = {
    "Front-end": {
      icon: <Triangle className="h-8 w-8 text-purple-400" />,
      description: "Crafting beautiful and responsive user interfaces.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Anime.js",
      ],
    },
    "Back-end": {
      icon: <Square className="h-8 w-8 text-green-400" />,
      description: "Building robust and scalable server-side applications.",
      technologies: ["Node.js", "Express", "Python", "Django", "Flask"],
    },
    Databases: {
      icon: <Circle className="h-8 w-8 text-blue-400" />,
      description: "Managing and modeling data with efficiency.",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
    },
    "DevOps & Cloud": {
      icon: <Hexagon className="h-8 w-8 text-orange-400" />,
      description: "Automating deployments and managing infrastructure.",
      technologies: ["Docker", "AWS", "GCP", "Vercel", "Git"],
    },
}

export function TechStack() {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null)

    return (
        <section id="tech-stack" className="py-20 md:py-32 bg-[#050505] text-white">
        <div className="container px-4">
          <div className="animate-on-scroll text-center mb-12">
            <h2 className="animate-item text-4xl md:text-5xl font-bold tracking-tight">
              My Tech Stack
            </h2>
            <p className="animate-item mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              A collection of technologies I use to build powerful and engaging
              web experiences.
            </p>
          </div>
          <div className="animate-on-scroll grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techCategories).map(
              ([category, { icon, description, technologies }]) => (
                <div
                  key={category}
                  className="animate-item bg-[#111] p-6 rounded-lg border border-transparent hover:border-purple-500/50 transition-all duration-300"
                  onMouseEnter={() => setHoveredTech(category)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {icon}
                    <h3 className="text-xl font-bold">{category}</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 h-10">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    )
} 