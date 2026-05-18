<template>
  <section id="logs" class="section-spacing">
    <div class="section-container">
      <div class="mb-12">
        <SectionHeader>
          {{ t('logs.title') }}
          <template #description>
            {{ t('logs.description') }}
          </template>
        </SectionHeader>
      </div>

      <div class="space-y-6">
        <div
          v-for="(exp, index) in experiences"
          :key="exp.id"
          v-scroll-reveal="{ delay: index * 100 }"
          class="relative flex gap-6"
        >
          <!-- Timeline indicator -->
          <div class="flex flex-col items-center flex-shrink-0">
            <div class="w-3 h-3 rounded-full bg-console-primary ring-4 ring-console-primary/15 dark:ring-console-primary/20 mt-1.5"></div>
            <div v-if="index < experiences.length - 1" class="w-0.5 flex-1 bg-gradient-to-b from-console-primary/40 to-console-border/30 mt-2"></div>
          </div>

          <!-- Card -->
          <div class="flex-1 pb-8 last:pb-0">
            <div class="bg-white dark:bg-console-surface rounded-xl border border-gray-200 dark:border-console-border hover:border-console-primary/30 dark:hover:border-console-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 p-6">
              <!-- Header -->
              <div class="flex items-start justify-between gap-4 mb-5 flex-wrap">
                <div>
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-0.5">
                    {{ getTranslatedExperience(exp).role }}
                  </h3>
                  <p class="text-sm font-medium text-console-primary">{{ getTranslatedExperience(exp).company }}</p>
                </div>
                <Badge variant="primary">{{ getTranslatedExperience(exp).period }}</Badge>
              </div>

              <!-- Responsibilities -->
              <div class="mb-5">
                <p class="text-xs font-mono text-console-muted uppercase tracking-widest mb-3">
                  {{ t('logs.responsibilities') }}
                </p>
                <ul class="space-y-2">
                  <li
                    v-for="(responsibility, i) in getTranslatedExperience(exp).responsibilities"
                    :key="i"
                    class="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span class="text-console-primary flex-shrink-0 mt-0.5 font-mono text-xs">→</span>
                    <span class="leading-relaxed">{{ responsibility }}</span>
                  </li>
                </ul>
              </div>

              <!-- Impact -->
              <div class="pt-4 border-t border-gray-100 dark:border-console-border/60">
                <p class="text-xs font-mono text-console-muted uppercase tracking-widest mb-2">
                  {{ t('logs.impact') }}
                </p>
                <p class="text-sm font-semibold text-gray-900 dark:text-white leading-relaxed">
                  {{ getTranslatedExperience(exp).impact }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { experiences, type Experience } from '../data/profile';
import SectionHeader from '../components/SectionHeader.vue';
import Badge from '../components/Badge.vue';

const { t, tm } = useI18n();

const getTranslatedExperience = (exp: Experience) => {
  const expData = tm(`data.experiences.${exp.id}`) as any;
  return {
    role: expData.role || exp.role,
    company: expData.company || exp.company,
    period: expData.period || exp.period,
    responsibilities: (expData.responsibilities || exp.responsibilities) as string[],
    impact: expData.impact || exp.impact,
  };
};
</script>
