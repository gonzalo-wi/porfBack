<template>
  <section id="services" class="section-spacing bg-gray-50 dark:bg-console-surface/50">
    <div class="section-container">
      <div class="mb-12">
        <SectionHeader>
          {{ isRecruiterView ? t('services.recruiter.title') : t('services.tech.title') }}
          <template #description>
            {{ isRecruiterView ? t('services.recruiter.description') : t('services.tech.description') }}
          </template>
        </SectionHeader>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useViewMode } from '../composables/useViewMode';
import { projects } from '../data/profile';
import SectionHeader from '../components/SectionHeader.vue';
import ProjectCard from '../components/ProjectCard.vue';

const { t } = useI18n();
const { isRecruiterView } = useViewMode();
</script>
