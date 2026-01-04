import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getBlogPosts } from "@/lib/blog"

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const posts = getBlogPosts()

  const currentPage = Number(searchParams.page) || 1
  const postsPerPage = 10
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const paginatedPosts = posts.slice(startIndex, endIndex)

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Just some random ideas and thoughts 😁.
        </p>
      </div>

      <div className="grid gap-6">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post) => (
            <Card key={post.slug} className="p-6 hover:shadow-lg transition-shadow">
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-col gap-3">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2 hover:text-secondary transition-colors">{post.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{post.description}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                </div>
              </Link>
            </Card>
          ))
        ) : (
          <Card className="p-12 text-center">
            <h3 className="text-xl font-semibold mb-3">No blog posts yet</h3>
            <p className="text-muted-foreground mb-6">
              Add your first post in the <code className="bg-muted px-2 py-1 rounded">content/blog</code> directory
            </p>
            <p className="text-sm text-muted-foreground">
              Create a new markdown file with frontmatter like:
              <br />
              <code className="text-xs">title, date, description</code>
            </p>
          </Card>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <Button variant="outline" asChild disabled={currentPage === 1}>
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            >
              ← Previous
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button key={page} variant={currentPage === page ? "default" : "outline"} size="sm" asChild>
                <Link href={`/blog?page=${page}`}>{page}</Link>
              </Button>
            ))}
          </div>

          <Button variant="outline" asChild disabled={currentPage === totalPages}>
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            >
              Next →
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
