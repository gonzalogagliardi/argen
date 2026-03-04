import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | ARGENGOAL",
  description: "Política de privacidad de ARGENGOAL. Conoce cómo tratamos tus datos personales.",
  alternates: { canonical: "https://argengoal.com/privacidad" },
}

export default function PrivacyPage() {
  return (
    <main className="py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>

        <p className="text-muted-foreground mb-6">
          En ARGENGOAL nos comprometemos a proteger tu privacidad. Esta política describe cómo recopilamos, usamos y
          protegemos tu información personal.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Información que recopilamos</h2>
        <p className="text-muted-foreground mb-4">
          Recopilamos información que nos proporcionas directamente, como nombre, correo electrónico y número de
          teléfono cuando completas nuestros formularios de contacto.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Uso de la información</h2>
        <p className="text-muted-foreground mb-4">
          Utilizamos tu información únicamente para responder a tus consultas y brindarte información sobre nuestros
          programas de fútbol en Argentina.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Protección de datos</h2>
        <p className="text-muted-foreground mb-4">
          No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Contacto</h2>
        <p className="text-muted-foreground mb-4">
          Si tienes preguntas sobre esta política, escríbenos a{" "}
          <a href="mailto:contacto@argengoal.com" className="underline">
            contacto@argengoal.com
          </a>
          .
        </p>
      </div>
    </main>
  )
}
