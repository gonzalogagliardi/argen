import { Shield, Target, Users } from "lucide-react"

export function WhatIsArgengoal() {
  const features = [
    {
      icon: Shield,
      title: "Excelencia",
      description: "30+ años conectando el fútbol profesional argentino con el mundo",
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Programas probados que generan desarrollo real y experiencias memorables",
    },
    {
      icon: Users,
      title: "Red Global",
      description: "Relaciones directas con clubes en más de 30 países",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance">
            ¿Qué es ARGENGOAL?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
            Conectamos clubes, academias y jugadores internacionales con la cultura profesional del fútbol argentino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-10">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-5">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
