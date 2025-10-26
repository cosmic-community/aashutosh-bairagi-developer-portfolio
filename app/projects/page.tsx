import { getProjects } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center gradient-text">
        All Projects
      </h1>
      
      {projects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No projects found. Add some projects in your Cosmic dashboard!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}