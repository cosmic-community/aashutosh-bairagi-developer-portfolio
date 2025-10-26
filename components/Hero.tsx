import { PersonalInfo } from '@/types'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

interface HeroProps {
  personalInfo: PersonalInfo | null
}

export default function Hero({ personalInfo }: HeroProps) {
  const profilePicture = personalInfo?.metadata?.profile_picture
  const socialLinks = personalInfo?.metadata?.social_links || []

  return (
    <section className="container mx-auto px-4 pt-32 pb-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {profilePicture && (
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 flex-shrink-0">
            <img
              src={`${profilePicture.imgix_url}?w=512&h=512&fit=crop&auto=format,compress`}
              alt={personalInfo?.metadata?.name || 'Profile'}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            {personalInfo?.metadata?.name || 'Aashutosh Bairagi'}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-6">
            {personalInfo?.metadata?.headline || 'Full-Stack Developer | MERN & Supabase Expert'}
          </p>
          
          <div className="flex justify-center md:justify-start gap-4 mb-8">
            {socialLinks.map((link) => {
              const platform = link.platform?.toLowerCase()
              let Icon = Mail
              
              if (platform?.includes('github')) Icon = Github
              else if (platform?.includes('linkedin')) Icon = Linkedin
              
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
                  aria-label={link.platform}
                >
                  <Icon size={24} />
                </a>
              )
            })}
            
            {personalInfo?.metadata?.email && (
              <a
                href={`mailto:${personalInfo.metadata.email}`}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            )}
            
            {personalInfo?.metadata?.resume && (
              <a
                href={personalInfo.metadata.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                aria-label="Resume"
              >
                <FileText size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}