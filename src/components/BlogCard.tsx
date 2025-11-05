import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  publishedDate: string
  readingTime: number
  tags: string[]
  featured?: boolean
  thumbnail?: string
  category?: string
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  publishedDate,
  readingTime,
  tags,
  featured = false,
  thumbnail,
  category,
}: BlogCardProps) {
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <article className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-full">
      <div className="card-body p-0">
        {/* Thumbnail Image */}
        {thumbnail && (
          <div className="relative w-full h-48 rounded-t-2xl overflow-hidden bg-base-200">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}

        <div className="p-6">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {featured && <div className="badge badge-primary">Featured</div>}
            {category && (
              <div className="badge badge-outline">{category}</div>
            )}
            {tags.slice(0, 2).map((tag) => (
              <div key={tag} className="badge badge-ghost">
                {tag}
              </div>
            ))}
          </div>

          {/* Title */}
          <h3
            className={`card-title mb-3 line-clamp-2 hover:text-primary transition-colors ${
              featured ? 'text-2xl' : 'text-xl'
            }`}
          >
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="text-base-content/70 mb-4 leading-relaxed line-clamp-3">
            {excerpt}
          </p>

          {/* Metadata and CTA */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-base-300">
            <div className="flex items-center gap-3 text-sm text-base-content/60">
              <time dateTime={publishedDate}>{formatDate(publishedDate)}</time>
              <span>•</span>
              <span>{readingTime} min read</span>
            </div>

            <Link
              href={`/blog/${slug}`}
              className="btn btn-ghost btn-sm text-primary hover:text-primary-focus"
              aria-label={`Read ${title}`}
            >
              Read
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
