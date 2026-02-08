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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/85 to-primary/90" />
        {/* Patrón de puntos sutil */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 text-balance leading-tight">
            ¿Listo Para Vivir la Experiencia{" "}
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-lg">
              ARGENGOAL
            </span>
            ?
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-12 text-pretty leading-relaxed font-medium">
            Da el primer paso hoy. Tu viaje al corazón del fútbol argentino comienza aquí.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              asChild
              size="lg"
              className="group bg-white text-black hover:bg-white/95 text-lg px-14 py-8 h-auto shadow-2xl font-black transition-all duration-300 hover:scale-105 hover:shadow-white/20"
            >
              <Link href="/contacto">
                Empezar Ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white hover:text-foreground text-lg px-12 py-8 h-auto font-bold transition-all duration-300 hover:scale-105"
            >
              <Link href="/programas">Ver Programas</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
