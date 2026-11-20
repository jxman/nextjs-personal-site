import fs from 'fs'
import path from 'path'
import { marked } from 'marked'

export function getMarkdownContent(filename: string) {
  const filePath = path.join(process.cwd(), 'src', 'content', filename)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const html = marked.parse(fileContents) as string

  return { html }
}
