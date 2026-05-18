<template>
  <div class="group relative bg-white dark:bg-console-surface rounded-xl p-6 border border-gray-200 dark:border-console-border hover:border-console-primary/40 dark:hover:border-console-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 overflow-hidden">
    <!-- Icon -->
    <div class="mb-4 inline-flex p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors duration-300">
      <Icon :name="metric.icon" :size="22" :stroke-width="2" color="primary" />
    </div>

    <!-- Value -->
    <div class="text-3xl md:text-4xl font-extrabold font-mono text-gradient mb-1 leading-none">
      {{ metric.value }}
    </div>

    <!-- Label -->
    <div class="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1.5">
      {{ metric.label }}
    </div>

    <!-- Description -->
    <div class="text-xs text-gray-500 dark:text-console-muted leading-relaxed">
      {{ metric.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Metric } from '../data/profile';
import Icon from './Icon.vue';

defineProps<{ metric: Metric }>();
</script>
