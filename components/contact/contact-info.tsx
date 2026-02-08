import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Información de Contacto</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          ¿Prefieres hablar directamente con nosotros? Estamos disponibles para resolver dudas de familias y clubes.
        </p>

        <div className="space-y-4">
          {/* Email */}
          <Card className="p-6 border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:contacto@argengoal.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contacto@argengoal.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">Respuesta en 24hs hábiles</p>
              </div>
            </div>
          </Card>

          {/* Teléfono / WhatsApp Principal */}
          <Card className="p-6 border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">WhatsApp & Teléfono</h3>
                <p className="text-muted-foreground font-medium">+54 9 341 559-8169</p>
                <p className="text-sm text-muted-foreground mt-1">Atención directa ArgenGoal</p>
              </div>
            </div>
          </Card>

          {/* Ubicación */}
          <Card className="p-6 border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Base Operativa</h3>
                <p className="text-muted-foreground">Rosario, Santa Fe</p>
                <p className="text-muted-foreground">Argentina</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Videollamada CTA */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="font-semibold text-foreground mb-3">¿Prefieres una Videollamada?</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Como dice nuestro proceso: el primer paso ideal es una reunión virtual para conocernos y explicarte los detalles.
        </p>
        <Button asChild variant="outline" className="w-full bg-background hover:bg-background/80 border-primary/30 text-primary">
           {/* Aquí podrías poner un link a Calendly si tienes, o al mismo form */}
           <Link href="#form">Solicitar Reunión</Link>
        </Button>
      </Card>
    </div>
  )
}