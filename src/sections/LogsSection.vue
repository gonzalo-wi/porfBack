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

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-console-border transform md:-translate-x-1/2"></div>

        <div class="space-y-12">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            :class="[
              'relative grid md:grid-cols-2 gap-8',
              index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
            ]"
          >
            <!-- Timeline dot -->
            <div class="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-console-primary rounded-full border-4 border-white dark:border-console-bg transform -translate-x-1/2 md:translate-x-[-50%] z-10"></div>

            <!-- Content -->
            <div :class="index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'">
              <div class="card ml-8 md:ml-0">
                <div class="flex items-start justify-between mb-4" :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''">
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {{ getTranslatedExperience(exp).role }}
                    </h3>
                    <p class="text-sm font-medium text-console-primary">{{ getTranslatedExperience(exp).company }}</p>
                  </div>
                  <Badge variant="primary">{{ getTranslatedExperience(exp).period }}</Badge>
                </div>

                <div class="space-y-4">
                  <div>
                    <p class="text-xs font-mono text-console-muted uppercase tracking-wider mb-2">
                      {{ t('logs.responsibilities') }}
                    </p>
                    <ul class="space-y-2">
                      <li
                        v-for="(responsibility, i) in getTranslatedExperience(exp).responsibilities"
                        :key="i"
                        class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                        :class="index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''"
                      >
                        <span class="text-console-primary mt-1">→</span>
                        <span>{{ responsibility }}</span>
                      </li>
                    </ul>
                  </div>

                  <div class="pt-4 border-t border-gray-200 dark:border-console-border">
                    <p class="text-xs font-mono text-console-muted uppercase tracking-wider mb-2">
                      {{ t('logs.impact') }}
                    </p>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">
                      {{ getTranslatedExperience(exp).impact }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty space for alternating layout -->
            <div v-if="index % 2 === 0" class="hidden md:block md:col-start-2"></div>
            <div v-else class="hidden md:block md:col-start-1"></div>
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
  // Use tm() to access arrays and objects properly
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
