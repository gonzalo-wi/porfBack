<template>
  <div>
    <div class="flex items-center justify-between mb-2">
      <h2
        class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        :class="{ 'text-gradient': gradient }"
      >
        <slot />
      </h2>
      <slot name="action" />
    </div>
    <p v-if="$slots.description" class="text-gray-600 dark:text-gray-400 text-lg max-w-3xl">
      <slot name="description" />
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  gradient?: boolean;
}

withDefaults(defineProps<Props>(), {
  gradient: false,
});
</script>
