import { Testimonial } from '@/types'
import { Star } from 'lucide-react'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
        What People Say
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => {
          const authorImage = testimonial.metadata?.author_image
          const rating = testimonial.metadata?.rating || 5

          return (
            <div
              key={testimonial.id}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                {authorImage && (
                  <img
                    src={`${authorImage.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata?.author_name || ''}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <div className="font-semibold">
                    {testimonial.metadata?.author_name || ''}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.metadata?.author_title || ''}
                  </div>
                </div>
              </div>

              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
                  />
                ))}
              </div>

              <p className="text-gray-300">
                "{testimonial.metadata?.quote || ''}"
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}