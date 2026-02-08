import { Card } from "@/components/ui/card"
import { Trophy, Heart, Zap, Globe } from "lucide-react"

export function WhyArgentina() {
  const reasons = [
    {
      icon: Trophy,
      title: "La Razón del Éxito",
      description: "Los jugadores argentinos triunfan globalmente por una razón simple: nuestra metodología y competencia feroz.",
    },
    {
      icon: Heart,
      title: "Manera de Sentir",
      description:
        "No es solo técnica. Te enseñamos a vivir, entrenar y competir con la pasión que caracteriza al campeón del mundo.",
    },
    {
      icon: Zap,
      title: "Entorno Elite",
      description: "Entrena a la par de los próximos ídolos mundiales, exigido y corregido por los DTs oficiales de AFA.",
    },
    {
      icon: Globe,
      title: "Rosario: La Cuna",
      description: "La ciudad que dio al mundo a Messi, Di María y Bielsa. El epicentro del talento futbolístico.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance">
            ¿Por Qué ArgenGoal?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
            Incorpora el diferencial argentino en tu juego. Entrena donde nacen las estrellas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card
                key={index}
                className="p-10 lg:p-12 border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <Icon className="w-16 h-16 text-primary mb-8" />
                <h3 className="text-2xl font-semibold text-foreground mb-5">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{reason.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}