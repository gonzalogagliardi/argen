import { Card } from "@/components/ui/card"
import { Award, Globe, Briefcase, TrendingUp } from "lucide-react"

export function Founder() {
  const achievements = [
    {
      icon: Award,
      title: "30 Años",
      description: "De trayectoria oficial en Rosario Central",
    },
    {
      icon: Briefcase,
      title: "Gestión Deportiva",
      description: "Ex Secretario Técnico y Director de Scouting",
    },
    {
      icon: Globe,
      title: "Alcance Global",
      description: "Alianzas estratégicas en más de 30 países",
    },
    {
      icon: TrendingUp,
      title: "Formación",
      description: "Desarrollo de redes de captación internacional",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted shadow-xl">
                <img
                  src="/about.png"
                  alt="Luciano Pellegrini"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Luciano Pellegrini</h2>
              <p className="text-xl text-primary font-semibold mb-6">Fundador y Director</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Con <strong>30 años de trayectoria en el Club Atlético Rosario Central</strong>, Luciano ha dedicado su vida a todas las áreas del fútbol: infantil, juvenil y profesional.
                </p>
                <p>
                  Ocupó roles estratégicos como <strong>Secretario Técnico, Director de Scouting y Director de la Academia Internacional</strong>, entre otros cargos de gestión deportiva de alto nivel.
                </p>
                <p>
                  Ha formado alianzas en más de 30 países, asesorando a clubes y acompañando delegaciones en competencias mundiales. Hoy, garantiza personalmente que cada jugador de ArgenGoal viva una experiencia formativa <strong>seria, ordenada y con oportunidades reales</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card key={index} className="p-6 border-border text-center hover:border-primary/50 transition-colors shadow-sm">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <p className="text-2xl font-bold text-foreground mb-2">{achievement.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}