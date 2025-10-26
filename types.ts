// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Personal Info (Singleton)
export interface PersonalInfo extends CosmicObject {
  type: 'personal-info'
  metadata: {
    name?: string
    email?: string
    headline?: string
    bio?: string
    profile_picture?: {
      url: string
      imgix_url: string
    }
    resume?: {
      url: string
      imgix_url: string
    }
    social_links?: Array<{
      platform: string
      url: string
    }>
  }
}

// Project
export interface Project extends CosmicObject {
  type: 'projects'
  metadata: {
    title?: string
    featured_image?: {
      url: string
      imgix_url: string
    }
    short_description?: string
    full_description?: string
    tech_stack?: string[]
    live_url?: string
    repository_url?: string
    gallery_images?: Array<{
      url: string
      imgix_url: string
      caption?: string
    }>
    is_featured?: boolean
    display_order?: number
  }
}

// Skill
export interface Skill extends CosmicObject {
  type: 'skills'
  metadata: {
    skill_name?: string
    skill_category?: 'frontend' | 'backend' | 'database' | 'tools' | 'other'
    icon_identifier?: string
    proficiency_level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  }
}

// Work Experience
export interface WorkExperience extends CosmicObject {
  type: 'work-experience'
  metadata: {
    job_title?: string
    company_name?: string
    company_url?: string
    company_logo?: {
      url: string
      imgix_url: string
    }
    start_date?: string
    end_date?: string
    is_current_job?: boolean
    description?: string
    display_order?: number
  }
}

// Testimonial
export interface Testimonial extends CosmicObject {
  type: 'testimonials'
  metadata: {
    author_name?: string
    author_title?: string
    author_image?: {
      url: string
      imgix_url: string
    }
    quote?: string
    rating?: number
    is_featured?: boolean
  }
}

// Blog Post
export interface BlogPost extends CosmicObject {
  type: 'blog-posts'
  metadata: {
    title?: string
    featured_image?: {
      url: string
      imgix_url: string
    }
    excerpt?: string
    content?: string
    category?: 'tutorial' | 'case-study' | 'opinion' | 'news' | 'guide'
    tags?: string[]
    reading_time?: number
    is_featured?: boolean
  }
}

// API Response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit: number
  skip: number
}

// Type guards
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects'
}

export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type === 'skills'
}

export function isWorkExperience(obj: CosmicObject): obj is WorkExperience {
  return obj.type === 'work-experience'
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials'
}

export function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type === 'blog-posts'
}