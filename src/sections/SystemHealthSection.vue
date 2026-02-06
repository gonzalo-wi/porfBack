<template>
  <section id="system-health" class="py-16 bg-white dark:bg-console-surface">
    <div class="container mx-auto px-4">
      <div v-scroll-reveal>
        <SectionHeader
          :title="t('systemHealth.title')"
          :description="t('systemHealth.description')"
        />
      </div>

      <div class="mt-12 max-w-6xl mx-auto">
        <!-- Before/After Comparison -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Before -->
          <div v-scroll-reveal="{ delay: 100 }" class="bg-console-surface/30 dark:bg-console-darker/50 rounded-lg p-6 border-2 border-red-200 dark:border-red-900/50">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <Icon name="trending-down" :size="28" color="error" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {{ t('systemHealth.before.label') }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ t('systemHealth.before.subtitle') }}
                </p>
              </div>
            </div>

            <div class="space-y-3">
              <div
                v-for="(metric, index) in beforeMetrics"
                :key="index"
                class="flex items-center justify-between p-3 bg-console-surface/50 dark:bg-console-surface/80 rounded border border-gray-200 dark:border-gray-700"
              >
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ metric.label }}</span>
                <div class="flex items-center gap-2">
                  <span class="font-mono font-bold text-gray-900 dark:text-gray-100">{{ metric.value }}</span>
                  <span 
                    class="w-2 h-2 rounded-full"
                    :class="{
                      'bg-red-500': metric.severity === 'high',
                      'bg-yellow-500': metric.severity === 'medium',
                    }"
                  ></span>
                </div>
              </div>
            </div>
          </div>

          <!-- After -->
          <div v-scroll-reveal="{ delay: 200 }" class="bg-console-surface/30 dark:bg-console-darker/50 rounded-lg p-6 border-2 border-green-200 dark:border-green-900/50">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Icon name="trending-up" :size="28" color="success" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {{ t('systemHealth.after.label') }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ t('systemHealth.after.subtitle') }}
                </p>
              </div>
            </div>

            <div class="space-y-3">
              <div
                v-for="(metric, index) in afterMetrics"
                :key="index"
                class="flex items-center justify-between p-3 bg-console-surface/50 dark:bg-console-surface/80 rounded border border-gray-200 dark:border-gray-700"
              >
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ metric.label }}</span>
                <div class="flex items-center gap-2">
                  <span class="font-mono font-bold text-console-success">{{ metric.value }}</span>
                  <span class="w-2 h-2 rounded-full bg-green-500"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Improvements -->
        <div v-scroll-reveal="{ delay: 300 }" class="mt-12 bg-gradient-to-r from-console-primary/10 to-console-accent/10 dark:from-console-primary/20 dark:to-console-accent/20 rounded-lg p-6 border border-console-primary/20 dark:border-console-primary/30">
          <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <Icon name="target" :size="20" color="primary" />
            <span>Key Improvements</span>
          </h3>
          <ul class="grid md:grid-cols-2 gap-3">
            <li
              v-for="(improvement, index) in improvements"
              :key="index"
              class="flex items-start gap-2"
            >
              <Icon name="check-circle" :size="16" color="success" class="mt-0.5 flex-shrink-0" />
              <span class="text-sm text-gray-700 dark:text-gray-300">{{ improvement }}</span>
            </li>
          </ul>
        </div>

        <!-- Visual Progress Bar -->
        <div v-scroll-reveal="{ delay: 400 }" class="mt-8 bg-console-surface/30 dark:bg-console-darker/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">System Reliability</span>
            <span class="text-sm font-mono text-console-success">99.9%</span>
          </div>
          <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-console-primary to-console-success transition-all duration-1000"
              style="width: 99.9%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionHeader from '../components/SectionHeader.vue'
import Icon from '../components/Icon.vue'

const { t, tm } = useI18n()

interface Metric {
  label: string
  value: string
  severity: string
}

const beforeMetrics = computed(() => {
  const metrics = tm('systemHealth.before.metrics') as any
  return (Array.isArray(metrics) ? metrics : []) as Metric[]
})

const afterMetrics = computed(() => {
  const metrics = tm('systemHealth.after.metrics') as any
  return (Array.isArray(metrics) ? metrics : []) as Metric[]
})

const improvements = computed(() => {
  const items = tm('systemHealth.improvements') as any
  return (Array.isArray(items) ? items : []) as string[]
})
</script>
