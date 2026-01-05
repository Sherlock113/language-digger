import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  content: string
  readingTime?: string
}

// Ensure the content directory exists
function ensureContentDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }
}

export function getBlogPosts(): BlogPost[] {
  ensureContentDirectory()

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        // Calculate reading time (rough estimate: 200 words per minute)
        const wordCount = content.split(/\s+/).length
        const readingTime = Math.ceil(wordCount / 200)

        return {
          slug,
          title: data.title || "Untitled",
          date: data.date || new Date().toISOString(),
          description: data.description || "",
          content: marked.parse(content) as string,
          readingTime: `${readingTime} min read`,
        } as BlogPost
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return allPostsData
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureContentDirectory()

  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Calculate reading time
    const wordCount = content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200)

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      description: data.description || "",
      content: marked.parse(content) as string,
      readingTime: `${readingTime} min read`,
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}
