export function ProcessHero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/planning-football-experience-argentina.jpg"
          alt="Planning Football Experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-primary/60 to-black/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">Cómo Funciona</h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty">
            Un proceso simple, transparente y profesional desde tu primer contacto hasta el último día de tu experiencia
            en Argentina.
          </p>
        </div>
      </div>
    </section>
  )
}
