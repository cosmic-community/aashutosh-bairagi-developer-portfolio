import { Project } from '@/types'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (projects.length === 0) {
    return null
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/projects" 
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          View All Projects
        </Link>
      </div>
    </section>
  )
}