import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for Cosmic SDK errors
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Get personal info (singleton)
export async function getPersonalInfo() {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'personal-info',
      })
      .props(['id', 'title', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch personal info')
  }
}

// Get all projects
export async function getProjects() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'projects',
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects.sort((a, b) => {
      const orderA = a.metadata?.display_order ?? 999
      const orderB = b.metadata?.display_order ?? 999
      return orderA - orderB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch projects')
  }
}

// Get featured projects
export async function getFeaturedProjects() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'projects',
        'metadata.is_featured': true,
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects.sort((a, b) => {
      const orderA = a.metadata?.display_order ?? 999
      const orderB = b.metadata?.display_order ?? 999
      return orderA - orderB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch featured projects')
  }
}

// Get project by slug
export async function getProjectBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'projects',
        slug,
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch project')
  }
}

// Get all skills
export async function getSkills() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'skills',
      })
      .props(['id', 'title', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch skills')
  }
}

// Get work experience
export async function getWorkExperience() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'work-experience',
      })
      .props(['id', 'title', 'metadata'])
      .depth(1)
    
    return response.objects.sort((a, b) => {
      const orderA = a.metadata?.display_order ?? 999
      const orderB = b.metadata?.display_order ?? 999
      return orderA - orderB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch work experience')
  }
}

// Get testimonials
export async function getTestimonials() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'testimonials',
      })
      .props(['id', 'title', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch testimonials')
  }
}

// Get featured testimonials
export async function getFeaturedTestimonials() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'testimonials',
        'metadata.is_featured': true,
      })
      .props(['id', 'title', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch featured testimonials')
  }
}

// Get blog posts
export async function getBlogPosts() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'blog-posts',
      })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
    
    return response.objects.sort((a, b) => {
      const dateA = new Date(a.created_at || '').getTime()
      const dateB = new Date(b.created_at || '').getTime()
      return dateB - dateA
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch blog posts')
  }
}

// Get blog post by slug
export async function getBlogPostBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'blog-posts',
        slug,
      })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
    
    return response.object
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch blog post')
  }
}