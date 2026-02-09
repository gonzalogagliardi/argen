export function AboutHero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/varias/fondos/11.jpeg"
          alt="Rosario Argentina"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-primary/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Sobre Nosotros
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty">
            Somos ArgenGoal. Nacimos en Rosario, el lugar donde nacen las estrellas. 
            Liderados por directivos con 30 años de experiencia en la élite del fútbol argentino.
          </p>
        </div>
      </div>
    </section>
  )
}