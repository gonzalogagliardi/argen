import { Trophy, Users, MapPin, Star } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Participantes",
      description: "Jugadores que han vivido la experiencia",
    },
    {
      icon: MapPin,
      number: "30+",
      label: "Países",
      description: "De todos los continentes",
    },
    {
      icon: Trophy,
      number: "50+",
      label: "Equipos",
      description: "Clubes y academias internacionales",
    },
    {
      icon: Star,
      number: "98%",
      label: "Satisfacción",
      description: "Recomendarían la experiencia",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-4xl font-bold text-foreground mb-2">{stat.number}</p>
                  <p className="text-lg font-semibold text-foreground mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
