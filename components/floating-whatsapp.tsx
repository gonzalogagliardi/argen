"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)

  // WhatsApp number oficial de ARGENGOAL
  const whatsappNumber = "5493413452340"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
    >
      {/* Desktop label - hidden on mobile */}
      <span className="hidden md:block pl-5 pr-2 py-3 font-medium text-sm whitespace-nowrap">Hablar por WhatsApp</span>

      {/* Icon */}
      <div className="p-4 md:p-3">
        <MessageCircle className="h-6 w-6" />
      </div>
    </a>
  )
}
