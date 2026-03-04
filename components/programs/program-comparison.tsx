"use client"

import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ProgramComparison() {
  const { t } = useLanguage()
  const s = t.programComparison

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center text-balance">{s.title}</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">{s.subtitle}</p>

          <Card className="overflow-hidden border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground min-w-[200px]">{s.featureCol}</th>
                    <th className="text-center p-4 font-semibold text-foreground min-w-[200px]">Rosario Experience</th>
                    <th className="text-center p-4 font-semibold text-foreground min-w-[200px] bg-primary/5">Pro Program</th>
                  </tr>
                </thead>
                <tbody>
                  {s.rows.map((row, index) => (
                    <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/20">
                      <td className="p-4 text-muted-foreground font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {typeof row.rosario === "boolean" ? (
                          row.rosario ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                        ) : (
                          <span className="text-foreground text-sm font-medium">{row.rosario}</span>
                        )}
                      </td>
                      <td className="p-4 text-center bg-primary/5">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
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

          <p className="text-center text-xs text-muted-foreground mt-6">{s.footnote}</p>
        </div>
      </div>
    </section>
  )
}
