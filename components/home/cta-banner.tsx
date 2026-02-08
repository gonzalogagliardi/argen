import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/argentina-football-players-celebrating-team-spirit.jpg"
          alt="Football Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/88 to-primary/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance">
            ¿Listo Para Vivir la Experiencia ARGENGOAL?
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-12 text-pretty leading-relaxed">
            Da el primer paso hoy. Tu viaje al corazón del fútbol argentino comienza aquí.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/95 text-lg px-12 py-7 h-auto shadow-2xl font-semibold"
            >
              <Link href="/contacto">
                Empezar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-10 py-7 h-auto"
            >
              <Link href="/programas">Ver Programas</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
