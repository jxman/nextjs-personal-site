import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export function getMarkdownContent(filename: string) {
  const filePath = path.join(process.cwd(), 'src', 'content', filename)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const html = marked.parse(content) as string

  return {
    frontmatter: data,
    html,
  }
}
