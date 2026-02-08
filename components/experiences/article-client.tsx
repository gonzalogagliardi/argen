"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, X } from "lucide-react"
import Link from "next/link"

type Article = {
  title: string
  date: string
  readTime: string
  image: string
  description: string
  content?: string[]
  gallery?: string[]
}

export function ArticleClient({ post }: { post: Article }) {
  const paragraphs = useMemo(
    () => (post.content?.length ? post.content : [post.description]),
    [post.content, post.description]
  )

  const gallery = post.gallery ?? []
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const hasGallery = gallery.length > 0

  function openAt(i: number) {
    setIndex(i)
    setOpen(true)
  }

  function close() {
    setOpen(false)
  }

  function prev() {
    setIndex((i) => (i - 1 + gallery.length) % gallery.length)
  }

  function next() {
    setIndex((i) => (i + 1) % gallery.length)
  }

  useEffect(() => {
    if (!open) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, gallery.length])

  return (
    <main className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/experiencias">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Experiencias
            </Link>
          </Button>

          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {post.title}
            </h1>
          </div>

          {/* Portada */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-10 bg-muted">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Texto */}
          <div className="prose prose-lg max-w-none mb-12">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                {p}
              </p>
            ))}
          </div>

          {/* Galería con miniaturas */}
          {hasGallery && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-6">Galería</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => openAt(i)}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted group"
                    aria-label={`Abrir imagen ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`${post.title} - foto ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Lightbox / carrusel */}
          {open && hasGallery && (
            <div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              onClick={close}
            >
              <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={close}
                  className="absolute -top-12 right-0 text-white/90 hover:text-white"
                  aria-label="Cerrar"
                  type="button"
                >
                  <X className="w-7 h-7" />
                </button>

                <div className="relative rounded-lg overflow-hidden bg-black">
                  <img
                    src={gallery[index]}
                    alt={`${post.title} - foto ${index + 1}`}
                    className="w-full max-h-[80vh] object-contain"
                  />

                  {gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
                        aria-label="Anterior"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        type="button"
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
                        aria-label="Siguiente"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>

                <div className="mt-3 text-center text-white/80 text-sm">
                  {index + 1} / {gallery.length}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
