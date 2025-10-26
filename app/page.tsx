import { getPersonalInfo, getFeaturedProjects, getSkills, getFeaturedTestimonials } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default async function Home() {
  const [personalInfo, projects, skills, testimonials] = await Promise.all([
    getPersonalInfo(),
    getFeaturedProjects(),
    getSkills(),
    getFeaturedTestimonials(),
  ])

  return (
    <div>
      <Hero personalInfo={personalInfo} />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <TestimonialsSection testimonials={testimonials} />
    </div>
  )
}