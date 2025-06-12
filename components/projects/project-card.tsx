import { Github, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    live?: string;
    github?: string;
};


export function ProjectCard({ project }: { project: Project }) {
    return (
        <div
            className="project-card-container group w-full"
        >
            <div
                className="project-card relative bg-[#111] border border-purple-900/50 rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-purple-400/80 hover:shadow-2xl hover:shadow-purple-500/20"
            >
                <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm flex-grow">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs font-mono rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="p-6 pt-0 mt-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        {project.github && (
                            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                                <Github size={20} />
                            </Link>
                        )}
                        {project.live && (
                            <Link href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                                <Globe size={20} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
} 