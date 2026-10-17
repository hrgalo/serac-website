# serac-website

Sitio web de **SERAC — Adventure | Mountaineering | Expedition**. Sitio estático hecho con [Astro](https://astro.build).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run check    # revisión de tipos
```

## Estructura

```
src/
  content/expediciones/   Una expedición por archivo .md (datos en el frontmatter, descripción en el cuerpo)
  content.config.ts       Esquema de las expediciones
  data/site.ts            Contacto, redes, menú y endpoint del formulario
  styles/global.css       Tokens del sistema de diseño SERAC y utilidades
  components/             Header, Footer, Logo, Photo, ExpeditionCard, ContactForm
  layouts/Base.astro      Plantilla común (SEO, fuentes, encabezado y pie)
  pages/                  Inicio, expediciones/[id], nosotros, preguntas, 404
```

## Agregar una expedición

Copia `src/content/expediciones/_proxima-ruta.md` con un nombre sin guion bajo (por ejemplo `nevado-toluca.md`).
El nombre del archivo es la URL: `/expediciones/nevado-toluca/`. Con `status: proximamente` aparece en el inicio
sin página de detalle.

## Pendientes

- Textos entre corchetes (`[PRECIO]`, `[FECHA]`, `[CORREO]`…) en `src/data/site.ts`, `src/content/` y `src/pages/`.
- Fotos reales: el componente `Photo` acepta `src` y `alt`.
- Logotipo en SVG (hoy hay un isotipo provisional en `Logo.astro`).
- Dominio definitivo en `astro.config.mjs` y endpoint del formulario en `site.formAction`.
