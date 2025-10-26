// app/projects/[slug]/page.tsx
import { getProjectBySlug, getProjects } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const featuredImage = project.metadata?.featured_image

  return (
    <div className="container mx-auto px-4 py-16">
      <Link 
        href="/projects" 
        className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8"
      >
        ← Back to Projects
      </Link>

      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          {project.title}
        </h1>

        {featuredImage && (
          <img
            src={`${featuredImage.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        )}

        {project.metadata?.tech_stack && project.metadata.tech_stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.metadata.tech_stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4 mb-8">
          {project.metadata?.live_url && (
            <a
              href={project.metadata.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          )}
          {project.metadata?.repository_url && (
            <a
              href={project.metadata.repository_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition"
            >
              <Github size={20} />
              View Code
            </a>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown>
            {project.metadata?.full_description || project.metadata?.short_description || ''}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}