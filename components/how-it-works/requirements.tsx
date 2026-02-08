import { Card } from "@/components/ui/card"
import { FileText, CreditCard, Shield, Plane } from "lucide-react"

export function Requirements() {
  const requirements = [
    {
      icon: FileText,
      title: "Documentación",
      items: [
        "Pasaporte válido",
        "Apto Médico (Ergometría)",
        "Declaración Jurada de Salud",
        "Ficha personal ArgenGoal",
      ],
    },
    {
      icon: CreditCard,
      title: "Pagos",
      items: [
        "Reserva: USD 500 (Confirma plaza)",
        "Saldo: En efectivo al llegar a Rosario",
        "La reserva no es reembolsable",
      ],
    },
    {
      icon: Shield,
      title: "Seguros y Salud",
      items: [
        "Seguro de Viajero (Obligatorio)",
        "Atención primaria en entrenamientos",
        "Cobertura de emergencias en el club",
      ],
    },
    {
      icon: Plane,
      title: "Trámites de Viaje",
      items: [
        "Carta de Invitación Oficial (Provista)",
        "Asesoramiento para ingreso al país",
        "Coordinación de vuelos",
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Requisitos y Condiciones</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transparencia total. Esto es lo que necesitas para viajar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {requirements.map((req, index) => {
            const Icon = req.icon
            return (
              <Card key={index} className="p-8 border-border bg-background hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">{req.title}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}