import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, Calendar, MapPin, CheckCircle2, ArrowRight } from "lucide-react"

export function RosarioExperience() {
  const included = [
    "Amistosos planificados todos los días contra una variedad de clubes rosarinos",
    "Más partidos y tours que un torneo tradicional (experiencia intensiva)",
    "Doble turno (Lun–Vie): competencia (amistoso) + paseos/actividades",
    "Tours y experiencias: estadios y puntos icónicos de la ciudad",
    "Alojamiento (Residencias Deportivas u Hoteles)",
    "Pensión Completa (3 comidas diarias)",
    "Bus privado exclusivo para la delegación",
    "Coordinación bilingüe permanente",
    "Acceso a partidos de Primera División (según calendario y disponibilidad)",
  ]

  // Itinerario compactado (similar a la versión anterior, pero con el mensaje correcto)
  const itinerary = [
    {
      day: "Días 1–2",
      title: "Llegada + Puesta a Punto",
      activities: [
        "Recepción y check-in",
        "Charla técnica inicial y organización del grupo",
        "Inicio de la rutina de doble turno (competencia + ciudad)",
      ],
    },
    {
      day: "Días 3–4",
      title: "Doble Turno: Competencia + Ciudad",
      activities: [
        "Turno competencia: amistosos vs clubes locales (variedad de rivales)",
        "Turno cultural: recorridos guiados y actividades",
        "Recuperación, coordinación y logística del programa",
      ],
    },
    {
      day: "Días 5–6",
      title: "Rosario Ícono + Experiencia Deportiva",
      activities: [
        "Turno competencia: amistosos planificados",
        "Turno cultural: puntos históricos y recorridos destacados",
        "Experiencias vinculadas al fútbol y a la ciudad (según agenda)",
      ],
    },
    {
      day: "Días 7–8",
      title: "Fin de Semana: Paseos + Fútbol Profesional",
      activities: [
        "Paseos más extensos y actividades grupales",
        "Acceso a partido de Primera División (según calendario y disponibilidad)",
        "Continuidad del programa (según planificación del grupo)",
      ],
    },
    {
      day: "Días 9–10",
      title: "Cierre de Competencia + Despedida",
      activities: [
        "Amistosos finales / cierre competitivo",
        "Actividad final y premiación",
        "Traslado al aeropuerto",
      ],
    },
  ]

  return (
    <section id="rosario-experience" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Experiencia Grupal
            </Badge>
            <Badge className="text-sm px-3 py-1 bg-primary/10 text-primary hover:bg-primary/15">
              Equipos · Academias · Colegios
            </Badge>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Rosario Experience
          </h2>

          <p className="text-2xl md:text-3xl font-semibold text-primary mb-8 italic">
            "Donde nacen las estrellas"
          </p>

          <div className="p-6 mb-8 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/30">
            <p className="text-xl md:text-2xl font-bold text-center text-foreground">
              ¡GARANTIZAMOS MÁS PARTIDOS Y TOURS QUE CUALQUIER TORNEO!
            </p>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty mb-10">
            Una experiencia diseñada para equipos: competencia intensa con amistosos planificados y una agenda completa
            de actividades y recorridos por la ciudad. Rosario es fútbol, historia y cultura en una misma gira.
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-medium">Equipos y Academias (7 a 20 años)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-medium">Base: 10 días (Propuesta adaptable)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Rosario, Argentina</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6 italic">
            * Disponibilidad: de mitad de enero a mitad de diciembre
          </p>
        </div>

        {/* Day-to-day (critical clarification) */}
        <div className="max-w-6xl mx-auto mb-20">
          <Card className="p-8 md:p-10 border-primary/25 bg-primary/5">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">¿Cómo es el día a día?</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              De lunes a viernes, el programa se vive con <span className="font-semibold text-foreground">doble turno</span>:
              <span className="font-semibold text-foreground"> competencia (amistosos)</span> +{" "}
              <span className="font-semibold text-foreground">turno cultural</span> (paseos/actividades). Los fines de semana
              se priorizan paseos más extensos y la experiencia de fútbol profesional (según calendario y disponibilidad).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-background/60 border border-border">
                <p className="font-semibold text-foreground mb-1">Lun–Vie</p>
                <p className="text-sm text-muted-foreground">Turno competencia (amistoso) + turno cultural (paseo/actividad)</p>
              </div>
              <div className="p-4 rounded-lg bg-background/60 border border-border">
                <p className="font-semibold text-foreground mb-1">Sáb–Dom</p>
                <p className="text-sm text-muted-foreground">
                  Paseos + acceso a partidos de Primera División (según calendario/disponibilidad)
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-20">
          {/* What's Included */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">Todo Incluido</h3>
            <div className="space-y-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground leading-relaxed text-base font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who It's For */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">Ideal Para</h3>
            <Card className="p-6 border-border bg-muted/30">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Equipos de Fútbol</p>
                    <p className="text-sm text-muted-foreground">
                      Giras de pretemporada o cierre de año con competencia real y mucha participación.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Academias Internacionales</p>
                    <p className="text-sm text-muted-foreground">
                      Una experiencia deportiva + cultural para sus alumnos, con agenda intensa y organizada.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Colegios y Escuelas</p>
                    <p className="text-sm text-muted-foreground">
                      Viajes deportivos que combinan fútbol, ciudad e historia en un solo programa.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Sample Itinerary */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-4 text-center">Itinerario Base (10 días)</h3>
          <p className="text-center text-sm text-muted-foreground mb-10">
            Propuesta base adaptable: ajustamos actividades y agenda para ofrecer la mejor experiencia.
          </p>

          <div className="space-y-6">
            {itinerary.map((day, index) => (
              <Card key={index} className="p-8 border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary font-bold text-xl shadow-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">{day.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium">{day.day}</p>
                    <ul className="space-y-3 bg-muted/30 rounded-lg p-4">
                      {day.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12 border-primary/30 bg-primary/5 shadow-xl">
            <div className="mb-10">
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Valor por Pasajero (Base 10 días)</p>
              <p className="text-5xl font-bold text-foreground mb-3">USD $2,000</p>
              <p className="text-sm text-muted-foreground">
                ¡Todo Incluido! (Alojamiento, comidas, traslados, actividades y coordinación)
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="w-full md:w-auto bg-primary text-primary-foreground text-lg px-12 py-7 h-auto shadow-xl shadow-primary/25 font-semibold"
            >
              <Link href="/contacto">
                Solicitar Presupuesto para mi Grupo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
