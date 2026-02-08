import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Timeline() {
  const timeline = [
    {
      phase: "3-6 meses antes",
      title: "Contacto y Planificación",
      description: "Definición de objetivos, fechas y videollamada informativa.",
    },
    {
      phase: "2-4 meses antes",
      title: "Reserva de Plaza",
      description: "Pago de seña (USD 500) y emisión de cartas de invitación.",
    },
    {
      phase: "1-2 meses antes",
      title: "Gestión de Vuelos",
      description: "Compra de pasajes aéreos y presentación de fichas médicas.",
    },
    {
      phase: "1 semana antes",
      title: "Charla Pre-Viaje",
      description: "Reunión final con coordinador, revisión de equipaje y logística.",
    },
    {
      phase: "Día de llegada",
      title: "Bienvenida y Pago Final",
      description: "Recepción en Rosario, cancelación del saldo y check-in.",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Cronograma Recomendado</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Para garantizar disponibilidad en los clubes, sugerimos esta línea de tiempo.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6 pb-8">
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <p className="text-sm font-semibold text-primary mb-1">{item.phase}</p>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 rounded-lg bg-primary/5 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">¿Tienes dudas con los tiempos?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Podemos adaptar el proceso si tienes una fecha de viaje próxima. Hablemos.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground">
              <Link href="/contacto">
                Consultar Disponibilidad
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}