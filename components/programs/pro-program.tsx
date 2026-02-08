import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Award, Calendar, Target, CheckCircle2, ArrowRight, MapPin } from "lucide-react"

export function ProProgram() {
  const features = [
    "Entrenamiento oficial con tu categoría (según cupos y disponibilidad)",
    "Alojamiento en Pensión/Residencia del Club (Casa Fútbol)",
    "4 comidas diarias (nutrición deportiva)",
    "Atención médica y kinesiología",
    "Lavado de indumentaria",
    "Staff: DT, PF, psicología y nutrición deportiva",
    "Traslados internos y acceso a partidos (según agenda)",
    "Informe de desarrollo y adaptación al entorno profesional",
  ]

  const staff = [
    {
      role: "Entrenadores Oficiales",
      description: "Cuerpo técnico del club: trabajo real con metodología y exigencia competitiva.",
    },
    {
      role: "Preparadores Físicos",
      description: "Carga y planificación adaptada al ritmo del fútbol argentino.",
    },
    {
      role: "Área Médica",
      description: "Médicos y kinesiólogos presentes en el proceso de entrenamiento.",
    },
    {
      role: "Nutricionistas",
      description: "Plan de alimentación e hidratación para alto rendimiento.",
    },
    {
      role: "Psicólogos Deportivos",
      description: "Soporte de adaptación al entorno competitivo y a la vida de club.",
    },
  ]

  const durations = [
    {
      duration: "1 Semana",
      price: "USD $1,200",
      ideal: "Evaluación, diagnóstico y primera inmersión real en club",
    },
    {
      duration: "2 Semanas",
      price: "USD $2,200",
      ideal: "Adaptación al ritmo, corrección técnica y continuidad",
    },
    {
      duration: "30 Días",
      price: "USD $3,200",
      ideal: "La experiencia completa de vida, entrenamiento y competencia",
      popular: true,
    },
  ]

  const clubs = ["Banfield", "Estudiantes", "Gimnasia", "Unión (Santa Fe)", "Colón", "Rosario Central", "Newell's"]

  return (
    <section id="pro-program" className="relative py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
      {/* Patrón sutil de fondo */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-sm px-3 py-1 bg-primary text-primary-foreground">Alto Rendimiento · Individual</Badge>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">Pro Program</h2>

          <p className="text-2xl md:text-3xl font-semibold text-primary mb-8 italic">
            "Vive y entrena como un futbolista elite"
          </p>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty mb-10">
            No es un campus aislado: es una <strong>formación real</strong>. Vivís, entrenás y te adaptás al día a día{" "}
            <strong>dentro</strong> de un club profesional, como un futbolista.
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="w-5 h-5 text-primary" />
              <span className="font-medium">Edades: 12 a 19 años</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-medium">Duración: Desde 1 semana hasta 1 año</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="w-5 h-5 text-primary" />
              <span className="font-medium">Nivel: Intermedio / Avanzado</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6 italic">
            * Disponibilidad: de mitad de enero a mitad de diciembre
          </p>
        </div>

        {/* Sedes y Red de Clubes */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="p-8 md:p-10 border-primary/25 bg-primary/5">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-6 h-6 text-primary mt-0.5" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Programa Nacional (no solo Rosario)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  El Pro Program se trabaja con foco en <strong>Buenos Aires</strong> y <strong>Santa Fe</strong>, y se
                  expande a distintos clubes del país. Buscamos ubicarte en la institución que mejor se adapte a tu perfil,
                  categoría y disponibilidad.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-foreground mb-3">Red actual (en expansión):</p>
              <div className="flex flex-wrap gap-2">
                {clubs.map((club) => (
                  <span
                    key={club}
                    className="inline-flex items-center rounded-full bg-background/70 border border-border px-3 py-1 text-sm text-foreground"
                  >
                    {club}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                * La red de clubes está en expansión y la asignación depende de categoría, cupos y disponibilidad.
              </p>
            </div>
          </Card>
        </div>

        {/* What's Included */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-10 text-center">¿Qué Incluye la Inmersión?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-background rounded-lg border-2 border-border hover:border-primary/50 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Staff */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Cuerpo Técnico y Médico</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((member, index) => (
              <Card key={index} className="p-6 border-border">
                <h4 className="text-lg font-semibold text-foreground mb-2">{member.role}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Options */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-10 text-center">Valores del Programa</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {durations.map((option, index) => (
              <Card
                key={index}
                className={`p-8 lg:p-10 border-2 ${
                  option.popular ? "border-primary bg-primary/5 shadow-xl scale-105" : "border-border"
                } relative overflow-hidden transition-all hover:shadow-lg`}
              >
                {option.popular && (
                  <Badge className="absolute top-6 right-6 bg-primary text-primary-foreground shadow-md text-xs px-3 py-1">
                    Recomendado
                  </Badge>
                )}
                <div className="text-center mb-8">
                  <p className="text-sm text-muted-foreground mb-3 font-medium uppercase tracking-wide">
                    {option.duration}
                  </p>
                  <p className="text-4xl lg:text-5xl font-bold text-foreground mb-6">{option.price}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{option.ideal}</p>
                </div>
                <Button
                  asChild
                  size="lg"
                  variant={option.popular ? "default" : "outline"}
                  className={`w-full h-auto py-4 text-base ${
                    option.popular
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "hover:border-primary hover:text-primary"
                  }`}
                >
                  <Link href="/contacto">{option.popular ? "Aplicar Ahora" : "Consultar Disponibilidad"}</Link>
                </Button>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6 italic">
            * Los valores pueden variar según el club asignado, categoría y disponibilidad.
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center mt-20">
          <Card className="p-12 border-primary/50 bg-gradient-to-br from-primary/5 to-background shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">¿Listo para el desafío?</h3>
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg max-w-2xl mx-auto">
              Requisito: Ergometría apta y nivel futbolístico base. <br />
              Las plazas en la residencia del club son limitadas.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground text-lg px-12 py-7 h-auto shadow-xl shadow-primary/30 font-semibold"
            >
              <Link href="/contacto">
                Postularme al Pro Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
