import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-muted/30">
      {/* Línea celeste superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-primary" />

      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image src="/logo-dark.png" alt="argengoal" width={160} height={45} className="h-9 w-auto mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-medium">
              Experiencias de fútbol élite en el corazón de Argentina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/programas"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Programas
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/como-funciona"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link
                  href="/experiencias"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Experiencias
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Recursos</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 text-primary shrink-0" />
                <a
                  href="mailto:contacto@argengoal.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  contacto@argengoal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground font-medium">+54 9 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground font-medium">Rosario, Santa Fe, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary/20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center lg:text-left font-medium">
              © {new Date().getFullYear()} argengoal. Todos los derechos reservados.
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacidad"
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Privacidad
              </Link>
              <Link href="/terminos" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
