<template>
  <section id="day-in-production" class="py-16 bg-white dark:bg-console-surface">
    <div class="container mx-auto px-4">
      <div v-scroll-reveal>
        <SectionHeader
          :title="isRecruiterView ? t('dayInProduction.recruiter.title') : t('dayInProduction.tech.title')"
          :description="isRecruiterView ? t('dayInProduction.recruiter.description') : t('dayInProduction.tech.description')"
        />
      </div>

      <div class="mt-12 max-w-4xl mx-auto">
        <!-- Timeline -->
        <div class="relative">
          <!-- Vertical line -->
          <div class="absolute left-20 top-0 bottom-0 w-0.5 bg-gradient-to-b from-console-primary via-console-accent to-console-primary opacity-30"></div>

          <!-- Timeline items -->
          <div
            v-for="(item, index) in timeline"
            :key="index"
            v-scroll-reveal="{ delay: index * 150 }"
            class="relative mb-8 last:mb-0"
          >
            <!-- Time badge -->
            <div class="absolute left-0 flex items-center justify-center w-16 h-16 bg-console-surface/50 dark:bg-console-darker border-2 border-console-primary rounded-full">
              <span class="font-mono text-xs font-bold text-console-primary">{{ item.time }}</span>
            </div>

            <!-- Content card -->
            <div class="ml-24 bg-console-surface/30 dark:bg-console-darker/50 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:border-console-primary/50 transition-all duration-200">
              <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
                {{ item.title }}
              </h3>

              <!-- Recruiter View -->
              <template v-if="isRecruiterView">
                <p class="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  {{ item.description }}
                </p>
                <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p class="text-sm text-console-success font-medium flex items-center gap-2">
                    <Icon name="check-circle" :size="16" color="success" />
                    {{ item.outcome }}
                  </p>
                </div>
              </template>

              <!-- Tech Lead View -->
              <template v-else>
                <div class="space-y-3">
                  <!-- Log entry -->
                  <div v-if="item.log" class="bg-console-darker dark:bg-black rounded p-3 font-mono text-xs text-gray-300 overflow-x-auto">
                    {{ item.log }}
                  </div>

                  <!-- Hypothesis -->
                  <div v-if="item.hypothesis" class="flex gap-2">
                    <Icon name="lightbulb" :size="16" color="warning" class="mt-0.5 flex-shrink-0" />
                    <div>
                      <span class="text-xs font-bold text-console-warning uppercase tracking-wide">Hypothesis:</span>
                      <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">{{ item.hypothesis }}</p>
                    </div>
                  </div>

                  <!-- Action -->
                  <div class="flex gap-2">
                    <Icon name="zap" :size="16" color="primary" class="mt-0.5 flex-shrink-0" />
                    <div>
                      <span class="text-xs font-bold text-console-primary uppercase tracking-wide">Action:</span>
                      <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">{{ item.action }}</p>
                    </div>
                  </div>

                  <!-- Outcome -->
                  <div class="flex gap-2">
                    <Icon name="check-circle" :size="16" color="success" class="mt-0.5 flex-shrink-0" />
                    <div>
                      <span class="text-xs font-bold text-console-success uppercase tracking-wide">Outcome:</span>
                      <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">{{ item.outcome }}</p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useViewMode } from '../composables/useViewMode'
import SectionHeader from '../components/SectionHeader.vue'
import Icon from '../components/Icon.vue'

const { t, tm } = useI18n()
const { isRecruiterView } = useViewMode()

interface TimelineItem {
  time: string
  title: string
  description?: string
  outcome: string
  log?: string
  hypothesis?: string
  action?: string
}

const timeline = computed(() => {
  const timelineData = isRecruiterView.value
    ? (tm('dayInProduction.recruiter.timeline') as any)
    : (tm('dayInProduction.tech.timeline') as any)
  
  return (Array.isArray(timelineData) ? timelineData : []) as TimelineItem[]
})
</script>
