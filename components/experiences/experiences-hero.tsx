export function ExperiencesHero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/international-teams-argentina-football.jpg"
          alt="International Teams"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-black/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Experiencias Internacionales
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty">
            Equipos, academias y jugadores de todo el mundo han confiado en ARGENGOAL para vivir experiencias únicas de
            fútbol en Argentina.
          </p>
        </div>
      </div>
    </section>
  )
}
