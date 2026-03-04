import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | ARGENGOAL",
  description: "Términos y condiciones de uso de los servicios de ARGENGOAL.",
  alternates: { canonical: "https://argengoal.com/terminos" },
}

export default function TermsPage() {
  return (
    <main className="py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Términos y Condiciones</h1>

        <p className="text-muted-foreground mb-6">
          Al utilizar los servicios de ARGENGOAL, aceptas los siguientes términos y condiciones.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Servicios</h2>
        <p className="text-muted-foreground mb-4">
          ARGENGOAL ofrece experiencias de fútbol internacional en Argentina, incluyendo entrenamientos en clubes
          profesionales, partidos amistosos y actividades culturales en Rosario.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Reservas y Pagos</h2>
        <p className="text-muted-foreground mb-4">
          Las condiciones específicas de pago, cancelación y reembolso se detallarán en el contrato individual que se
          firma al confirmar tu participación en un programa.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Responsabilidad</h2>
        <p className="text-muted-foreground mb-4">
          ARGENGOAL no se hace responsable por lesiones, pérdidas o daños que puedan ocurrir durante las actividades,
          por lo que recomendamos contar con seguro de viaje y deportivo adecuado.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Contacto</h2>
        <p className="text-muted-foreground mb-4">
          Para consultas sobre estos términos, contáctanos en{" "}
          <a href="mailto:contacto@argengoal.com" className="underline">
            contacto@argengoal.com
          </a>
          .
        </p>
      </div>
    </main>
  )
}
