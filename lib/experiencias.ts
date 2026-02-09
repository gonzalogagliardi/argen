export type ExperienceItem =
  | {
      type: "experience"
      title: string
      category: "teams" | "academies" | "tournaments"
      country: string
      participants: number
      date: string
      image: string
      description: string
    }
  | {
      type: "article"
      title: string
      category: "players" | "coaches" | "blog"
      slug: string
      date: string
      readTime: string
      image: string
      description: string
      content?: string[]
      gallery?: string[]
    }

export const EXPERIENCES: ExperienceItem[] = [
  

  // Experiencias reales con galerías (18 nuevas)
  {
    title: "Experiencia de un año de jóvenes japoneses en Japón",
    category: "players",
    type: "article",
    slug: "01-experiencia-de-un-ano-de-jovenes-japoneses-en-japo",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/01%20-%20Experiencia%20de%20un%20a%C3%B1o%20de%20j%C3%B3venes%20japoneses%20en%20Jap%C3%B3/experiencia-de-un-a%C3%B1o-de-j%C3%B3venes-japoneses-en-jap%C3%B3-031.webp",
    description: "Experiencia de un año de jóvenes japoneses en Japón y de asesor deportivo",
    content: [
      "Experiencia de un año de jóvenes japoneses en Japón y de asesor deportivo"
    ],
    gallery: [
      "/gallery/01%20-%20Experiencia%20de%20un%20a%C3%B1o%20de%20j%C3%B3venes%20japoneses%20en%20Jap%C3%B3/experiencia-de-un-a%C3%B1o-de-j%C3%B3venes-japoneses-en-jap%C3%B3-031.webp",
      "/gallery/01%20-%20Experiencia%20de%20un%20a%C3%B1o%20de%20j%C3%B3venes%20japoneses%20en%20Jap%C3%B3/experiencia-de-un-a%C3%B1o-de-j%C3%B3venes-japoneses-en-jap%C3%B3-034.webp",
      "/gallery/01%20-%20Experiencia%20de%20un%20a%C3%B1o%20de%20j%C3%B3venes%20japoneses%20en%20Jap%C3%B3/experiencia-de-un-a%C3%B1o-de-j%C3%B3venes-japoneses-en-jap%C3%B3-036.webp",
      "/gallery/01%20-%20Experiencia%20de%20un%20a%C3%B1o%20de%20j%C3%B3venes%20japoneses%20en%20Jap%C3%B3/experiencia-de-un-a%C3%B1o-de-j%C3%B3venes-japoneses-en-jap%C3%B3-022.webp",
      "/gallery/01%20-%20Experiencia%20de%20un%20a%C3%B1o%20de%20j%C3%B3venes%20japoneses%20en%20Jap%C3%B3/experiencia-de-un-a%C3%B1o-de-j%C3%B3venes-japoneses-en-jap%C3%B3-023.webp",
      "/gallery/01%20-%20Experiencia%20de%20un%20a%C3%B1o%20de%20j%C3%B3venes%20japoneses%20en%20Jap%C3%B3/experiencia-de-un-a%C3%B1o-de-j%C3%B3venes-japoneses-en-jap%C3%B3-024.webp",
      "/gallery/01%20-%20Experiencia%20de%20un%20a%C3%B1o%20de%20j%C3%B3venes%20japoneses%20en%20Jap%C3%B3/experiencia-de-un-a%C3%B1o-de-j%C3%B3venes-japoneses-en-jap%C3%B3-025.webp",
      "/gallery/01%20-%20Experiencia%20de%20un%20a%C3%B1o%20de%20j%C3%B3venes%20japoneses%20en%20Jap%C3%B3/experiencia-de-un-a%C3%B1o-de-j%C3%B3venes-japoneses-en-jap%C3%B3-037.webp",
      "/gallery/01%20-%20Experiencia%20de%20un%20a%C3%B1o%20de%20j%C3%B3venes%20japoneses%20en%20Jap%C3%B3/experiencia-de-un-a%C3%B1o-de-j%C3%B3venes-japoneses-en-jap%C3%B3-038.webp",
      "/gallery/01%20-%20Experiencia%20de%20un%20a%C3%B1o%20de%20j%C3%B3venes%20japoneses%20en%20Jap%C3%B3/experiencia-de-un-a%C3%B1o-de-j%C3%B3venes-japoneses-en-jap%C3%B3-028.webp"
    ]
  },

  {
    title: "Experiencia de asesor deportivo japonés en Rosario",
    category: "coaches",
    type: "article",
    slug: "02-experiencia-de-asesor-deportivo-japones-en-rosario",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/02%20-%20Experiencia%20de%20asesor%20deportivo%20japon%C3%A9s%20en%20Rosario/experiencia-de-asesor-deportivo-japon%C3%A9s-en-rosario-001.webp",
    description: "Experiencia de asesor deportivo japonés en Rosario (Central y Newells)",
    content: [
      "Experiencia de asesor deportivo japonés en Rosario (Central y Newells)"
    ],
    gallery: [
      "/gallery/02%20-%20Experiencia%20de%20asesor%20deportivo%20japon%C3%A9s%20en%20Rosario/experiencia-de-asesor-deportivo-japon%C3%A9s-en-rosario-001.webp",
      "/gallery/02%20-%20Experiencia%20de%20asesor%20deportivo%20japon%C3%A9s%20en%20Rosario/experiencia-de-asesor-deportivo-japon%C3%A9s-en-rosario-014.webp",
      "/gallery/02%20-%20Experiencia%20de%20asesor%20deportivo%20japon%C3%A9s%20en%20Rosario/experiencia-de-asesor-deportivo-japon%C3%A9s-en-rosario-016.webp",
      "/gallery/02%20-%20Experiencia%20de%20asesor%20deportivo%20japon%C3%A9s%20en%20Rosario/experiencia-de-asesor-deportivo-japon%C3%A9s-en-rosario-004.webp",
      "/gallery/02%20-%20Experiencia%20de%20asesor%20deportivo%20japon%C3%A9s%20en%20Rosario/experiencia-de-asesor-deportivo-japon%C3%A9s-en-rosario-018.webp",
      "/gallery/02%20-%20Experiencia%20de%20asesor%20deportivo%20japon%C3%A9s%20en%20Rosario/experiencia-de-asesor-deportivo-japon%C3%A9s-en-rosario-006.webp",
      "/gallery/02%20-%20Experiencia%20de%20asesor%20deportivo%20japon%C3%A9s%20en%20Rosario/experiencia-de-asesor-deportivo-japon%C3%A9s-en-rosario-019.webp",
      "/gallery/02%20-%20Experiencia%20de%20asesor%20deportivo%20japon%C3%A9s%20en%20Rosario/experiencia-de-asesor-deportivo-japon%C3%A9s-en-rosario-008.webp",
      "/gallery/02%20-%20Experiencia%20de%20asesor%20deportivo%20japon%C3%A9s%20en%20Rosario/experiencia-de-asesor-deportivo-japon%C3%A9s-en-rosario-021.webp",
      "/gallery/02%20-%20Experiencia%20de%20asesor%20deportivo%20japon%C3%A9s%20en%20Rosario/experiencia-de-asesor-deportivo-japon%C3%A9s-en-rosario-023.webp"
    ]
  },

  {
    title: "Experiencia de 6 meses de jóvenes de Japón en el C. A. Rosario Central",
    category: "players",
    type: "article",
    slug: "03-experiencia-de-6-meses-de-jovenes-de-japon-en-el-c",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/03%20-%20Experiencia%20de%206%20meses%20de%20j%C3%B3venes%20de%20Jap%C3%B3n%20en%20el%20C/experiencia-de-6-meses-de-j%C3%B3venes-de-jap%C3%B3n-en-el-c-001.webp",
    description: "Experiencia de 6 meses de jóvenes de Japón en el C. A. Rosario Central",
    content: [
      "Experiencia de 6 meses de jóvenes de Japón en el C. A. Rosario Central"
    ],
    gallery: [
      "/gallery/03%20-%20Experiencia%20de%206%20meses%20de%20j%C3%B3venes%20de%20Jap%C3%B3n%20en%20el%20C/experiencia-de-6-meses-de-j%C3%B3venes-de-jap%C3%B3n-en-el-c-001.webp",
      "/gallery/03%20-%20Experiencia%20de%206%20meses%20de%20j%C3%B3venes%20de%20Jap%C3%B3n%20en%20el%20C/experiencia-de-6-meses-de-j%C3%B3venes-de-jap%C3%B3n-en-el-c-002.webp",
      "/gallery/03%20-%20Experiencia%20de%206%20meses%20de%20j%C3%B3venes%20de%20Jap%C3%B3n%20en%20el%20C/experiencia-de-6-meses-de-j%C3%B3venes-de-jap%C3%B3n-en-el-c-013.webp",
      "/gallery/03%20-%20Experiencia%20de%206%20meses%20de%20j%C3%B3venes%20de%20Jap%C3%B3n%20en%20el%20C/experiencia-de-6-meses-de-j%C3%B3venes-de-jap%C3%B3n-en-el-c-014.webp",
      "/gallery/03%20-%20Experiencia%20de%206%20meses%20de%20j%C3%B3venes%20de%20Jap%C3%B3n%20en%20el%20C/experiencia-de-6-meses-de-j%C3%B3venes-de-jap%C3%B3n-en-el-c-005.webp",
      "/gallery/03%20-%20Experiencia%20de%206%20meses%20de%20j%C3%B3venes%20de%20Jap%C3%B3n%20en%20el%20C/experiencia-de-6-meses-de-j%C3%B3venes-de-jap%C3%B3n-en-el-c-017.webp",
      "/gallery/03%20-%20Experiencia%20de%206%20meses%20de%20j%C3%B3venes%20de%20Jap%C3%B3n%20en%20el%20C/experiencia-de-6-meses-de-j%C3%B3venes-de-jap%C3%B3n-en-el-c-007.webp",
      "/gallery/03%20-%20Experiencia%20de%206%20meses%20de%20j%C3%B3venes%20de%20Jap%C3%B3n%20en%20el%20C/experiencia-de-6-meses-de-j%C3%B3venes-de-jap%C3%B3n-en-el-c-019.webp",
      "/gallery/03%20-%20Experiencia%20de%206%20meses%20de%20j%C3%B3venes%20de%20Jap%C3%B3n%20en%20el%20C/experiencia-de-6-meses-de-j%C3%B3venes-de-jap%C3%B3n-en-el-c-009.webp",
      "/gallery/03%20-%20Experiencia%20de%206%20meses%20de%20j%C3%B3venes%20de%20Jap%C3%B3n%20en%20el%20C/experiencia-de-6-meses-de-j%C3%B3venes-de-jap%C3%B3n-en-el-c-010.webp"
    ]
  },

  {
    title: "Naoto Hikita experiencia de 2 años en el C. A. Rosario Central",
    category: "players",
    type: "article",
    slug: "04-naoto-hikita-experiencia-de-2-anos-en-el-c-a-rosar",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/04%20-%20Naoto%20Hikita%20experiencia%20de%202%20a%C3%B1os%20en%20el%20C%20A%20Rosar/naoto-hikita-experiencia-de-2-a%C3%B1os-en-el-c-a-rosar-012.webp",
    description: "Naoto Hikita, experiencia de 2 años en el C. A. Rosario Central",
    content: [
      "Naoto Hikita, experiencia de 2 años en el C. A. Rosario Central"
    ],
    gallery: [
      "/gallery/04%20-%20Naoto%20Hikita%20experiencia%20de%202%20a%C3%B1os%20en%20el%20C%20A%20Rosar/naoto-hikita-experiencia-de-2-a%C3%B1os-en-el-c-a-rosar-012.webp",
      "/gallery/04%20-%20Naoto%20Hikita%20experiencia%20de%202%20a%C3%B1os%20en%20el%20C%20A%20Rosar/naoto-hikita-experiencia-de-2-a%C3%B1os-en-el-c-a-rosar-014.webp",
      "/gallery/04%20-%20Naoto%20Hikita%20experiencia%20de%202%20a%C3%B1os%20en%20el%20C%20A%20Rosar/naoto-hikita-experiencia-de-2-a%C3%B1os-en-el-c-a-rosar-017.webp",
      "/gallery/04%20-%20Naoto%20Hikita%20experiencia%20de%202%20a%C3%B1os%20en%20el%20C%20A%20Rosar/naoto-hikita-experiencia-de-2-a%C3%B1os-en-el-c-a-rosar-018.webp",
      "/gallery/04%20-%20Naoto%20Hikita%20experiencia%20de%202%20a%C3%B1os%20en%20el%20C%20A%20Rosar/naoto-hikita-experiencia-de-2-a%C3%B1os-en-el-c-a-rosar-019.webp",
      "/gallery/04%20-%20Naoto%20Hikita%20experiencia%20de%202%20a%C3%B1os%20en%20el%20C%20A%20Rosar/naoto-hikita-experiencia-de-2-a%C3%B1os-en-el-c-a-rosar-020.webp",
      "/gallery/04%20-%20Naoto%20Hikita%20experiencia%20de%202%20a%C3%B1os%20en%20el%20C%20A%20Rosar/naoto-hikita-experiencia-de-2-a%C3%B1os-en-el-c-a-rosar-024.webp",
      "/gallery/04%20-%20Naoto%20Hikita%20experiencia%20de%202%20a%C3%B1os%20en%20el%20C%20A%20Rosar/naoto-hikita-experiencia-de-2-a%C3%B1os-en-el-c-a-rosar-025.webp",
      "/gallery/04%20-%20Naoto%20Hikita%20experiencia%20de%202%20a%C3%B1os%20en%20el%20C%20A%20Rosar/naoto-hikita-experiencia-de-2-a%C3%B1os-en-el-c-a-rosar-026.webp",
      "/gallery/04%20-%20Naoto%20Hikita%20experiencia%20de%202%20a%C3%B1os%20en%20el%20C%20A%20Rosar/naoto-hikita-experiencia-de-2-a%C3%B1os-en-el-c-a-rosar-027.webp"
    ]
  },

  {
    title: "Experiencia de un mes del entrenador japonés Ryota Henzan",
    category: "coaches",
    type: "article",
    slug: "05-experiencia-de-un-mes-del-entrenador-japones-ryota",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/05%20-%20Experiencia%20de%20un%20mes%20del%20entrenador%20japon%C3%A9s%20Ryota/experiencia-de-un-mes-del-entrenador-japon%C3%A9s-ryota-001.webp",
    description: "Experiencia de un mes del entrenador japonés Ryota Henzan. En Newell's y Rosario Central",
    content: [
      "Experiencia de un mes del entrenador japonés Ryota Henzan. En Newell's y Rosario Central"
    ],
    gallery: [
      "/gallery/05%20-%20Experiencia%20de%20un%20mes%20del%20entrenador%20japon%C3%A9s%20Ryota/experiencia-de-un-mes-del-entrenador-japon%C3%A9s-ryota-001.webp",
      "/gallery/05%20-%20Experiencia%20de%20un%20mes%20del%20entrenador%20japon%C3%A9s%20Ryota/experiencia-de-un-mes-del-entrenador-japon%C3%A9s-ryota-002.webp",
      "/gallery/05%20-%20Experiencia%20de%20un%20mes%20del%20entrenador%20japon%C3%A9s%20Ryota/experiencia-de-un-mes-del-entrenador-japon%C3%A9s-ryota-003.webp",
      "/gallery/05%20-%20Experiencia%20de%20un%20mes%20del%20entrenador%20japon%C3%A9s%20Ryota/experiencia-de-un-mes-del-entrenador-japon%C3%A9s-ryota-004.webp",
      "/gallery/05%20-%20Experiencia%20de%20un%20mes%20del%20entrenador%20japon%C3%A9s%20Ryota/experiencia-de-un-mes-del-entrenador-japon%C3%A9s-ryota-005.webp",
      "/gallery/05%20-%20Experiencia%20de%20un%20mes%20del%20entrenador%20japon%C3%A9s%20Ryota/experiencia-de-un-mes-del-entrenador-japon%C3%A9s-ryota-006.webp",
      "/gallery/05%20-%20Experiencia%20de%20un%20mes%20del%20entrenador%20japon%C3%A9s%20Ryota/experiencia-de-un-mes-del-entrenador-japon%C3%A9s-ryota-007.webp",
      "/gallery/05%20-%20Experiencia%20de%20un%20mes%20del%20entrenador%20japon%C3%A9s%20Ryota/experiencia-de-un-mes-del-entrenador-japon%C3%A9s-ryota-008.webp",
      "/gallery/05%20-%20Experiencia%20de%20un%20mes%20del%20entrenador%20japon%C3%A9s%20Ryota/experiencia-de-un-mes-del-entrenador-japon%C3%A9s-ryota-009.webp",
      "/gallery/05%20-%20Experiencia%20de%20un%20mes%20del%20entrenador%20japon%C3%A9s%20Ryota/experiencia-de-un-mes-del-entrenador-japon%C3%A9s-ryota-010.webp"
    ]
  },

  {
    title: "Visita de directivo Japonés a Rosario Central",
    category: "coaches",
    type: "article",
    slug: "06-visita-de-directivo-japones-a-rosario-central-a-co",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/06%20-%20Visita%20de%20directivo%20Japon%C3%A9s%20a%20Rosario%20Central%20a%20co/visita-de-directivo-japon%C3%A9s-a-rosario-central-a-co-001.webp",
    description: "Visita de directivo Japonés a Rosario Central a conocer la metodología",
    content: [
      "Visita de directivo Japonés a Rosario Central a conocer la metodología"
    ],
    gallery: [
      "/gallery/06%20-%20Visita%20de%20directivo%20Japon%C3%A9s%20a%20Rosario%20Central%20a%20co/visita-de-directivo-japon%C3%A9s-a-rosario-central-a-co-001.webp",
      "/gallery/06%20-%20Visita%20de%20directivo%20Japon%C3%A9s%20a%20Rosario%20Central%20a%20co/visita-de-directivo-japon%C3%A9s-a-rosario-central-a-co-002.webp",
      "/gallery/06%20-%20Visita%20de%20directivo%20Japon%C3%A9s%20a%20Rosario%20Central%20a%20co/visita-de-directivo-japon%C3%A9s-a-rosario-central-a-co-003.webp",
      "/gallery/06%20-%20Visita%20de%20directivo%20Japon%C3%A9s%20a%20Rosario%20Central%20a%20co/visita-de-directivo-japon%C3%A9s-a-rosario-central-a-co-004.webp",
      "/gallery/06%20-%20Visita%20de%20directivo%20Japon%C3%A9s%20a%20Rosario%20Central%20a%20co/visita-de-directivo-japon%C3%A9s-a-rosario-central-a-co-005.webp",
      "/gallery/06%20-%20Visita%20de%20directivo%20Japon%C3%A9s%20a%20Rosario%20Central%20a%20co/visita-de-directivo-japon%C3%A9s-a-rosario-central-a-co-006.webp",
      "/gallery/06%20-%20Visita%20de%20directivo%20Japon%C3%A9s%20a%20Rosario%20Central%20a%20co/visita-de-directivo-japon%C3%A9s-a-rosario-central-a-co-007.webp",
      "/gallery/06%20-%20Visita%20de%20directivo%20Japon%C3%A9s%20a%20Rosario%20Central%20a%20co/visita-de-directivo-japon%C3%A9s-a-rosario-central-a-co-008.webp",
      "/gallery/06%20-%20Visita%20de%20directivo%20Japon%C3%A9s%20a%20Rosario%20Central%20a%20co/visita-de-directivo-japon%C3%A9s-a-rosario-central-a-co-009.webp",
      "/gallery/06%20-%20Visita%20de%20directivo%20Japon%C3%A9s%20a%20Rosario%20Central%20a%20co/visita-de-directivo-japon%C3%A9s-a-rosario-central-a-co-010.webp"
    ]
  },

  {
    title: "Matías de Bolivia compartiendo entrenamiento con James de Australia",
    category: "players",
    type: "article",
    slug: "07-matias-de-bolivia-compartiendo-entrenamiento-y-ami",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/07%20-%20Mat%C3%ADas%20de%20Bolivia%20compartiendo%20entrenamiento%20y%20ami/mat%C3%ADas-de-bolivia-compartiendo-entrenamiento-y-ami-001.webp",
    description: "Matías de Bolivia, compartiendo entrenamiento y amistad con James, de Australia",
    content: [
      "Matías de Bolivia, compartiendo entrenamiento y amistad con James, de Australia"
    ],
    gallery: [
      "/gallery/07%20-%20Mat%C3%ADas%20de%20Bolivia%20compartiendo%20entrenamiento%20y%20ami/mat%C3%ADas-de-bolivia-compartiendo-entrenamiento-y-ami-001.webp",
      "/gallery/07%20-%20Mat%C3%ADas%20de%20Bolivia%20compartiendo%20entrenamiento%20y%20ami/mat%C3%ADas-de-bolivia-compartiendo-entrenamiento-y-ami-002.webp",
      "/gallery/07%20-%20Mat%C3%ADas%20de%20Bolivia%20compartiendo%20entrenamiento%20y%20ami/mat%C3%ADas-de-bolivia-compartiendo-entrenamiento-y-ami-003.webp",
      "/gallery/07%20-%20Mat%C3%ADas%20de%20Bolivia%20compartiendo%20entrenamiento%20y%20ami/mat%C3%ADas-de-bolivia-compartiendo-entrenamiento-y-ami-004.webp",
      "/gallery/07%20-%20Mat%C3%ADas%20de%20Bolivia%20compartiendo%20entrenamiento%20y%20ami/mat%C3%ADas-de-bolivia-compartiendo-entrenamiento-y-ami-005.webp",
      "/gallery/07%20-%20Mat%C3%ADas%20de%20Bolivia%20compartiendo%20entrenamiento%20y%20ami/mat%C3%ADas-de-bolivia-compartiendo-entrenamiento-y-ami-006.webp",
      "/gallery/07%20-%20Mat%C3%ADas%20de%20Bolivia%20compartiendo%20entrenamiento%20y%20ami/mat%C3%ADas-de-bolivia-compartiendo-entrenamiento-y-ami-007.webp",
      "/gallery/07%20-%20Mat%C3%ADas%20de%20Bolivia%20compartiendo%20entrenamiento%20y%20ami/mat%C3%ADas-de-bolivia-compartiendo-entrenamiento-y-ami-011.webp",
      "/gallery/07%20-%20Mat%C3%ADas%20de%20Bolivia%20compartiendo%20entrenamiento%20y%20ami/mat%C3%ADas-de-bolivia-compartiendo-entrenamiento-y-ami-009.webp",
      "/gallery/07%20-%20Mat%C3%ADas%20de%20Bolivia%20compartiendo%20entrenamiento%20y%20ami/mat%C3%ADas-de-bolivia-compartiendo-entrenamiento-y-ami-010.webp"
    ]
  },

  {
    title: "Gerónimo Aguilar de Colombia",
    category: "players",
    type: "article",
    slug: "08-geronimo-aguilar-de-colombia",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/08%20-%20Ger%C3%B3nimo%20Aguilar%20de%20Colombia/ger%C3%B3nimo-aguilar-de-colombia-001.webp",
    description: "Gerónimo Aguilar, de Colombia",
    content: [
      "Gerónimo Aguilar, de Colombia"
    ],
    gallery: [
      "/gallery/08%20-%20Ger%C3%B3nimo%20Aguilar%20de%20Colombia/ger%C3%B3nimo-aguilar-de-colombia-001.webp",
      "/gallery/08%20-%20Ger%C3%B3nimo%20Aguilar%20de%20Colombia/ger%C3%B3nimo-aguilar-de-colombia-002.webp",
      "/gallery/08%20-%20Ger%C3%B3nimo%20Aguilar%20de%20Colombia/ger%C3%B3nimo-aguilar-de-colombia-003.webp",
      "/gallery/08%20-%20Ger%C3%B3nimo%20Aguilar%20de%20Colombia/ger%C3%B3nimo-aguilar-de-colombia-004.webp",
      "/gallery/08%20-%20Ger%C3%B3nimo%20Aguilar%20de%20Colombia/ger%C3%B3nimo-aguilar-de-colombia-005.webp",
      "/gallery/08%20-%20Ger%C3%B3nimo%20Aguilar%20de%20Colombia/ger%C3%B3nimo-aguilar-de-colombia-006.webp",
      "/gallery/08%20-%20Ger%C3%B3nimo%20Aguilar%20de%20Colombia/ger%C3%B3nimo-aguilar-de-colombia-007.webp",
      "/gallery/08%20-%20Ger%C3%B3nimo%20Aguilar%20de%20Colombia/ger%C3%B3nimo-aguilar-de-colombia-008.webp",
      "/gallery/08%20-%20Ger%C3%B3nimo%20Aguilar%20de%20Colombia/ger%C3%B3nimo-aguilar-de-colombia-009.webp",
      "/gallery/08%20-%20Ger%C3%B3nimo%20Aguilar%20de%20Colombia/ger%C3%B3nimo-aguilar-de-colombia-010.webp"
    ]
  },

  {
    title: "Experiencias de jóvenes de Nigeria",
    category: "players",
    type: "article",
    slug: "09-experiencias-de-jovenes-de-nigeria",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/09%20-%20Experiencias%20de%20j%C3%B3venes%20de%20Nigeria/experiencias-de-j%C3%B3venes-de-nigeria-001.webp",
    description: "Experiencias de jóvenes de Nigeria",
    content: [
      "Experiencias de jóvenes de Nigeria"
    ],
    gallery: [
      "/gallery/09%20-%20Experiencias%20de%20j%C3%B3venes%20de%20Nigeria/experiencias-de-j%C3%B3venes-de-nigeria-001.webp",
      "/gallery/09%20-%20Experiencias%20de%20j%C3%B3venes%20de%20Nigeria/experiencias-de-j%C3%B3venes-de-nigeria-002.webp",
      "/gallery/09%20-%20Experiencias%20de%20j%C3%B3venes%20de%20Nigeria/experiencias-de-j%C3%B3venes-de-nigeria-003.webp",
      "/gallery/09%20-%20Experiencias%20de%20j%C3%B3venes%20de%20Nigeria/experiencias-de-j%C3%B3venes-de-nigeria-004.webp",
      "/gallery/09%20-%20Experiencias%20de%20j%C3%B3venes%20de%20Nigeria/experiencias-de-j%C3%B3venes-de-nigeria-005.webp",
      "/gallery/09%20-%20Experiencias%20de%20j%C3%B3venes%20de%20Nigeria/experiencias-de-j%C3%B3venes-de-nigeria-006.webp",
      "/gallery/09%20-%20Experiencias%20de%20j%C3%B3venes%20de%20Nigeria/experiencias-de-j%C3%B3venes-de-nigeria-007.webp",
      "/gallery/09%20-%20Experiencias%20de%20j%C3%B3venes%20de%20Nigeria/experiencias-de-j%C3%B3venes-de-nigeria-008.webp",
      "/gallery/09%20-%20Experiencias%20de%20j%C3%B3venes%20de%20Nigeria/experiencias-de-j%C3%B3venes-de-nigeria-009.webp",
      "/gallery/09%20-%20Experiencias%20de%20j%C3%B3venes%20de%20Nigeria/experiencias-de-j%C3%B3venes-de-nigeria-010.webp"
    ]
  },

  {
    title: "Experiencia de joven de Ecuador",
    category: "players",
    type: "article",
    slug: "10-experiencia-de-joven-de-ecuador",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/10%20-%20Experiencia%20de%20joven%20de%20ecuador/experiencia-de-joven-de-ecuador-001.webp",
    description: "Experiencia de joven de ecuador",
    content: [
      "Experiencia de joven de ecuador"
    ],
    gallery: [
      "/gallery/10%20-%20Experiencia%20de%20joven%20de%20ecuador/experiencia-de-joven-de-ecuador-001.webp",
      "/gallery/10%20-%20Experiencia%20de%20joven%20de%20ecuador/experiencia-de-joven-de-ecuador-002.webp",
      "/gallery/10%20-%20Experiencia%20de%20joven%20de%20ecuador/experiencia-de-joven-de-ecuador-003.webp",
      "/gallery/10%20-%20Experiencia%20de%20joven%20de%20ecuador/experiencia-de-joven-de-ecuador-004.webp",
      "/gallery/10%20-%20Experiencia%20de%20joven%20de%20ecuador/experiencia-de-joven-de-ecuador-005.webp",
      "/gallery/10%20-%20Experiencia%20de%20joven%20de%20ecuador/experiencia-de-joven-de-ecuador-006.webp",
      "/gallery/10%20-%20Experiencia%20de%20joven%20de%20ecuador/experiencia-de-joven-de-ecuador-007.webp",
      "/gallery/10%20-%20Experiencia%20de%20joven%20de%20ecuador/experiencia-de-joven-de-ecuador-008.webp",
      "/gallery/10%20-%20Experiencia%20de%20joven%20de%20ecuador/experiencia-de-joven-de-ecuador-009.webp",
      "/gallery/10%20-%20Experiencia%20de%20joven%20de%20ecuador/experiencia-de-joven-de-ecuador-010.webp"
    ]
  },

  {
    title: "Nicolás Toledo con Erik Montoya de USA NY - De padres colombianos",
    category: "players",
    type: "article",
    slug: "11-nicolas-toledo-con-erik-montoya-de-usa-ny-de-padre",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/11%20-%20Nicol%C3%A1s%20Toledo%20con%20Erik%20Montoya%20de%20USA%20NY%20De%20padre/nicol%C3%A1s-toledo-con-erik-montoya-de-usa-ny-de-padre-001.webp",
    description: "Nicolás Toledo, con Erik Montoya de USA, NY. De padres colombianos",
    content: [
      "Nicolás Toledo, con Erik Montoya de USA, NY. De padres colombianos"
    ],
    gallery: [
      "/gallery/11%20-%20Nicol%C3%A1s%20Toledo%20con%20Erik%20Montoya%20de%20USA%20NY%20De%20padre/nicol%C3%A1s-toledo-con-erik-montoya-de-usa-ny-de-padre-001.webp",
      "/gallery/11%20-%20Nicol%C3%A1s%20Toledo%20con%20Erik%20Montoya%20de%20USA%20NY%20De%20padre/nicol%C3%A1s-toledo-con-erik-montoya-de-usa-ny-de-padre-002.webp",
      "/gallery/11%20-%20Nicol%C3%A1s%20Toledo%20con%20Erik%20Montoya%20de%20USA%20NY%20De%20padre/nicol%C3%A1s-toledo-con-erik-montoya-de-usa-ny-de-padre-003.webp",
      "/gallery/11%20-%20Nicol%C3%A1s%20Toledo%20con%20Erik%20Montoya%20de%20USA%20NY%20De%20padre/nicol%C3%A1s-toledo-con-erik-montoya-de-usa-ny-de-padre-004.webp",
      "/gallery/11%20-%20Nicol%C3%A1s%20Toledo%20con%20Erik%20Montoya%20de%20USA%20NY%20De%20padre/nicol%C3%A1s-toledo-con-erik-montoya-de-usa-ny-de-padre-005.webp",
      "/gallery/11%20-%20Nicol%C3%A1s%20Toledo%20con%20Erik%20Montoya%20de%20USA%20NY%20De%20padre/nicol%C3%A1s-toledo-con-erik-montoya-de-usa-ny-de-padre-006.webp",
      "/gallery/11%20-%20Nicol%C3%A1s%20Toledo%20con%20Erik%20Montoya%20de%20USA%20NY%20De%20padre/nicol%C3%A1s-toledo-con-erik-montoya-de-usa-ny-de-padre-007.webp",
      "/gallery/11%20-%20Nicol%C3%A1s%20Toledo%20con%20Erik%20Montoya%20de%20USA%20NY%20De%20padre/nicol%C3%A1s-toledo-con-erik-montoya-de-usa-ny-de-padre-008.webp",
      "/gallery/11%20-%20Nicol%C3%A1s%20Toledo%20con%20Erik%20Montoya%20de%20USA%20NY%20De%20padre/nicol%C3%A1s-toledo-con-erik-montoya-de-usa-ny-de-padre-009.webp",
      "/gallery/11%20-%20Nicol%C3%A1s%20Toledo%20con%20Erik%20Montoya%20de%20USA%20NY%20De%20padre/nicol%C3%A1s-toledo-con-erik-montoya-de-usa-ny-de-padre-010.webp"
    ]
  },

  {
    title: "Experiencia de Yoshi y Jochi de República Dominicana",
    category: "players",
    type: "article",
    slug: "12-experiencia-de-yoshi-y-jochi-de-republica-dominica",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/12%20-%20Experiencia%20de%20Yoshi%20y%20Jochi%20De%20Rep%C3%BAblica%20Dominica/experiencia-de-yoshi-y-jochi-de-rep%C3%BAblica-dominica-001.webp",
    description: "Experiencia de Yoshi y Jochi. De República Dominicana",
    content: [
      "Experiencia de Yoshi y Jochi. De República Dominicana"
    ],
    gallery: [
      "/gallery/12%20-%20Experiencia%20de%20Yoshi%20y%20Jochi%20De%20Rep%C3%BAblica%20Dominica/experiencia-de-yoshi-y-jochi-de-rep%C3%BAblica-dominica-001.webp",
      "/gallery/12%20-%20Experiencia%20de%20Yoshi%20y%20Jochi%20De%20Rep%C3%BAblica%20Dominica/experiencia-de-yoshi-y-jochi-de-rep%C3%BAblica-dominica-002.webp",
      "/gallery/12%20-%20Experiencia%20de%20Yoshi%20y%20Jochi%20De%20Rep%C3%BAblica%20Dominica/experiencia-de-yoshi-y-jochi-de-rep%C3%BAblica-dominica-003.webp",
      "/gallery/12%20-%20Experiencia%20de%20Yoshi%20y%20Jochi%20De%20Rep%C3%BAblica%20Dominica/experiencia-de-yoshi-y-jochi-de-rep%C3%BAblica-dominica-004.webp",
      "/gallery/12%20-%20Experiencia%20de%20Yoshi%20y%20Jochi%20De%20Rep%C3%BAblica%20Dominica/experiencia-de-yoshi-y-jochi-de-rep%C3%BAblica-dominica-005.webp",
      "/gallery/12%20-%20Experiencia%20de%20Yoshi%20y%20Jochi%20De%20Rep%C3%BAblica%20Dominica/experiencia-de-yoshi-y-jochi-de-rep%C3%BAblica-dominica-006.webp",
      "/gallery/12%20-%20Experiencia%20de%20Yoshi%20y%20Jochi%20De%20Rep%C3%BAblica%20Dominica/experiencia-de-yoshi-y-jochi-de-rep%C3%BAblica-dominica-007.webp",
      "/gallery/12%20-%20Experiencia%20de%20Yoshi%20y%20Jochi%20De%20Rep%C3%BAblica%20Dominica/experiencia-de-yoshi-y-jochi-de-rep%C3%BAblica-dominica-008.webp",
      "/gallery/12%20-%20Experiencia%20de%20Yoshi%20y%20Jochi%20De%20Rep%C3%BAblica%20Dominica/experiencia-de-yoshi-y-jochi-de-rep%C3%BAblica-dominica-009.webp",
      "/gallery/12%20-%20Experiencia%20de%20Yoshi%20y%20Jochi%20De%20Rep%C3%BAblica%20Dominica/experiencia-de-yoshi-y-jochi-de-rep%C3%BAblica-dominica-010.webp"
    ]
  },

  {
    title: "Los Profes Arlex y Wilson de Colombia con un joven talento de Barranquilla",
    category: "coaches",
    type: "article",
    slug: "13-los-profes-arlex-y-wilson-de-colombia-con-un-joven",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/13%20-%20Los%20Profes%20Arlex%20y%20Wilson%20de%20Colombia%20Con%20un%20joven/los-profes-arlex-y-wilson-de-colombia-con-un-joven-001.webp",
    description: "Los Profes Arlex y Wilson, de Colombia. Con un joven talento de Barranquilla",
    content: [
      "Los Profes Arlex y Wilson, de Colombia. Con un joven talento de Barranquilla"
    ],
    gallery: [
      "/gallery/13%20-%20Los%20Profes%20Arlex%20y%20Wilson%20de%20Colombia%20Con%20un%20joven/los-profes-arlex-y-wilson-de-colombia-con-un-joven-001.webp",
      "/gallery/13%20-%20Los%20Profes%20Arlex%20y%20Wilson%20de%20Colombia%20Con%20un%20joven/los-profes-arlex-y-wilson-de-colombia-con-un-joven-011.webp",
      "/gallery/13%20-%20Los%20Profes%20Arlex%20y%20Wilson%20de%20Colombia%20Con%20un%20joven/los-profes-arlex-y-wilson-de-colombia-con-un-joven-012.webp",
      "/gallery/13%20-%20Los%20Profes%20Arlex%20y%20Wilson%20de%20Colombia%20Con%20un%20joven/los-profes-arlex-y-wilson-de-colombia-con-un-joven-004.webp",
      "/gallery/13%20-%20Los%20Profes%20Arlex%20y%20Wilson%20de%20Colombia%20Con%20un%20joven/los-profes-arlex-y-wilson-de-colombia-con-un-joven-013.webp",
      "/gallery/13%20-%20Los%20Profes%20Arlex%20y%20Wilson%20de%20Colombia%20Con%20un%20joven/los-profes-arlex-y-wilson-de-colombia-con-un-joven-014.webp",
      "/gallery/13%20-%20Los%20Profes%20Arlex%20y%20Wilson%20de%20Colombia%20Con%20un%20joven/los-profes-arlex-y-wilson-de-colombia-con-un-joven-015.webp",
      "/gallery/13%20-%20Los%20Profes%20Arlex%20y%20Wilson%20de%20Colombia%20Con%20un%20joven/los-profes-arlex-y-wilson-de-colombia-con-un-joven-016.webp",
      "/gallery/13%20-%20Los%20Profes%20Arlex%20y%20Wilson%20de%20Colombia%20Con%20un%20joven/los-profes-arlex-y-wilson-de-colombia-con-un-joven-017.webp",
      "/gallery/13%20-%20Los%20Profes%20Arlex%20y%20Wilson%20de%20Colombia%20Con%20un%20joven/los-profes-arlex-y-wilson-de-colombia-con-un-joven-018.webp"
    ]
  },

  {
    title: "Experiencias de chicos de Monterrey México",
    category: "players",
    type: "article",
    slug: "14-experiencias-de-chicos-de-monterrey-mexico",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-001.webp",
    description: "Experiencias de chicos de Monterrey, México",
    content: [
      "Experiencias de chicos de Monterrey, México"
    ],
    gallery: [
      "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-001.webp",
      "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-002.webp",
      "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-003.webp",
      "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-004.webp",
      "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-005.webp",
      "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-008.webp",
      "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-014.webp",
      "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-015.webp",
      "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-016.webp",
      "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-017.webp",
      "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-018.webp",
      "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-019.webp",
      "/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-022.webp"
    ]
  },

  {
    title: "Adrian Sánchez en Banfield luego prueba en Riestra y contrato en México",
    category: "players",
    type: "article",
    slug: "15-adrian-sanchez-en-banfield-luego-prueba-en-riestra",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/15%20-%20Adrian%20S%C3%A1nchez%20en%20Banfield%20luego%20prueba%20en%20Riestra/adrian-s%C3%A1nchez-en-banfield-luego-prueba-en-riestra-001.webp",
    description: "Adrian Sánchez en Banfield, luego prueba en Riestra y contrato en México",
    content: [
      "Adrian Sánchez en Banfield, luego prueba en Riestra y contrato en México"
    ],
    gallery: [
      "/gallery/15%20-%20Adrian%20S%C3%A1nchez%20en%20Banfield%20luego%20prueba%20en%20Riestra/adrian-s%C3%A1nchez-en-banfield-luego-prueba-en-riestra-001.webp",
      "/gallery/15%20-%20Adrian%20S%C3%A1nchez%20en%20Banfield%20luego%20prueba%20en%20Riestra/adrian-s%C3%A1nchez-en-banfield-luego-prueba-en-riestra-002.webp",
      "/gallery/15%20-%20Adrian%20S%C3%A1nchez%20en%20Banfield%20luego%20prueba%20en%20Riestra/adrian-s%C3%A1nchez-en-banfield-luego-prueba-en-riestra-003.webp",
      "/gallery/15%20-%20Adrian%20S%C3%A1nchez%20en%20Banfield%20luego%20prueba%20en%20Riestra/adrian-s%C3%A1nchez-en-banfield-luego-prueba-en-riestra-004.webp",
      "/gallery/15%20-%20Adrian%20S%C3%A1nchez%20en%20Banfield%20luego%20prueba%20en%20Riestra/adrian-s%C3%A1nchez-en-banfield-luego-prueba-en-riestra-005.webp",
      "/gallery/15%20-%20Adrian%20S%C3%A1nchez%20en%20Banfield%20luego%20prueba%20en%20Riestra/adrian-s%C3%A1nchez-en-banfield-luego-prueba-en-riestra-006.webp",
      "/gallery/15%20-%20Adrian%20S%C3%A1nchez%20en%20Banfield%20luego%20prueba%20en%20Riestra/adrian-s%C3%A1nchez-en-banfield-luego-prueba-en-riestra-007.webp",
      "/gallery/15%20-%20Adrian%20S%C3%A1nchez%20en%20Banfield%20luego%20prueba%20en%20Riestra/adrian-s%C3%A1nchez-en-banfield-luego-prueba-en-riestra-008.webp",
      "/gallery/15%20-%20Adrian%20S%C3%A1nchez%20en%20Banfield%20luego%20prueba%20en%20Riestra/adrian-s%C3%A1nchez-en-banfield-luego-prueba-en-riestra-009.webp",
      "/gallery/15%20-%20Adrian%20S%C3%A1nchez%20en%20Banfield%20luego%20prueba%20en%20Riestra/adrian-s%C3%A1nchez-en-banfield-luego-prueba-en-riestra-010.webp"
    ]
  },

  {
    title: "Experiencia de Juan Francisco Acurio en Rosario Central 2025",
    category: "players",
    type: "article",
    slug: "16-experiencia-de-juan-francisco-acurio-en-rosario-ce",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/16%20-%20Experiencia%20de%20Juan%20Francisco%20Acurio%20en%20Rosario%20Ce/experiencia-de-juan-francisco-acurio-en-rosario-ce-004.webp",
    description: "Experiencia de Juan Francisco Acurio en Rosario Central 2025",
    content: [
      "Experiencia de Juan Francisco Acurio en Rosario Central 2025"
    ],
    gallery: [
      "/gallery/16%20-%20Experiencia%20de%20Juan%20Francisco%20Acurio%20en%20Rosario%20Ce/experiencia-de-juan-francisco-acurio-en-rosario-ce-004.webp",
      "/gallery/16%20-%20Experiencia%20de%20Juan%20Francisco%20Acurio%20en%20Rosario%20Ce/experiencia-de-juan-francisco-acurio-en-rosario-ce-005.webp",
      "/gallery/16%20-%20Experiencia%20de%20Juan%20Francisco%20Acurio%20en%20Rosario%20Ce/experiencia-de-juan-francisco-acurio-en-rosario-ce-006.webp",
      "/gallery/16%20-%20Experiencia%20de%20Juan%20Francisco%20Acurio%20en%20Rosario%20Ce/experiencia-de-juan-francisco-acurio-en-rosario-ce-004.webp",
      "/gallery/16%20-%20Experiencia%20de%20Juan%20Francisco%20Acurio%20en%20Rosario%20Ce/experiencia-de-juan-francisco-acurio-en-rosario-ce-005.webp",
      "/gallery/16%20-%20Experiencia%20de%20Juan%20Francisco%20Acurio%20en%20Rosario%20Ce/experiencia-de-juan-francisco-acurio-en-rosario-ce-006.webp",
      "/gallery/16%20-%20Experiencia%20de%20Juan%20Francisco%20Acurio%20en%20Rosario%20Ce/experiencia-de-juan-francisco-acurio-en-rosario-ce-007.webp",
      "/gallery/16%20-%20Experiencia%20de%20Juan%20Francisco%20Acurio%20en%20Rosario%20Ce/experiencia-de-juan-francisco-acurio-en-rosario-ce-008.webp",
      "/gallery/16%20-%20Experiencia%20de%20Juan%20Francisco%20Acurio%20en%20Rosario%20Ce/experiencia-de-juan-francisco-acurio-en-rosario-ce-009.webp",
      "/gallery/16%20-%20Experiencia%20de%20Juan%20Francisco%20Acurio%20en%20Rosario%20Ce/experiencia-de-juan-francisco-acurio-en-rosario-ce-010.webp"
    ]
  },

  {
    title: "Experiencia de Rogelio de Sonora México",
    category: "players",
    type: "article",
    slug: "17-experiencia-de-rogelio-de-sonora-mexico",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/17%20-%20Experiencia%20de%20Rogelio%20de%20Sonora%20M%C3%A9xico/experiencia-de-rogelio-de-sonora-m%C3%A9xico-006.webp",
    description: "Experiencia de Rogelio, de Sonora, México",
    content: [
      "Experiencia de Rogelio, de Sonora, México"
    ],
    gallery: [
      "/gallery/17%20-%20Experiencia%20de%20Rogelio%20de%20Sonora%20M%C3%A9xico/experiencia-de-rogelio-de-sonora-m%C3%A9xico-006.webp",
      "/gallery/17%20-%20Experiencia%20de%20Rogelio%20de%20Sonora%20M%C3%A9xico/experiencia-de-rogelio-de-sonora-m%C3%A9xico-007.webp",
      "/gallery/17%20-%20Experiencia%20de%20Rogelio%20de%20Sonora%20M%C3%A9xico/experiencia-de-rogelio-de-sonora-m%C3%A9xico-008.webp",
      "/gallery/17%20-%20Experiencia%20de%20Rogelio%20de%20Sonora%20M%C3%A9xico/experiencia-de-rogelio-de-sonora-m%C3%A9xico-009.webp",
      "/gallery/17%20-%20Experiencia%20de%20Rogelio%20de%20Sonora%20M%C3%A9xico/experiencia-de-rogelio-de-sonora-m%C3%A9xico-010.webp",
      "/gallery/17%20-%20Experiencia%20de%20Rogelio%20de%20Sonora%20M%C3%A9xico/experiencia-de-rogelio-de-sonora-m%C3%A9xico-011.webp",
      "/gallery/17%20-%20Experiencia%20de%20Rogelio%20de%20Sonora%20M%C3%A9xico/experiencia-de-rogelio-de-sonora-m%C3%A9xico-012.webp",
      "/gallery/17%20-%20Experiencia%20de%20Rogelio%20de%20Sonora%20M%C3%A9xico/experiencia-de-rogelio-de-sonora-m%C3%A9xico-008.webp",
      "/gallery/17%20-%20Experiencia%20de%20Rogelio%20de%20Sonora%20M%C3%A9xico/experiencia-de-rogelio-de-sonora-m%C3%A9xico-013.webp",
      "/gallery/17%20-%20Experiencia%20de%20Rogelio%20de%20Sonora%20M%C3%A9xico/experiencia-de-rogelio-de-sonora-m%C3%A9xico-014.webp"
    ]
  },

  {
    title: "Paseo por la ciudad de Rosario experiencia PRO 2025 de Samuel de Venezuela",
    category: "players",
    type: "article",
    slug: "18-paseo-por-la-ciudad-de-rosario-experiencia-pro-202",
    date: "2024",
    readTime: "5 min",
    image: "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-005.webp",
    description: "Paseo por la ciudad de Rosario, experiencia PRO 2025 de Samuel, de Venezuela",
    content: [
      "Paseo por la ciudad de Rosario, experiencia PRO 2025 de Samuel, de Venezuela"
    ],
    gallery: [
      "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-005.webp",
      "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-006.webp",
      "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-007.webp",
      "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-008.webp",
      "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-009.webp",
      "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-010.webp",
      "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-011.webp",
      "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-012.webp",
      "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-013.webp",
      "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-014.webp",
      "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-015.webp",
      "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-016.webp",
      "/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-017.webp"
    ]
  },
]
