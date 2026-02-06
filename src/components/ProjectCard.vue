<template>
  <div class="card-hover group cursor-pointer">
    <div class="flex items-start justify-between mb-4">
      <h3 class="text-xl font-semibold group-hover:text-console-primary transition-colors">
        {{ translatedProject.title }}
      </h3>
      <div class="flex gap-2">
        <a
          v-if="project.links.github"
          :href="project.links.github"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          :aria-label="t('services.viewGithub')"
          @click.stop
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a
          v-if="project.links.live"
          :href="project.links.live"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          :aria-label="t('services.viewLive')"
          @click.stop
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="space-y-4 mb-6">
      <!-- Recruiter View -->
      <template v-if="isRecruiterView">
        <div>
          <p class="text-xs font-mono text-console-muted uppercase tracking-wider mb-1">{{ t('services.recruiter.challenge') }}</p>
          <p class="text-sm text-gray-700 dark:text-gray-300">{{ translatedProject.challenge }}</p>
        </div>

        <div>
          <p class="text-xs font-mono text-console-muted uppercase tracking-wider mb-1">{{ t('services.recruiter.whatIDid') }}</p>
          <p class="text-sm text-gray-700 dark:text-gray-300">{{ translatedProject.whatIDid }}</p>
        </div>

        <div>
          <p class="text-xs font-mono text-console-muted uppercase tracking-wider mb-1">{{ t('services.recruiter.technologies') }}</p>
          <p class="text-sm font-medium text-console-primary">{{ translatedProject.technologies }}</p>
        </div>

        <div class="bg-green-50 dark:bg-green-900/10 border-l-4 border-console-success p-3 rounded">
          <p class="text-xs font-mono text-console-muted uppercase tracking-wider mb-1">{{ t('services.recruiter.result') }}</p>
          <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ translatedProject.result }}</p>
        </div>
      </template>

      <!-- Tech Lead View -->
      <template v-else>
        <div>
          <p class="text-xs font-mono text-console-muted uppercase tracking-wider mb-1">{{ t('services.tech.problem') }}</p>
          <p class="text-sm text-gray-700 dark:text-gray-300">{{ translatedProject.problem }}</p>
        </div>

        <div>
          <p class="text-xs font-mono text-console-muted uppercase tracking-wider mb-1">{{ t('services.tech.solution') }}</p>
          <p class="text-sm text-gray-700 dark:text-gray-300">{{ translatedProject.solution }}</p>
        </div>

        <div class="bg-green-50 dark:bg-green-900/10 border-l-4 border-console-success p-3 rounded">
          <p class="text-xs font-mono text-console-muted uppercase tracking-wider mb-1">{{ t('services.tech.outcome') }}</p>
          <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ translatedProject.outcome }}</p>
        </div>
      </template>
    </div>

    <div class="flex flex-wrap gap-2 mb-4">
      <Badge
        v-for="tech in project.stack"
        :key="tech"
        variant="tech"
      >
        {{ tech }}
      </Badge>
    </div>

    <!-- Architecture diagram ONLY in Tech Lead View -->
    <div v-if="!isRecruiterView && project.architecture" class="mt-4 pt-4 border-t border-gray-200 dark:border-console-border">
      <p class="text-xs font-mono text-console-muted uppercase tracking-wider mb-3">{{ t('services.tech.architecture') }}</p>
      <ArchitectureDiagram :type="project.architecture" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useViewMode } from '../composables/useViewMode';
import type { Project } from '../data/profile';
import Badge from './Badge.vue';
import ArchitectureDiagram from './ArchitectureDiagram.vue';

const { t, tm } = useI18n();
const { isRecruiterView } = useViewMode();

interface Props {
  project: Project;
}

const props = defineProps<Props>();

const translatedProject = computed(() => {
  const projectData = tm(`data.projects.${props.project.id}`) as any;
  
  if (isRecruiterView.value && projectData.recruiter) {
    return {
      title: projectData.title,
      challenge: projectData.recruiter.challenge,
      whatIDid: projectData.recruiter.whatIDid,
      technologies: projectData.recruiter.technologies,
      result: projectData.recruiter.result,
    };
  } else {
    return {
      title: projectData.title,
      problem: projectData.problem,
      solution: projectData.solution,
      outcome: projectData.outcome,
    };
  }
});
</script>
