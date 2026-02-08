"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/programas", label: "Programas" },
    { href: "/como-funciona", label: "Cómo Funciona" },
    { href: "/experiencias", label: "Experiencias" },
    { href: "/nosotros", label: "Nosotros" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Línea celeste superior AFA */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary-dark to-primary" />

      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <Image src="/logo-dark.png" alt="ARGENGOAL" width={180} height={50} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold text-foreground/80 transition-colors hover:text-primary group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-dark text-black hover:from-primary-dark hover:to-primary font-bold shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-primary/50 hover:scale-105">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground hover:text-primary transition-colors" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="lg" className="w-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold shadow-lg shadow-primary/30">
                <Link href="/contacto" onClick={() => setIsOpen(false)}>
                  Contactar
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
