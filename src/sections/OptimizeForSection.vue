<template>
  <section id="optimize-for" class="py-16 bg-white dark:bg-console-surface">
    <div class="container mx-auto px-4">
      <SectionHeader
        :title="t('optimizeFor.title')"
        :description="t('optimizeFor.description')"
      />

      <div class="mt-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div
          v-for="(principle, index) in principles"
          :key="index"
          class="bg-console-surface/30 dark:bg-console-darker/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-console-primary dark:hover:border-console-primary transition-all duration-200 hover:shadow-lg group"
        >
          <!-- Principle name -->
          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-console-primary transition-colors">
            {{ principle.name }}
          </h3>

          <!-- Explanation -->
          <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {{ principle.explanation }}
          </p>

          <!-- Real-world example -->
          <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div class="flex gap-2">
              <span class="text-console-accent text-sm font-bold flex-shrink-0">💡</span>
              <div>
                <span class="text-xs font-bold text-console-accent uppercase tracking-wide">Real Example:</span>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 italic">
                  {{ principle.example }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom callout -->
      <div class="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-console-primary to-console-accent rounded-lg p-8 text-center">
        <p class="text-white text-lg font-semibold">
          These principles aren't theory—they're how I actually work.
        </p>
        <p class="text-white/90 mt-2">
          Every line of code, every architecture decision, every system I build reflects this mindset.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionHeader from '../components/SectionHeader.vue'

const { t, tm } = useI18n()

interface Principle {
  name: string
  explanation: string
  example: string
}

const principles = computed(() => {
  const items = tm('optimizeFor.principles') as any
  return (Array.isArray(items) ? items : []) as Principle[]
})
</script>
