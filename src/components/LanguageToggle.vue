<template>
  <button
    @click="toggleLanguage"
    class="p-2 rounded-lg bg-gray-200 dark:bg-console-surface hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-console-primary"
    :aria-label="`Switch to ${locale === 'en' ? 'Spanish' : 'English'}`"
  >
    <span class="font-mono text-sm font-medium">
      {{ locale === 'en' ? 'ES' : 'EN' }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
  localStorage.setItem('language', locale.value)
}
</script>
