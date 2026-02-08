import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function FaqContact() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            ¿No Encontraste tu Respuesta?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Nuestro equipo está listo para responder cualquier pregunta adicional que tengas
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground">
            <Link href="/contacto">Contactar con Nosotros</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
