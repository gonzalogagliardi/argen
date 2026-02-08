import { Globe } from "lucide-react"

export function Countries() {
  const regions = [
    {
      region: "Europa",
      countries: ["España", "Portugal", "Italia", "Francia", "Inglaterra", "Alemania"],
    },
    {
      region: "América del Norte",
      countries: ["Estados Unidos", "Canadá", "México"],
    },
    {
      region: "América del Sur",
      countries: ["Brasil", "Chile", "Uruguay", "Colombia", "Perú"],
    },
    {
      region: "Asia y Otros",
      countries: ["Japón", "China", "Australia", "Sudáfrica"],
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Presencia Global</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hemos trabajado con equipos y jugadores de todos los continentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {regions.map((region, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-foreground mb-4">{region.region}</h3>
              <ul className="space-y-2">
                {region.countries.map((country, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{country}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
