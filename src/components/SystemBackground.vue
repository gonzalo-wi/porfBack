<template>
  <div class="system-background-container">
    <!-- Base infrastructure grid (always visible) -->
    <div class="system-bg-layer infrastructure-grid"></div>

    <!-- Animated pulse sweep (always visible) -->
    <div class="system-bg-layer pulse-overlay"></div>

    <!-- Tech Lead View: Additional layers with smooth transitions -->
    <Transition name="tech-fade">
      <div v-if="viewMode === 'tech'" class="tech-layers">
        <div class="system-bg-layer data-flow-layer"></div>
        <div class="system-bg-layer system-nodes"></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  viewMode: 'recruiter' | 'tech'
}>()
</script>

<style>
/* Import non-scoped styles */
@import '../assets/system-background.css';
</style>

<style scoped>
.system-background-container {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0; /* Behind main content */
  overflow: hidden;
  pointer-events: none; /* Don't block clicks or scroll */
}

.tech-layers {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* Smooth transition for tech mode layers */
.tech-fade-enter-active,
.tech-fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.tech-fade-enter-from,
.tech-fade-leave-to {
  opacity: 0;
}

.tech-fade-enter-to,
.tech-fade-leave-from {
  opacity: 1;
}
</style>
