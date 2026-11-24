import blogData from '@/content/blog-posts.json'

// Required so the handler is prerendered at build time (static export)
export const dynamic = 'force-static'

const SITE_URL = 'https://www.synepho.com'
const FEED_TITLE = 'John Xanthopoulos - Blog'
const FEED_DESCRIPTION =
  'Insights on technology leadership, cloud architecture, and AI-powered development.'

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// publishedDate is YYYY-MM-DD; RSS requires an RFC 822 date
function toRfc822(date: string): string {
  return new Date(`${date}T12:00:00Z`).toUTCString()
}

export async function GET() {
  const posts = [...blogData.posts].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}/`
      const categories = [post.category, ...post.tags]
        .map((c) => `      <category>${escapeXml(c)}</category>`)
        .join('\n')

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${toRfc822(post.publishedDate)}</pubDate>
      <dc:creator>${escapeXml(post.author)}</dc:creator>
      <description>${escapeXml(post.excerpt)}</description>
${categories}
    </item>`
    })
    .join('\n')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/blog/</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${toRfc822(posts[0].publishedDate)}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(feed, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
