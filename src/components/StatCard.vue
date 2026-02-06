<template>
  <div class="card text-center group hover:border-console-primary transition-all duration-300">
    <div class="mb-4 flex justify-center">
      <div class="p-3 rounded-xl bg-console-primary/10 dark:bg-console-primary/20 group-hover:bg-console-primary/20 dark:group-hover:bg-console-primary/30 transition-all duration-300 group-hover:scale-110">
        <Icon :name="metric.icon" :size="32" :stroke-width="2.5" color="primary" />
      </div>
    </div>
    <div class="text-4xl md:text-5xl font-bold text-gradient mb-2 font-mono">
      {{ metric.value }}
    </div>
    <div class="text-sm font-medium text-gray-900 dark:text-white mb-2">
      {{ metric.label }}
    </div>
    <div class="text-xs text-gray-600 dark:text-gray-400">
      {{ metric.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Metric } from '../data/profile';
import Icon from './Icon.vue';

interface Props {
  metric: Metric;
}

defineProps<Props>();
</script>
