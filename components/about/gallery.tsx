export function Gallery() {
  const images = [
    {
      src: "/varias/1.jpeg",
      alt: "Experiencia ARGENGOAL",
    },
    {
      src: "/varias/2.jpeg",
      alt: "Entrenamiento en Argentina",
    },
    {
      src: "/varias/3.jpeg",
      alt: "Jugadores internacionales",
    },
    {
      src: "/varias/5.jpeg",
      alt: "Desarrollo profesional",
    },
    {
      src: "/varias/8.jpeg",
      alt: "Inmersión futbolística",
    },
    {
      src: "/varias/13.jpeg",
      alt: "Momentos ARGENGOAL",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nuestros Momentos</h2>
          <p className="text-lg text-muted-foreground">Capturando la esencia de las experiencias ARGENGOAL</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <img
                src={image.src}
                alt={image.alt}
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
