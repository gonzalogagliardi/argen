import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const experienceSlugs = [
  "01-experiencia-de-un-ano-de-jovenes-japoneses-en-japo",
  "02-experiencia-de-asesor-deportivo-japones-en-rosario",
  "03-experiencia-de-6-meses-de-jovenes-de-japon-en-el-c",
  "04-naoto-hikita-experiencia-de-2-anos-en-el-c-a-rosar",
  "05-experiencia-de-un-mes-del-entrenador-japones-ryota",
  "06-visita-de-directivo-japones-a-rosario-central-a-co",
  "07-matias-de-bolivia-compartiendo-entrenamiento-y-ami",
  "08-geronimo-aguilar-de-colombia",
  "09-experiencias-de-jovenes-de-nigeria",
  "10-experiencia-de-joven-de-ecuador",
  "11-nicolas-toledo-con-erik-montoya-de-usa-ny-de-padre",
  "12-experiencia-de-yoshi-y-jochi-de-republica-dominica",
  "13-los-profes-arlex-y-wilson-de-colombia-con-un-joven",
  "14-experiencias-de-chicos-de-monterrey-mexico",
  "15-adrian-sanchez-en-banfield-luego-prueba-en-riestra",
  "16-experiencia-de-juan-francisco-acurio-en-rosario-ce",
  "17-experiencia-de-rogelio-de-sonora-mexico",
  "18-paseo-por-la-ciudad-de-rosario-experiencia-pro-202",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://argengoal.com"
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/programas`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/experiencias`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/como-funciona`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ]

  const experienceRoutes: MetadataRoute.Sitemap = experienceSlugs.map((slug) => ({
    url: `${base}/experiencias/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...experienceRoutes]
}
