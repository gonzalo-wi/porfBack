<template>
  <div class="space-y-4">
    <div class="flex items-center gap-3">
      <div class="h-px w-8 bg-console-primary/60 rounded-full"></div>
      <span class="text-xs font-mono font-medium text-console-primary uppercase tracking-widest opacity-80">
        <slot name="label">{{ defaultLabel }}</slot>
      </span>
    </div>
    <div class="flex items-start justify-between">
      <h2
        class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight"
        :class="{ 'text-gradient': gradient }"
      >
        <slot />
      </h2>
      <slot name="action" />
    </div>
    <p v-if="$slots.description" class="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
      <slot name="description" />
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  gradient?: boolean;
  defaultLabel?: string;
}

withDefaults(defineProps<Props>(), {
  gradient: false,
  defaultLabel: '',
});
</script>
