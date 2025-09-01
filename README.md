
# AVITAR SOLUCIONES INMOBILIARIAS

Sitio web desarrollado en Next.js + TypeScript + Tailwind CSS para la inmobiliaria AVITAR SOLUCIONES.

## Estructura principal
- `/src/app/` — Páginas y layout principal
- `/src/components/` — Componentes reutilizables (Navbar, WhatsAppButton, filtros, etc.)
- `/src/lib/types.ts` — Tipos y constantes para filtros y datos
- `/public/images/` — Imágenes públicas y logotipos

## Scripts principales
- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Compila la app para producción
- `npm start` — Sirve la app compilada

## Personalización
- Cambia imágenes en `/public/images/`
- Edita textos y estilos en los componentes de `/src/components/` y páginas en `/src/app/`

## Contacto y soporte
Para soporte técnico o mejoras, contactar a Jbrito81.

## Despliegue en Vercel
- Conecta el repo en https://vercel.com/new y selecciona el proyecto `avitar-web2`.
- Framework: Next.js (detección automática).
- Build command: `npm run build`. Install: `npm install`.
- Variables de entorno: agrégalas en Project Settings → Environment Variables si se requieren.
- Runtime: Node 20 con `vercel.json`.
- Cada push a `main` hace deploy automático.