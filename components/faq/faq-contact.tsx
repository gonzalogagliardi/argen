"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FaqContact() {
  const { t } = useLanguage()
  const s = t.faq

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">{s.contactTitle}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{s.contactDesc}</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground">
            <Link href="/contacto">{s.contactBtn}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
