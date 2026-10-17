// Datos generales del sitio. Los valores entre corchetes están pendientes de confirmar.
export const site = {
  name: 'SERAC',
  tagline: 'Adventure | Mountaineering | Expedition',
  description:
    'Expediciones de alta montaña y trekking desde Honduras. Te preparamos antes de salir, te guiamos en la ruta y te traemos de vuelta.',
  email: '[CORREO]',
  whatsapp: '[NÚMERO]',
  city: '[CIUDAD]',
  instagram: 'https://instagram.com/[USUARIO]',
  facebook: 'https://facebook.com/[USUARIO]',
  // Endpoint del formulario de contacto (Formspree, Netlify Forms, etc.).
  // Mientras esté vacío, el formulario abre el cliente de correo.
  formAction: '',
};

export const nav = [
  { label: 'Expediciones', href: '/#expediciones' },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Seguridad', href: '/#seguridad' },
  { label: 'Preguntas', href: '/preguntas/' },
  { label: 'Contacto', href: '/#contacto' },
];

export const whatsappUrl = `https://wa.me/${site.whatsapp}`;
