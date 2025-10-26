import { BlogPost } from '@/types'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const featuredImage = post.metadata?.featured_image
  const formattedDate = post.created_at 
    ? new Date(post.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : ''

  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition h-full">
        {featuredImage && (
          <img
            src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        )}
        
        <div className="p-6">
          {post.metadata?.category && (
            <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm mb-3">
              {post.metadata.category.charAt(0).toUpperCase() + post.metadata.category.slice(1)}
            </span>
          )}

          <h3 className="text-xl font-bold mb-2 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-400 mb-4 line-clamp-3">
            {post.metadata?.excerpt || ''}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            {formattedDate && (
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {formattedDate}
              </div>
            )}
            {post.metadata?.reading_time && (
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {post.metadata.reading_time} min
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}