import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, BookOpen, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getBlogPosts } from "@/lib/blog"

export default function Home() {
  const recentPosts = getBlogPosts().slice(0, 2)

  const skills = [
    "Technical Writing",
    "Content Strategy",
    "SEO/GEO",
    "Documentation",
    "Open Source",
    "Python",
    "LLM Inference",
    "Kubernetes",
  ]

  const favoriteBooks = [
    { title: "The Sign of the Four", author: "Arthur Conan Doyle" },
    { title: "Murder on the Orient Express", author: "Agatha Christie" },
    { title: "The Greek Coffin Mystery", author: "Ellery Queen" },
    { title: "The Hollow Man", author: "John Dickson Carr" },
    { title: "And Then There Were None", author: "Agatha Christie" },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-border">
            <Image src="/avatar.jpg" alt="Sherlock Xu profile photo" fill className="object-cover" priority />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance">Hi, I'm Sherlock</h1>
            <p className="text-xl text-muted-foreground mb-6 text-pretty">Information Architect & Technical Writer @BentoML 🍱</p>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              I'm a technical writer and content strategist focused on AI infrastructure, LLM inference, and open-source technologies.
              I transform dense technical concepts into clear, high-impact content (e.g., docs, blog posts, case studies) with smart SEO/GEO strategies.
            </p>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:sherlockxu07@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/Sherlock113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/sherlock-xu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://x.com/SherlockXu1859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Twitter className="w-4 h-4" />
                  X/Twitter
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://dzone.com/users/4416676/sherlock113.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  DZone
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://medium.com/@sherlockxu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Medium
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 bg-secondary/10 border border-border rounded-full text-sm font-medium hover:bg-secondary/20 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Recent Writing</h2>
          <Button variant="ghost" asChild>
            <Link href="/blog">View all posts →</Link>
          </Button>
        </div>

        <div className="grid gap-6">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <Card key={post.slug} className="p-6 hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 hover:text-secondary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">{post.description}</p>
                      <time className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                </Link>
              </Card>
            ))
          ) : (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">
                No blog posts yet. Add your first post in the{" "}
                <code className="bg-muted px-2 py-1 rounded">content/blog</code> directory!
              </p>
            </Card>
          )}
        </div>
      </section>

      {/* Favorite Detective Books Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Favorite Detective Books</h2>
        <p className="text-lg leading-relaxed text-foreground/90 mb-6">
           🕵️‍♂️ I'm a big fan of detective novels! Here are some of my favorite books:
            </p>
        <div className="grid gap-4">
          {favoriteBooks.map((book, index) => (
            <Card key={index} className="p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                  <p className="text-muted-foreground text-sm">{book.author}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sherlock Xu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
