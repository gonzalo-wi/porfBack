<template>
  <div class="group bg-white dark:bg-console-surface rounded-xl border border-gray-200 dark:border-console-border hover:border-console-primary/30 dark:hover:border-console-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 overflow-hidden">
    <!-- Severity top bar -->
    <div :class="['h-0.5 w-full', severityBarClass]"></div>

    <div class="p-6">
      <!-- Header: severity badge + timestamp -->
      <div v-if="!isRecruiterView" class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <div :class="['w-2 h-2 rounded-full flex-shrink-0', severityDotClass]"></div>
          <Badge :variant="severityVariant">{{ incident.severity }}</Badge>
        </div>
        <span class="text-xs font-mono text-console-muted">{{ incident.timestamp }}</span>
      </div>

      <h3 class="text-base font-bold text-gray-900 dark:text-white mb-4 leading-tight">
        {{ translatedIncident.title }}
      </h3>

      <div class="space-y-3">
        <!-- Recruiter View: Situation → Action → Result -->
        <template v-if="isRecruiterView">
          <div class="flex gap-2.5">
            <span class="text-xs font-mono text-console-primary flex-shrink-0 pt-0.5">●</span>
            <div>
              <span class="text-xs font-mono text-console-muted uppercase tracking-widest block mb-0.5">{{ t('incidents.recruiter.situation') }}</span>
              <p class="text-sm text-gray-700 dark:text-gray-300">{{ translatedIncident.situation }}</p>
            </div>
          </div>
          <div class="flex gap-2.5">
            <span class="text-xs font-mono text-console-warning flex-shrink-0 pt-0.5">◆</span>
            <div>
              <span class="text-xs font-mono text-console-muted uppercase tracking-widest block mb-0.5">{{ t('incidents.recruiter.action') }}</span>
              <p class="text-sm text-gray-700 dark:text-gray-300">{{ translatedIncident.action }}</p>
            </div>
          </div>
          <div class="flex gap-2.5 pt-1 border-t border-gray-100 dark:border-console-border/50">
            <span class="text-xs font-mono text-console-success flex-shrink-0 pt-0.5">✓</span>
            <div>
              <span class="text-xs font-mono text-console-muted uppercase tracking-widest block mb-0.5">{{ t('incidents.recruiter.result') }}</span>
              <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">{{ translatedIncident.result }}</p>
            </div>
          </div>
        </template>

        <!-- Tech Lead View: Symptom → Root Cause → Fix → Prevention -->
        <template v-else>
          <div class="flex gap-2.5">
            <span class="text-xs font-mono text-console-error flex-shrink-0 pt-0.5">●</span>
            <div>
              <span class="text-xs font-mono text-console-muted uppercase tracking-widest block mb-0.5">{{ t('incidents.tech.symptom') }}</span>
              <p class="text-sm text-gray-700 dark:text-gray-300">{{ translatedIncident.symptom }}</p>
            </div>
          </div>
          <div class="flex gap-2.5">
            <span class="text-xs font-mono text-console-warning flex-shrink-0 pt-0.5">◆</span>
            <div>
              <span class="text-xs font-mono text-console-muted uppercase tracking-widest block mb-0.5">{{ t('incidents.tech.rootCause') }}</span>
              <p class="text-sm text-gray-700 dark:text-gray-300">{{ translatedIncident.rootCause }}</p>
            </div>
          </div>
          <div class="flex gap-2.5">
            <span class="text-xs font-mono text-console-success flex-shrink-0 pt-0.5">✓</span>
            <div>
              <span class="text-xs font-mono text-console-muted uppercase tracking-widest block mb-0.5">{{ t('incidents.tech.fix') }}</span>
              <p class="text-sm text-gray-700 dark:text-gray-300">{{ translatedIncident.fix }}</p>
            </div>
          </div>
          <div class="flex gap-2.5 pt-1 border-t border-gray-100 dark:border-console-border/50">
            <span class="text-xs font-mono text-console-primary flex-shrink-0 pt-0.5">⬡</span>
            <div>
              <span class="text-xs font-mono text-console-muted uppercase tracking-widest block mb-0.5">{{ t('incidents.tech.prevention') }}</span>
              <p class="text-sm text-gray-700 dark:text-gray-300">{{ translatedIncident.prevention }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useViewMode } from '../composables/useViewMode';
import type { Incident } from '../data/profile';
import Badge from './Badge.vue';

const { t, tm } = useI18n();
const { isRecruiterView } = useViewMode();

const props = defineProps<{ incident: Incident }>();

const translatedIncident = computed(() => {
  const incidentData = tm(`data.incidents.${props.incident.id}`) as any;

  if (isRecruiterView.value && incidentData.recruiter) {
    return {
      title: incidentData.recruiter.title,
      situation: incidentData.recruiter.situation,
      action: incidentData.recruiter.action,
      result: incidentData.recruiter.result,
    };
  } else {
    return {
      title: incidentData.title,
      symptom: incidentData.symptom,
      rootCause: incidentData.rootCause,
      fix: incidentData.fix,
      prevention: incidentData.prevention,
    };
  }
});

const severityBarClass = computed(() => ({
  'SEV-1': 'bg-console-error',
  'SEV-2': 'bg-console-warning',
  'SEV-3': 'bg-console-success',
})[props.incident.severity]);

const severityDotClass = computed(() => ({
  'SEV-1': 'bg-console-error animate-pulse',
  'SEV-2': 'bg-console-warning',
  'SEV-3': 'bg-console-success',
})[props.incident.severity]);

const severityVariant = computed(() => ({
  'SEV-1': 'error' as const,
  'SEV-2': 'warning' as const,
  'SEV-3': 'success' as const,
})[props.incident.severity]);
</script>
