import type { Metadata } from "next"
import Link from "next/link"
import { EXPERIENCES } from "@/lib/experiencias"
import { ArticleClient } from "@/components/experiences/article-client"

export const dynamicParams = false

const ARTICLES = EXPERIENCES.filter((e) => e.type === "article")

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = ARTICLES.find((a) => a.slug === slug)
  return {
    title: post ? `${post.title} | ARGENGOAL` : "Experiencia | ARGENGOAL",
    description: post?.description ?? "Experiencias de fútbol en Argentina",
  }
}

export default async function ExperienceArticlePage({ params }: Props) {
  const { slug } = await params
  const post = ARTICLES.find((a) => a.slug === slug)

  if (!post) {
    return (
      <main className="py-20">
        <div className="container mx-auto px-4">
          <p>No existe este artículo.</p>
          <Link href="/experiencias" className="underline">
            Volver
          </Link>
        </div>
      </main>
    )
  }

  return <ArticleClient post={post} />
}
