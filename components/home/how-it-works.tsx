import { MessageSquare, Video, FileCheck, Plane } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Contacto Inicial",
      description: "Cuéntanos tus objetivos. Te respondemos en menos de 24 horas.",
    },
    {
      number: "02",
      icon: Video,
      title: "Videollamada",
      description: "Reunión virtual para resolver todas tus dudas y diseñar tu experiencia.",
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Reserva",
      description: "Confirmamos tu plaza y te guiamos en cada paso de la documentación.",
    },
    {
      number: "04",
      icon: Plane,
      title: "Experiencia",
      description: "Te recibimos en Argentina. Coordinamos todo de principio a fin.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
            Proceso simple. Comunicación constante. Resultados garantizados.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-10 relative">
                      <Icon className="w-11 h-11 text-primary" />
                      <div className="absolute -top-2 -right-2 w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-base font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-5">{step.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
