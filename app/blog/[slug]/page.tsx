// app/blog/[slug]/page.tsx
import { getBlogPostBySlug, getBlogPosts } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const featuredImage = post.metadata?.featured_image
  const formattedDate = post.created_at 
    ? new Date(post.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8"
      >
        ← Back to Blog
      </Link>

      <article>
        {post.metadata?.category && (
          <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm mb-4">
            {post.metadata.category.charAt(0).toUpperCase() + post.metadata.category.slice(1)}
          </span>
        )}

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-gray-400 mb-8">
          {formattedDate && (
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              {formattedDate}
            </div>
          )}
          {post.metadata?.reading_time && (
            <div className="flex items-center gap-2">
              <Clock size={18} />
              {post.metadata.reading_time} min read
            </div>
          )}
        </div>

        {featuredImage && (
          <img
            src={`${featuredImage.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        )}

        {post.metadata?.tags && post.metadata.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.metadata.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown>
            {post.metadata?.content || ''}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}