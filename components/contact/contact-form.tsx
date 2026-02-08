"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.")
    setIsSubmitting(false)
  }

  return (
    <Card className="p-8 border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">Envíanos un Mensaje</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Nombre *</Label>
            <Input id="firstName" name="firstName" required placeholder="Tu nombre" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Apellido *</Label>
            <Input id="lastName" name="lastName" required placeholder="Tu apellido" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required placeholder="tu@email.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+1 234 567 8900" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">País *</Label>
          <Input id="country" name="country" required placeholder="Tu país" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="program">Programa de Interés</Label>
          <Select name="program">
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un programa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rosario">Rosario Experience</SelectItem>
              <SelectItem value="pro">Pro Program</SelectItem>
              <SelectItem value="both">Ambos programas</SelectItem>
              <SelectItem value="other">Consulta general</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="participants">Número de Participantes</Label>
          <Input id="participants" name="participants" type="number" min="1" placeholder="Ejemplo: 20" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensaje *</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Cuéntanos sobre tu equipo, objetivos y cualquier pregunta que tengas..."
            rows={6}
          />
        </div>

        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          * Campos obligatorios. Responderemos en 24-48 horas.
        </p>
      </form>
    </Card>
  )
}
