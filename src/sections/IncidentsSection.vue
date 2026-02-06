<template>
  <section id="incidents" class="section-spacing">
    <div class="section-container">
      <div v-scroll-reveal class="mb-12">
        <SectionHeader>
          {{ isRecruiterView ? t('incidents.recruiter.title') : t('incidents.tech.title') }}
          <template #description>
            {{ isRecruiterView ? t('incidents.recruiter.description') : t('incidents.tech.description') }}
          </template>
        </SectionHeader>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-for="(incident, index) in incidents"
          :key="incident.id"
          v-scroll-reveal="{ delay: index * 150 }"
        >
          <IncidentCard :incident="incident" />
        </div>
      </div>

      <div v-scroll-reveal="{ delay: 300 }" class="mt-12 p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl">
        <div class="flex items-start gap-4">
          <div class="text-3xl">💡</div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {{ isRecruiterView ? t('incidents.recruiter.lessonsTitle') : t('incidents.tech.lessonsTitle') }}
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              {{ isRecruiterView ? t('incidents.recruiter.lessonsText') : t('incidents.tech.lessonsText') }}
            </p>
          </div>
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
