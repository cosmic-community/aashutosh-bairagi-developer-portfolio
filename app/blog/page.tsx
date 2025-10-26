import { getBlogPosts } from '@/lib/cosmic'
import BlogCard from '@/components/BlogCard'

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center gradient-text">
        Blog
      </h1>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No blog posts found. Add some posts in your Cosmic dashboard!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}