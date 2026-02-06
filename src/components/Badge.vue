<template>
  <span
    :class="[
      'badge',
      variantClasses
    ]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'tech';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
});

const variantClasses = computed(() => {
  const variants = {
    default: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
    primary: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
    error: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
    tech: 'bg-console-surface border border-console-border text-console-primary',
  };
  return variants[props.variant];
});
</script>
