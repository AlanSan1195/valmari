# 📝 Guía de Testimonios - Valmarí

## 🎯 Cómo agregar nuevos testimonios

Los testimonios se gestionan desde el archivo: `src/data/testimonials.json`

### Estructura de un testimonio:

```json
{
  "id": 5,
  "name": "María",
  "comment": "¡Increíble servicio! La barra de snacks fue el éxito de mi boda 💕",
  "rating": 5,
  "event": "Boda"
}
```

### Campos:

- **id**: Número único (incrementa de 1 en 1)
- **name**: Nombre del cliente
- **comment**: El comentario del cliente (puedes incluir emojis)
- **rating**: Calificación de 1 a 5 estrellas
- **event**: Tipo de evento (Cumpleaños, Boda, Corporativo, etc.)

## 📋 Proceso recomendado:

### Fase 1: Testimonios Manuales (ACTUAL)
1. Pide a tus clientes que te envíen su testimonio por WhatsApp/Instagram
2. Edita el archivo `src/data/testimonials.json`
3. Agrega el nuevo testimonio al array
4. Guarda y haz deploy

### Fase 2: Google My Business (PRÓXIMO)
1. ✅ Crea tu perfil en Google My Business
2. ✅ Verifica tu negocio
3. ✅ Pide a tus clientes que dejen reseñas en Google
4. ✅ Acumula al menos 10-15 reseñas
5. ✅ Integra Google Reviews API con Astro

## 🚀 Beneficios de Google Reviews:

- ⭐ Mayor credibilidad (verificación de Google)
- 📈 Mejora tu SEO local en Guadalajara
- 🎯 Apareces en Google Maps
- 💪 Testimonios automáticos (no necesitas agregar manualmente)

## 🎨 Personalización del diseño:

El componente está en: `src/components/Testimonials.astro`

Puedes modificar:
- Colores de las tarjetas
- Animaciones
- Cantidad de columnas en el grid
- Estilos de hover

## 📱 Responsive:

El diseño es completamente responsive:
- **Mobile**: 1 columna
- **Tablet**: 2 columnas
- **Desktop**: 4 columnas

---

**Nota**: Cuando estés listo para integrar Google Reviews, avísame y te ayudo con la implementación 🚀
