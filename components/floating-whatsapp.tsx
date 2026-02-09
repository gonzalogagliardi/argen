"use client"

export function FloatingWhatsApp() {
  const phoneNumber = "5493413452340"
  const message = "Hola, me comunico desde la web de ARGENGOAL. Quisiera hacer una consulta."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Pulse animation ring */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75 group-hover:opacity-100" />

      {/* Button container */}
      <div className="relative bg-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
        {/* WhatsApp official icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0C7.163 0 0 7.163 0 16c0 2.828.739 5.481 2.031 7.787L0 32l8.401-2.003A15.928 15.928 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"
            fill="#25D366"
          />
          <path
            d="M25.372 22.594c-.351 1.006-1.738 1.85-2.844 2.1-.75.169-1.725.3-5.019-.994-4.231-1.662-6.975-5.956-7.188-6.231-.206-.275-1.706-2.269-1.706-4.325 0-2.056 1.081-3.069 1.463-3.488.381-.419.831-.525 1.106-.525.275 0 .55.006.794.013.256.013.6-.094.937.719.344.831 1.169 2.85 1.275 3.056.106.206.175.45.031.725-.137.275-.206.444-.413.681-.206.238-.431.531-.619.713-.206.2-.419.419-.181.819.238.4 1.057 1.744 2.269 2.825 1.556 1.394 2.868 1.831 3.275 2.031.406.2.644.169.881-.1.238-.275.994-1.163 1.263-1.563.269-.4.537-.331.906-.2.369.138 2.344 1.106 2.75 1.306.406.2.675.3.775.469.1.169.1.969-.25 1.975z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </a>
  )
}
