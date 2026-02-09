import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Calendar, ArrowRight } from "lucide-react"

export function ProgramsOverview() {
  const programs = [
    {
      title: "Rosario Experience",
      description:
        "Experiencia para equipos: más partidos amistosos que un torneo tradicional, combinados con actividades y recorridos por la ciudad.",
      icon: Users,
      image: "/gallery/toronto-02.jpg",
      features: [
        "Amistosos planificados contra una variedad de clubes rosarinos (no solo dos)",
        "Doble turno (Lun–Vie): competencia + paseos/actividades",
        "Alojamiento, traslados y comidas incluidas",
        "Edades: 7 a 20 años (Masc. y Fem.)",
      ],
      duration: "10 días (Propuesta adaptable)",
      href: "/programas#rosario-experience",
      type: "group",
    },
    {
      title: "Pro Program",
      description:
        "Formación real: viví y entrená dentro de un club profesional. Programa individual con sedes en distintas ciudades del país.",
      icon: Award,
      image: "/gallery/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-003.webp",
      features: [
        "Entrenamiento oficial con tu categoría (según cupos y disponibilidad)",
        "Vivir en la residencia/pensión del club (Casa Fútbol)",
        "Staff profesional: DT, PF, nutrición y psicología deportiva",
        "Red en expansión (Bs As + Santa Fe): Banfield, Estudiantes, Gimnasia, Unión, Colón, Central y Newell's",
      ],
      duration: "1 sem. a 30 días",
      href: "/programas#pro-program",
      type: "elite",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 text-balance">
            Nuestros Programas
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty font-medium">
            Dos propuestas distintas: equipos (Rosario) e individual (PRO). Un mismo objetivo: vivir el fútbol argentino
            desde adentro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden ${program.type === "elite" ? "border-0 shadow-2xl shadow-primary/20 bg-gradient-to-br from-white to-primary/5" : "border-0 shadow-lg bg-white"} hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-2 group`}
              >
                {/* Border top celeste AFA */}
                <div className={`absolute top-0 left-0 right-0 h-2 ${program.type === "elite" ? "bg-gradient-to-r from-primary via-primary-dark to-primary" : "bg-primary group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-primary-dark group-hover:to-primary transition-all duration-300"}`} />

                {/* Program Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                <CardHeader className="pb-6 pt-8">
                  <div className="flex items-start justify-between mb-6">
                    <Icon className={`w-14 h-14 ${program.type === "elite" ? "text-primary" : "text-primary group-hover:scale-110 transition-transform"}`} />
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{program.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-black mb-4 text-foreground">{program.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed font-medium">{program.description}</CardDescription>

                  {program.type === "group" && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                        <Users className="w-4 h-4" />
                        <span>Equipos · Academias · Colegios</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-muted/60 text-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        <span>Más amistosos que un torneo</span>
                      </div>
                    </div>
                  )}

                  {program.type === "elite" && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/20">
                        <Award className="w-4 h-4" />
                        <span>Alto Rendimiento · Individual</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-muted/60 text-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        <span>Sedes múltiples (Bs As · Santa Fe · Rosario)</span>
                      </div>
                    </div>
                  )}
                </CardHeader>

                <CardContent className="pb-8">
                  <ul className="space-y-4">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {program.type === "elite" && (
                    <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                      * La red de clubes está en expansión y la asignación depende de categoría, cupos y disponibilidad.
                    </p>
                  )}
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    variant={program.type === "elite" ? "default" : "outline"}
                    className={`w-full group text-base py-6 font-bold ${program.type === "elite" ? "bg-gradient-to-r from-primary to-primary-dark text-black hover:from-primary-dark hover:to-primary shadow-lg shadow-primary/30 hover:shadow-primary/50" : "border-2 hover:bg-primary hover:text-black hover:border-primary"} transition-all duration-300`}
                  >
                    <Link href={program.href}>
                      {program.type === "elite" ? "Ver Precios y Detalles" : "Ver Itinerario"}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
