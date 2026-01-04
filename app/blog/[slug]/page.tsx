import { notFound } from "next/navigation"
import { getBlogPosts, getPostBySlug } from "@/lib/blog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} - Sherlock Xu`,
    description: post.description,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Button variant="ghost" size="sm" asChild className="mb-8">
        <Link href="/blog" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </Button>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.readingTime && (
            <>
              <span>•</span>
              <span>{post.readingTime}</span>
            </>
          )}
        </div>
      </header>

      <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
