import { Card } from "@/components/ui/card"
import { Target, Eye, ShieldCheck } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="p-8 border-border bg-background hover:shadow-lg transition-all">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transmitir el ADN del futbolista argentino. Permitir que jugadores de todo el mundo entiendan, vivan y entrenen con la misma pasión y metodología que formó a los campeones del mundo.
              </p>
            </Card>

            {/* Vision */}
            <Card className="p-8 border-border bg-background hover:shadow-lg transition-all">
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser la puerta de acceso más confiable y profesional al fútbol argentino, eliminando barreras y generando oportunidades de desarrollo real dentro de clubes de AFA.
              </p>
            </Card>

            {/* Values */}
            <Card className="p-8 border-border bg-background hover:shadow-lg transition-all">
              <ShieldCheck className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Valores</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">✓</span>
                  <span>Seriedad y Orden Institucional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">✓</span>
                  <span>Transparencia absoluta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">✓</span>
                  <span>Oportunidades Reales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">✓</span>
                  <span>Acompañamiento Familiar</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}