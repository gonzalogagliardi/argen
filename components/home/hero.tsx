import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Línea superior celeste AFA */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-primary z-20" />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/varias/fondos/10.jpeg"
          alt="Football Stadium Argentina"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/75" />
        {/* Gradiente celeste sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-dark/20" />

        {/* Elementos decorativos flotantes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-dark/20 rounded-full blur-2xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">Programas Oficiales AFA</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Fútbol Argentino
            <br />
            <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
              desde adentro
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            Programas oficiales para equipos e individuales dentro de clubes profesionales.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-primary to-primary-dark text-black hover:from-primary-dark hover:to-primary px-12 py-7 text-lg shadow-2xl shadow-primary/40 font-bold transition-all duration-300 hover:scale-105 hover:shadow-primary/60"
            >
              <Link href="/programas">
                Ver Programas
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white hover:text-foreground px-12 py-7 text-lg font-bold transition-all duration-300 hover:scale-105"
            >
              <Link href="/contacto">Hablar con un Asesor</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator mejorado */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-7 h-11 border-2 border-primary/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
          <div className="w-2 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
