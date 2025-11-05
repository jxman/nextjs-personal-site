import type { Metadata } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import BlogCard from '@/components/BlogCard'
import blogData from '@/content/blog-posts.json'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Technology insights, development practices, and my journey with AI-powered development. Exploring AWS, React, Terraform, and modern software engineering.',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogData.posts].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )

  // Get featured post (first one marked as featured)
  const featuredPost = sortedPosts.find((post) => post.featured)

  // Get remaining posts
  const regularPosts = sortedPosts.filter((post) => !post.featured)

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-4">Blog</h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Insights on technology leadership, development practices, and my
            journey with AI-powered development
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-base-content mb-6">
              Featured Post
            </h2>
            <BlogCard
              slug={featuredPost.slug}
              title={featuredPost.title}
              excerpt={featuredPost.excerpt}
              publishedDate={featuredPost.publishedDate}
              readingTime={featuredPost.readingTime}
              tags={featuredPost.tags}
              featured={true}
              thumbnail={featuredPost.thumbnail}
              category={featuredPost.category}
            />
          </div>
        )}

        {/* All Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-base-content mb-6">
              {featuredPost ? 'More Articles' : 'All Posts'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  publishedDate={post.publishedDate}
                  readingTime={post.readingTime}
                  tags={post.tags}
                  thumbnail={post.thumbnail}
                  category={post.category}
                />
              ))}
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-base-content/70 mb-6">
            Get notified when I publish new articles about technology
            leadership and development.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Me for Updates
          </Link>
        </div>
      </div>
    </Layout>
  )
}
