import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export function ProgramComparison() {
  const comparison = [
    {
      feature: "Enfoque Principal",
      rosario: "Equipos / Experiencia + Amistosos",
      pro: "Individual / Formación Real",
    },
    {
      feature: "Rango de Edad",
      rosario: "7 a 20 años",
      pro: "12 a 19 años",
    },
    {
      feature: "Duración Base",
      rosario: "10 días (Propuesta adaptable)",
      pro: "1 semana a 30 días",
    },
    {
      feature: "Sede",
      rosario: "Rosario (sede única)",
      pro: "Nacional (Bs As · Santa Fe · y más)",
    },
    {
      feature: "Alojamiento",
      rosario: "Hotel / Residencia deportiva",
      pro: "Residencia/Pensión del club (Casa Fútbol)",
    },
    {
      feature: "Competencia / Entrenamiento",
      rosario: "Amistosos planificados + doble turno (Lun–Vie)",
      pro: "Entrenamiento oficial + día a día dentro del club",
    },
    {
      feature: "Inmersión Cultural",
      rosario: "Alta (ciudad, estadios y recorridos)",
      pro: "Media (foco en el club)",
    },
    {
      feature: "Staff Médico y Nutricional",
      rosario: "Cobertura incluida (coordinación y soporte)",
      pro: "Seguimiento completo (médico, nutrición, psicología)",
    },
    {
      feature: "Evaluación / Informe",
      rosario: "Opcional (según requerimiento del grupo)",
      pro: "Incluido (informe de desarrollo)",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center text-balance">
            Comparación de Programas
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
            Elegí la propuesta que mejor se adapte a tu objetivo: equipos (experiencia + amistosos) o individual (formación real).
          </p>

          <Card className="overflow-hidden border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground min-w-[200px]">Característica</th>
                    <th className="text-center p-4 font-semibold text-foreground min-w-[200px]">Rosario Experience</th>
                    <th className="text-center p-4 font-semibold text-foreground min-w-[200px] bg-primary/5">Pro Program</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/20">
                      <td className="p-4 text-muted-foreground font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {typeof row.rosario === "boolean" ? (
                          row.rosario ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                          )
                        ) : (
                          <span className="text-foreground text-sm font-medium">{row.rosario}</span>
                        )}
                      </td>
                      <td className="p-4 text-center bg-primary/5">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                          )
                        ) : (
                          <span className="text-foreground text-sm font-medium">{row.pro}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <p className="text-center text-xs text-muted-foreground mt-6">
            * Rosario: itinerario base adaptable. PRO: asignación según categoría, cupos y disponibilidad.
          </p>
        </div>
      </div>
    </section>
  )
}
