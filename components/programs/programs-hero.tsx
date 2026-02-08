export function ProgramsHero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/football-training-session-argentina.jpg"
          alt="Football Training Argentina"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-primary/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Programas de Fútbol en Argentina
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty">
            Dos propuestas claras y diferenciadas.  
            <strong> Rosario Experience</strong> está pensado para <strong>equipos</strong>: más partidos amistosos que un
            torneo, combinados con recorridos y experiencias en la ciudad.  
            <strong> Pro Program</strong> es <strong>individual</strong>: formación real dentro de clubes profesionales,
            viviendo el día a día del fútbol argentino.
          </p>
        </div>
      </div>
    </section>
  )
}
