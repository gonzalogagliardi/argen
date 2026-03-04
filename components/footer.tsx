"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()
  const f = t.footer
  const nav = t.nav

  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-br from-foreground/95 via-foreground to-foreground/95 text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-primary" />
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-dark.png"
              alt="argengoal"
              width={160}
              height={45}
              className="h-9 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-sm text-white/70 leading-relaxed max-w-xs font-medium">{f.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6">{f.quickLinks}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/programas" className="text-sm text-white/70 hover:text-primary transition-colors font-medium">
                  {nav.programs}
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-sm text-white/70 hover:text-primary transition-colors font-medium">
                  {nav.about}
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="text-sm text-white/70 hover:text-primary transition-colors font-medium">
                  {nav.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="/experiencias" className="text-sm text-white/70 hover:text-primary transition-colors font-medium">
                  {nav.experiences}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-6">{f.resources}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/contacto" className="text-sm text-white/70 hover:text-primary transition-colors font-medium">
                  {nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-6">{f.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 text-primary shrink-0" />
                <a
                  href="mailto:contacto@argengoal.com"
                  className="text-sm text-white/70 hover:text-primary transition-colors font-medium"
                >
                  contacto@argengoal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 text-primary shrink-0" />
                <span className="text-sm text-white/70 font-medium">+54 9 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />
                <span className="text-sm text-white/70 font-medium">Rosario, Santa Fe, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50 text-center lg:text-left font-medium">
              © {new Date().getFullYear()} argengoal. {f.rights}
            </p>
            <div className="flex gap-8">
              <Link href="/privacidad" className="text-sm text-white/50 hover:text-primary transition-colors font-medium">
                {f.privacy}
              </Link>
              <Link href="/terminos" className="text-sm text-white/50 hover:text-primary transition-colors font-medium">
                {f.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
