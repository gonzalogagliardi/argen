import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqAccordion() {
  const categories = [
    {
      title: "General",
      faqs: [
        {
          question: "¿Qué es ARGENGOAL?",
          answer:
            "ARGENGOAL es una organización especializada que conecta jugadores y academias del mundo con el fútbol argentino. Liderada por directores con amplia trayectoria en clubes profesionales de primera división, ofrecemos acceso directo a la estructura de AFA.",
        },
        {
          question: "¿Por qué elegir Rosario?",
          answer:
            "Rosario es la capital mundial del fútbol, cuna de Lionel Messi y Ángel Di María. Aquí se respira una cultura futbolística única y nuestros programas te permiten pisar las mismas canchas donde ellos se formaron.",
        },
        {
          question: "¿Cuánto tiempo de anticipación necesito?",
          answer:
            "Recomendamos reservar con 3 a 6 meses de anticipación para asegurar disponibilidad, especialmente en el 'Pro Program' donde las plazas en la pensión del club son limitadas.",
        },
      ],
    },
    {
      title: "Programas",
      faqs: [
        {
          question: "¿Cuál es la diferencia entre los programas?",
          answer:
            "Rosario Experience (7-20 años) es grupal y turístico: incluye amistosos, tours y diversión. Pro Program (12-19 años) es de alto rendimiento individual: vives y entrenas DENTRO de un club de AFA con los jugadores oficiales.",
        },
        {
          question: "¿Existe un nivel futbolístico mínimo?",
          answer:
            "Para 'Rosario Experience' no es excluyente. Para el 'Pro Program' SÍ se requiere una base física y técnica, ya que entrenarás a la par de jugadores federados de AFA.",
        },
        {
          question: "¿Puedo personalizar la duración?",
          answer:
            "Sí. El programa Rosario base es de 10 días y el Pro de 1 a 4 semanas, pero podemos ajustar la duración según las necesidades de tu academia.",
        },
      ],
    },
    {
      title: "Requisitos y Documentación",
      faqs: [
        {
          question: "¿Qué documentos necesito?",
          answer:
            "Pasaporte vigente, Seguro de Viajero (obligatorio) y fichas médicas provistas por ArgenGoal. Para el Pro Program es obligatorio presentar una Ergometría (apto físico cardiológico) firmada.",
        },
        {
          question: "¿Los padres pueden acompañar?",
          answer:
            "¡Sí! Los padres son bienvenidos. Brindamos opciones de alojamiento cercanos y coordinamos su participación para que puedan acompañar sin interferir en la rutina deportiva.",
        },
        {
          question: "¿Es necesario hablar español?",
          answer:
            "No necesariamente. Nuestros coordinadores manejan inglés y asistirán al grupo permanentemente. Además, podemos gestionar traductores si fuera necesario.",
        },
      ],
    },
    {
      title: "Logística y Alojamiento",
      faqs: [
        {
          question: "¿Dónde nos alojamos?",
          answer:
            "En el 'Pro Program' vivirás en la Pensión del Club (Casa Fútbol) junto a las promesas del club. En 'Rosario Experience' utilizamos Hoteles o Residencias Deportivas de calidad.",
        },
        {
          question: "¿Qué incluyen las comidas?",
          answer:
            "Pensión completa (Desayuno, Almuerzo, Merienda y Cena). La dieta es supervisada para el alto rendimiento.",
        },
        {
          question: "¿Cómo son los traslados?",
          answer:
            "ARGENGOAL cubre todos los traslados internos: recepción en aeropuerto, traslados a entrenamientos/partidos y regreso al aeropuerto.",
        },
      ],
    },
    {
      title: "Pagos y Cancelaciones (Política Oficial)",
      faqs: [
        {
          question: "¿Cuál es la política de pago?",
          answer:
            "Se requiere una Reserva inicial de USD 500 por futbolista para confirmar la plaza. El saldo restante se abona EN EFECTIVO directamente al coordinador al llegar a Argentina.",
        },
        {
          question: "¿La reserva es reembolsable?",
          answer:
            "No. La reserva de USD 500 no es reembolsable ya que cubre costos administrativos y bloqueo de cupo. Sin embargo, si avisas con antelación, podemos reprogramar la fecha del viaje.",
        },
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{category.title}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="font-semibold text-foreground pr-4 text-lg">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}