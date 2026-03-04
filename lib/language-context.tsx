"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language, type Translations } from "./translations"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("es")

  useEffect(() => {
    const saved = localStorage.getItem("argengoal-lang") as Language
    if (saved === "es" || saved === "en") setLangState(saved)
  }, [])

  const setLang = (l: Language) => {
    setLangState(l)
    localStorage.setItem("argengoal-lang", l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
