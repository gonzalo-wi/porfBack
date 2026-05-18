<template>
  <section id="incidents" class="section-spacing bg-gray-50/80 dark:bg-console-surface/30">
    <div class="section-container">
      <div v-scroll-reveal class="mb-12">
        <SectionHeader>
          {{ isRecruiterView ? t('incidents.recruiter.title') : t('incidents.tech.title') }}
          <template #description>
            {{ isRecruiterView ? t('incidents.recruiter.description') : t('incidents.tech.description') }}
          </template>
        </SectionHeader>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          v-for="(incident, index) in incidents"
          :key="incident.id"
          v-scroll-reveal="{ delay: index * 100 }"
        >
          <IncidentCard :incident="incident" />
        </div>
      </div>

      <div v-scroll-reveal="{ delay: 200 }" class="mt-10 flex items-start gap-4 p-5 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl">
        <svg class="w-5 h-5 text-console-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-1">
            {{ isRecruiterView ? t('incidents.recruiter.lessonsTitle') : t('incidents.tech.lessonsTitle') }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ isRecruiterView ? t('incidents.recruiter.lessonsText') : t('incidents.tech.lessonsText') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useViewMode } from '../composables/useViewMode';
import { incidents } from '../data/profile';
import SectionHeader from '../components/SectionHeader.vue';
import IncidentCard from '../components/IncidentCard.vue';

const { t } = useI18n();
const { isRecruiterView } = useViewMode();
</script>
