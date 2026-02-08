export function Gallery() {
  const images = [
    {
      src: "/argengoal-team-training-session.jpg",
      alt: "Entrenamiento de equipo",
    },
    {
      src: "/argengoal-stadium-tour-experience.jpg",
      alt: "Tour de estadio",
    },
    {
      src: "/argengoal-player-development-program.jpg",
      alt: "Programa de desarrollo",
    },
    {
      src: "/argengoal-cultural-immersion-argentina.jpg",
      alt: "Inmersión cultural",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nuestros Momentos</h2>
          <p className="text-lg text-muted-foreground">Capturando la esencia de las experiencias ARGENGOAL</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
