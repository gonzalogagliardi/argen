import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contacto | ARGENGOAL",
  description:
    "Ponte en contacto con ARGENGOAL. Solicita información sobre nuestros programas de fútbol en Rosario, Argentina.",
}

export default function ContactPage() {
  return (
    <main className="bg-background">
      <ContactHero />
      
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
            {/* Columna Izquierda: Información */}
            <div className="order-2 lg:order-1">
              <ContactInfo />
            </div>

            {/* Columna Derecha: Formulario */}
            <div id="form" className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}