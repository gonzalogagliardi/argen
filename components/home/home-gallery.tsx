export function HomeGallery() {
  const images = [
    {
      src: "/varias/1.jpeg",
      alt: "Experiencia ARGENGOAL",
    },
    {
      src: "/varias/5.jpeg",
      alt: "Fútbol argentino",
    },
    {
      src: "/varias/4.jpeg",
      alt: "Jugadores en acción",
    },
    {
      src: "/varias/12.jpeg",
      alt: "Entrenamiento profesional",
    },
    {
      src: "/varias/16.jpeg",
      alt: "Desarrollo en Argentina",
    },
    {
      src: "/varias/18.jpeg",
      alt: "Experiencias inolvidables",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vive la Experiencia ARGENGOAL
          </h2>
          <p className="text-lg text-muted-foreground">
            Más que fútbol, una inmersión total en la cultura y pasión argentina
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[3/2] rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
