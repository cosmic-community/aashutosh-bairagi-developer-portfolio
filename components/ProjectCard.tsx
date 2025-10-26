import { Project } from '@/types'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const featuredImage = project.metadata?.featured_image

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition">
      {featuredImage && (
        <img
          src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">
          {project.metadata?.short_description || ''}
        </p>

        {project.metadata?.tech_stack && project.metadata.tech_stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.metadata.tech_stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-800 text-blue-400 rounded text-sm"
              >
                {tech}
              </span>
            ))}
            {project.metadata.tech_stack.length > 3 && (
              <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-sm">
                +{project.metadata.tech_stack.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
          >
            View Details
          </Link>
          
          {project.metadata?.live_url && (
            <a
              href={project.metadata.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded transition"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
          
          {project.metadata?.repository_url && (
            <a
              href={project.metadata.repository_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}