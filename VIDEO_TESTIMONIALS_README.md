# 🎥 Guía de Videos Testimoniales

## ✅ ¡Componente instalado y funcionando!

Los videos testimoniales ya están integrados en la página principal (Home).

---

## 📍 Ubicación

- **Página:** `/` (Home)
- **Posición:** Después de "Testimonios" y antes del CTA final
- **Sección:** "Ellos Ya Lo Vivieron"

---

## 🎬 Cómo funciona

### Vista principal:
- **Carrusel infinito** con auto-scroll
- Formato vertical optimizado para videos 9:16 (estilo TikTok/Instagram)
- Diseño limpio: solo video + botón de Play
- Responsive: muestra diferentes cantidades según el dispositivo
- Se puede deslizar manualmente o avanza automáticamente

### Al hacer click:
- Se abre un modal fullscreen
- Video se reproduce automáticamente con controles nativos
- Navegación con flechas ← →
- Teclas del teclado funcionan (ESC para cerrar, flechas para navegar)
- Diseño optimizado para videos verticales 9:16
- Contador simple (1/10)

---

## ✏️ Cómo agregar/quitar videos

Edita el archivo: `lib/videos.ts`

### Estructura (SUPER SIMPLE):

```typescript
{
  id: "1",
  videoUrl: "/videos/video-1.mp4",
  participant: "Video 1", // Solo para referencia interna
}
```

**¿Por qué tan simple?** Porque toda la info (nombre, país, programa) ya está EN EL VIDEO mismo. No necesitas duplicarla aquí.

### Para agregar un nuevo video:

1. Copia el video a `public/videos/video-11.mp4`
2. Agrega una entrada en `lib/videos.ts`:

```typescript
{
  id: "11",
  videoUrl: "/videos/video-11.mp4",
  participant: "Video 11", // Solo referencia
}
```

### Para quitar un video:

Simplemente elimina la entrada del array en `lib/videos.ts`

---

## 📂 Videos

**Ubicación:** `public/videos/`

Los videos ya están renombrados:
- `video-1.mp4` → `video-10.mp4`

Para agregar más videos:
1. Copia el video a `public/videos/`
2. Renómbralo a `video-11.mp4` (o el siguiente número)
3. Agrega una entrada en `lib/videos.ts`

---

## 🎨 Personalización

### Cambiar el título de la sección:

Edita: `components/home/video-testimonials.tsx`

```typescript
<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
  Ellos Ya Lo Vivieron  {/* ← Cambia esto */}
</h2>
```

### Cambiar el subtítulo:

```typescript
<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
  Escucha directamente a los jugadores... {/* ← Cambia esto */}
</p>
```

---

## 🚀 Mover a otra página

Si quieres mover los videos a otra página:

1. **Quitar de Home:**
   - Edita `app/page.tsx`
   - Elimina la línea: `<VideoTestimonials />`

2. **Agregar a otra página:**
   - Abre la página deseada (ej: `app/experiencias/page.tsx`)
   - Importa: `import { VideoTestimonials } from "@/components/home/video-testimonials"`
   - Agrega: `<VideoTestimonials />`

---

## 📱 Responsive

El componente es completamente responsive:
- **Móvil:** 2 columnas
- **Tablet:** 3 columnas
- **Desktop:** 5 columnas
- **Modal:** Se adapta automáticamente (vertical en móvil, horizontal en desktop)

---

## ⚡ Performance

- Videos usan `preload="metadata"` para cargar rápido
- Solo el video abierto se reproduce (ahorra datos)
- Modal tiene lazy loading automático

---

## 🐛 Solución de problemas

**Los videos no se ven:**
- Verifica que los archivos estén en `public/videos/`
- Revisa que los nombres coincidan con `lib/videos.ts`
- Recarga la página con Ctrl+F5

**El modal no abre:**
- Revisa la consola del navegador (F12)
- Verifica que no haya errores en `lib/videos.ts`

---

## 📝 Notas

- Los videos son formato vertical (9:16) estilo TikTok/Instagram
- Se recomienda que duren máximo 60 segundos
- Formato: MP4 (H.264)
- Resolución recomendada: 1080x1920 o menor
