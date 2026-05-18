<template>
  <div class="group relative bg-white dark:bg-console-surface rounded-xl border border-gray-200 dark:border-console-border hover:border-console-primary/40 dark:hover:border-console-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 overflow-hidden">
    <!-- Top accent line -->
    <div class="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-console-primary to-console-accent transition-all duration-500 rounded-t-xl"></div>

    <div class="p-6">
      <!-- Header -->
      <div class="flex items-start justify-between mb-5">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-console-primary dark:group-hover:text-console-primary transition-colors leading-tight">
          {{ translatedProject.title }}
        </h3>
        <div class="flex gap-1 ml-3 flex-shrink-0">
          <a
            v-if="project.links.github"
            :href="project.links.github"
            target="_blank"
            rel="noopener noreferrer"
            class="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-console-border/50 transition-all"
            :aria-label="t('services.viewGithub')"
            @click.stop
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            v-if="project.links.live"
            :href="project.links.live"
            target="_blank"
            rel="noopener noreferrer"
            class="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-console-border/50 transition-all"
            :aria-label="t('services.viewLive')"
            @click.stop
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Content -->
      <div class="space-y-4 mb-5">
        <!-- Recruiter View -->
        <template v-if="isRecruiterView">
          <div>
            <p class="text-xs font-mono text-console-muted uppercase tracking-widest mb-1.5">{{ t('services.recruiter.challenge') }}</p>
            <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{{ translatedProject.challenge }}</p>
          </div>
          <div>
            <p class="text-xs font-mono text-console-muted uppercase tracking-widest mb-1.5">{{ t('services.recruiter.whatIDid') }}</p>
            <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{{ translatedProject.whatIDid }}</p>
          </div>
          <div class="bg-green-50 dark:bg-emerald-950 border border-green-200 dark:border-emerald-800/60 rounded-lg p-3.5">
            <p class="text-xs font-mono text-green-600 dark:text-emerald-400 uppercase tracking-widest mb-1">{{ t('services.recruiter.result') }}</p>
            <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">{{ translatedProject.result }}</p>
          </div>
        </template>

        <!-- Tech Lead View -->
        <template v-else>
          <div>
            <p class="text-xs font-mono text-console-muted uppercase tracking-widest mb-1.5">{{ t('services.tech.problem') }}</p>
            <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{{ translatedProject.problem }}</p>
          </div>
          <div>
            <p class="text-xs font-mono text-console-muted uppercase tracking-widest mb-1.5">{{ t('services.tech.solution') }}</p>
            <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{{ translatedProject.solution }}</p>
          </div>
          <div class="bg-green-50 dark:bg-emerald-950 border border-green-200 dark:border-emerald-800/60 rounded-lg p-3.5">
            <p class="text-xs font-mono text-green-600 dark:text-emerald-400 uppercase tracking-widest mb-1">{{ t('services.tech.outcome') }}</p>
            <p class="text-sm font-semibold text-gray-900 dark:text-emerald-100">{{ translatedProject.outcome }}</p>
          </div>
        </template>
      </div>

      <!-- Stack badges -->
      <div class="flex flex-wrap gap-1.5 mb-4">
        <Badge v-for="tech in project.stack" :key="tech" variant="tech">{{ tech }}</Badge>
      </div>

      <!-- Architecture diagram — Tech Lead only -->
      <div v-if="!isRecruiterView && project.architecture" class="mt-4 pt-4 border-t border-gray-100 dark:border-console-border/60">
        <p class="text-xs font-mono text-console-muted uppercase tracking-widest mb-3">{{ t('services.tech.architecture') }}</p>
        <ArchitectureDiagram :type="project.architecture" />
      </div>
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

const props = defineProps<{ project: Project }>();

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
