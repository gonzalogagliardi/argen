"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/lib/language-context"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useLanguage()
  const s = t.contactForm

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    alert(s.successAlert)
    setIsSubmitting(false)
  }

  return (
    <Card className="p-8 border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">{s.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">{s.firstName}</Label>
            <Input id="firstName" name="firstName" required placeholder={s.firstNamePlaceholder} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">{s.lastName}</Label>
            <Input id="lastName" name="lastName" required placeholder={s.lastNamePlaceholder} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{s.email}</Label>
          <Input id="email" name="email" type="email" required placeholder="tu@email.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">{s.phone}</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+1 234 567 8900" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">{s.country}</Label>
          <Input id="country" name="country" required placeholder={s.countryPlaceholder} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="program">{s.program}</Label>
          <Select name="program">
            <SelectTrigger>
              <SelectValue placeholder={s.programPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rosario">{s.programRosario}</SelectItem>
              <SelectItem value="pro">{s.programPro}</SelectItem>
              <SelectItem value="both">{s.programBoth}</SelectItem>
              <SelectItem value="other">{s.programOther}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="participants">{s.participants}</Label>
          <Input id="participants" name="participants" type="number" min="1" placeholder={s.participantsPlaceholder} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{s.message}</Label>
          <Textarea id="message" name="message" required placeholder={s.messagePlaceholder} rows={6} />
        </div>

        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground" disabled={isSubmitting}>
          {isSubmitting ? s.submitting : s.submit}
        </Button>

        <p className="text-sm text-muted-foreground text-center">{s.footer}</p>
      </form>
    </Card>
  )
}
