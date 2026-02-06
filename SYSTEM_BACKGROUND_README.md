# System Background - Documentación Técnica

## 📋 Descripción General

El **SystemBackground** es un componente animado de fondo que proporciona una estética profesional inspirada en infraestructuras de sistemas backend. Utiliza CSS puro para crear efectos visuales sutiles que mejoran la experiencia sin distraer del contenido principal.

## 🎨 Características

### Modo Recruiter (Vista Básica)
- ✅ **Grid de Infraestructura**: Líneas azules sutiles que simulan una arquitectura de microservicios
- ✅ **Pulso Animado**: Movimiento diagonal suave (24s) que simula actividad del sistema
- ✅ **Efecto de Respiración**: El grid aumenta y disminuye su opacidad sutilmente

### Modo Tech Lead (Vista Completa)
Incluye todas las características del modo Recruiter, más:
- ✅ **Líneas de Flujo de Datos**: Indicadores visuales horizontales y verticales
- ✅ **Nodos del Sistema**: Puntos de luz que representan servicios críticos
- ✅ **Transición Suave**: Fade in/out de 0.8s al cambiar entre modos

## 🎯 Especificaciones Técnicas

### Estructura de Capas (z-index)
```
z-index: 0  ← SystemBackground (fondo)
z-index: 10 ← Contenido principal (App.vue)
```

### Variables CSS Personalizables

```css
:root {
  --sb-bg-base: #0a0f1a;           /* Color de fondo base */
  --sb-grid-color: #3b82f6;        /* Color de las líneas del grid */
  --sb-grid-opacity: 0.08;         /* Opacidad del grid (0-1) */
  --sb-pulse-color: rgba(59, 130, 246, 0.12);  /* Color del pulso */
  --sb-node-opacity: 0.4;          /* Opacidad de los nodos */
  --sb-flow-opacity: 0.25;         /* Opacidad del flujo de datos */
  --sb-animation-speed: 24s;       /* Velocidad de animaciones */
}
```

### Animaciones

| Animación | Duración | Tipo | Descripción |
|-----------|----------|------|-------------|
| `sb-grid-breathe` | 48s (2x base) | ease-in-out, infinite | Pulsación sutil del grid |
| `sb-pulse-sweep` | 24s | ease-in-out, infinite | Movimiento diagonal del pulso |
| `sb-flow-move` | 36s (1.5x base) | linear, infinite | Movimiento de líneas de datos |
| `sb-nodes-pulse` | 16.8s (0.7x base) | ease-in-out, alternate | Pulsación de nodos del sistema |
| `sb-fade-in` | 1s | ease-out | Aparición inicial |

## 🔧 Personalización

### Ajustar Visibilidad

Para hacer el fondo **más visible**:
```css
:root {
  --sb-grid-opacity: 0.15;  /* Aumentar de 0.08 a 0.15 */
  --sb-pulse-color: rgba(59, 130, 246, 0.2);  /* Aumentar opacidad */
}
```

Para hacer el fondo **más sutil**:
```css
:root {
  --sb-grid-opacity: 0.05;  /* Disminuir de 0.08 a 0.05 */
  --sb-pulse-color: rgba(59, 130, 246, 0.08);  /* Disminuir opacidad */
}
```

### Cambiar Velocidad de Animaciones

**Más lento** (más profesional):
```css
:root {
  --sb-animation-speed: 30s;  /* Aumentar de 24s a 30s */
}
```

**Más rápido** (más dinámico):
```css
:root {
  --sb-animation-speed: 18s;  /* Disminuir de 24s a 18s */
}
```

### Cambiar Colores

**Verde** (tema DevOps):
```css
:root {
  --sb-grid-color: #10b981;  /* Verde esmeralda */
  --sb-pulse-color: rgba(16, 185, 129, 0.12);
}
```

**Púrpura** (tema moderno):
```css
:root {
  --sb-grid-color: #8b5cf6;  /* Púrpura violeta */
  --sb-pulse-color: rgba(139, 92, 246, 0.12);
}
```

## ♿ Accesibilidad

El componente respeta las preferencias del usuario:

```css
@media (prefers-reduced-motion: reduce) {
  /* Todas las animaciones se desactivan */
  .infrastructure-grid,
  .pulse-overlay,
  .data-flow-layer,
  .system-nodes {
    animation: none !important;
  }
}
```

## 🎭 Modo Oscuro

El componente ajusta automáticamente su opacidad en dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --sb-grid-opacity: 0.06;   /* Más sutil en dark mode */
    --sb-node-opacity: 0.35;
  }
}
```

## 📦 Uso

```vue
<template>
  <div class="app">
    <SystemBackground :viewMode="currentMode" />
    <div class="content">
      <!-- Tu contenido aquí -->
    </div>
  </div>
</template>

<script setup>
import SystemBackground from './components/SystemBackground.vue'
const currentMode = ref('recruiter') // o 'tech'
</script>
```

## 🚀 Rendimiento

- **Zero JavaScript**: 100% CSS puro
- **GPU Accelerated**: Uso de `transform` y `opacity` para animaciones suaves
- **No bloquea interacciones**: `pointer-events: none`
- **Ligero**: < 3KB total (CSS + Component)

## 🐛 Troubleshooting

### El fondo no se ve

1. Verificar que el z-index del contenido sea mayor que 0
2. Aumentar `--sb-grid-opacity` temporalmente a 0.3 para testing
3. Verificar que no haya un fondo opaco tapando el SystemBackground

### Las animaciones no funcionan

1. Verificar que el navegador soporte CSS animations
2. Comprobar que `prefers-reduced-motion` no esté activado
3. Inspeccionar en DevTools que las clases CSS se estén aplicando

### Transición entre modos no suave

1. Verificar que Vue esté usando el componente `<Transition>`
2. Aumentar duración en `.tech-fade-enter-active` (actualmente 0.8s)

## 📝 Notas de Implementación

- **No usar canvas**: Mantener CSS puro para mejor rendimiento
- **No usar librerías externas**: Zero dependencias
- **Mantener opacidades bajas**: El fondo debe ser sutil, no protagonista
- **Animaciones lentas**: >= 20s para evitar distracciones
- **Mobile-first**: Funciona en todos los tamaños de pantalla

---

**Versión**: 1.0.0  
**Última actualización**: Febrero 2026  
**Compatibilidad**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
