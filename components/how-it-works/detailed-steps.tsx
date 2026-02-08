import { Card } from "@/components/ui/card"
import { MessageSquare, Video, FileCheck, Plane, Users, Award } from "lucide-react"

export function DetailedSteps() {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: "Contacto Inicial",
      description: "Conocemos tus objetivos y perfil deportivo.",
      details: [
        "Completa el formulario o escríbenos",
        "Envíanos tu CV deportivo o video (opcional)",
        "Recibe la propuesta de fechas y sedes",
        "Respuesta garantizada en 24hs",
      ],
    },
    {
      number: 2,
      icon: Video,
      title: "Videollamada Informativa",
      description: "Reunión oficial entre ArgenGoal, el Club y la Familia.",
      details: [
        "Presentación detallada del programa",
        "Definición de logística y alojamiento",
        "Resolución de dudas a padres/entrenadores",
        "Acuerdo de fechas de viaje",
      ],
    },
    {
      number: 3,
      icon: FileCheck,
      title: "Reserva y Admisión",
      description: "Confirmación de plaza y trámites oficiales.",
      details: [
        "Pago de reserva (USD 500)",
        "Envío de Carta de Invitación Oficial",
        "Presentación de aptos médicos",
        "Firma de contrato de adhesión",
      ],
    },
    {
      number: 4,
      icon: Plane,
      title: "Preparación del Viaje",
      description: "Tu coordinador te asiste antes de subir al avión.",
      details: [
        "Confirmación de itinerario de vuelo",
        "Kit de información (Clima, Moneda, Qué llevar)",
        "Contacto directo con tu coordinador asignado",
        "Lista de indumentaria necesaria",
      ],
    },
    {
      number: 5,
      icon: Users,
      title: "Llegada a Argentina",
      description: "Bienvenida y comienzo de la experiencia.",
      details: [
        "Recepción personal en aeropuerto",
        "Traslado privado al Club/Residencia",
        "Pago del saldo restante",
        "Entrega de indumentaria y cronograma",
      ],
    },
    {
      number: 6,
      icon: Award,
      title: "Experiencia y Seguimiento",
      description: "Vivencia profesional y feedback continuo.",
      details: [
        "Coordinación 24/7 durante la estadía",
        "Informes de evolución (según programa)",
        "Material audiovisual (fotos/videos)",
        "Traslado de regreso al aeropuerto",
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Proceso Paso a Paso</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Te acompañamos desde la primera consulta hasta tu regreso a casa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="p-8 border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon and Number */}
                  <div className="shrink-0">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                      <Icon className="w-10 h-10 text-primary" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}