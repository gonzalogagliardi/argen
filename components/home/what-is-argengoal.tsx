import { Card } from "@/components/ui/card"
import { Globe2, Trophy, Heart } from "lucide-react"

export function WhatIsArgengoal() {
  const values = [
    {
      icon: Globe2,
      title: "Alcance Global",
      stat: "30+ Países",
      description: "Conectamos jugadores de todo el mundo con la pasión del fútbol argentino",
    },
    {
      icon: Trophy,
      title: "Programas Elite",
      stat: "7 Clubes",
      description: "Acceso directo a clubes profesionales de primera división argentina",
    },
    {
      icon: Heart,
      title: "Experiencia Real",
      stat: "100% Inmersión",
      description: "No simulamos: vivís el día a día de un futbolista profesional argentino",
    },
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(98,179,229,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(4,142,204,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            La Puerta al Fútbol Argentino
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty font-medium">
            Somos el puente entre tu talento y la <span className="text-primary font-bold">metodología argentina</span> que formó a los mejores del mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className="relative p-8 border-0 bg-gradient-to-br from-primary/5 to-white shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              >
                {/* Border top */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-dark to-primary" />

                {/* Icono */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Estadística destacada */}
                <div className="mb-4">
                  <p className="text-3xl font-black text-primary mb-1">{value.stat}</p>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                </div>

                {/* Descripción */}
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
