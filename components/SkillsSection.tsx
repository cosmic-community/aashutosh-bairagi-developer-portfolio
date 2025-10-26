import { Skill } from '@/types'

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  if (skills.length === 0) {
    return null
  }

  // Group skills by category
  const skillsByCategory: Record<string, Skill[]> = {}
  skills.forEach((skill) => {
    const category = skill.metadata?.skill_category || 'other'
    if (!skillsByCategory[category]) {
      skillsByCategory[category] = []
    }
    skillsByCategory[category].push(skill)
  })

  const categoryOrder = ['frontend', 'backend', 'database', 'tools', 'other']
  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools',
    other: 'Other',
  }

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-900/50">
      <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
        Skills & Technologies
      </h2>
      
      <div className="grid gap-8">
        {categoryOrder
          .filter((categoryKey) => {
            const categorySkills = skillsByCategory[categoryKey]
            return categorySkills && categorySkills.length > 0
          })
          .map((categoryKey) => {
            const categorySkills = skillsByCategory[categoryKey]
            
            if (!categorySkills || categorySkills.length === 0) {
              return null
            }
            
            return (
              <div key={categoryKey}>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                  {categoryLabels[categoryKey]}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition"
                    >
                      {skill.metadata?.icon_identifier && (
                        <div className="text-3xl mb-2">
                          {skill.metadata.icon_identifier}
                        </div>
                      )}
                      <div className="font-medium">
                        {skill.metadata?.skill_name || skill.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}