<template>
  <div class="card">
    <!-- Severity indicator ONLY in Tech Lead View -->
    <div v-if="!isRecruiterView" class="flex items-start justify-between mb-4">
      <div class="flex items-center gap-3">
        <div 
          :class="[
            'w-3 h-3 rounded-full',
            severityColor
          ]"
          :aria-label="`Severity ${incident.severity}`"
        />
        <Badge :variant="severityVariant">{{ incident.severity }}</Badge>
      </div>
      <span class="text-xs font-mono text-console-muted">{{ incident.timestamp }}</span>
    </div>

    <h3 class="text-lg font-semibold mb-4">{{ translatedIncident.title }}</h3>

    <div class="space-y-4">
      <!-- Recruiter View: Situation → Action → Result -->
      <template v-if="isRecruiterView">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-mono text-console-primary">●</span>
            <span class="text-sm font-medium text-console-muted">{{ t('incidents.recruiter.situation').toUpperCase() }}</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 ml-4">{{ translatedIncident.situation }}</p>
        </div>

        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-mono text-console-warning">◆</span>
            <span class="text-sm font-medium text-console-muted">{{ t('incidents.recruiter.action').toUpperCase() }}</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 ml-4">{{ translatedIncident.action }}</p>
        </div>

        <div>
          <div class="flex items-center gap-2 mb-2">
            <Icon name="check-circle" :size="16" color="success" />
            <span class="text-sm font-medium text-console-muted">{{ t('incidents.recruiter.result').toUpperCase() }}</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 ml-4">{{ translatedIncident.result }}</p>
        </div>
      </template>

      <!-- Tech Lead View: Symptom → Root Cause → Fix → Prevention -->
      <template v-else>
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-mono text-console-error">●</span>
            <span class="text-sm font-medium text-console-muted">{{ t('incidents.tech.symptom').toUpperCase() }}</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 ml-4">{{ translatedIncident.symptom }}</p>
        </div>

        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-mono text-console-warning">◆</span>
            <span class="text-sm font-medium text-console-muted">{{ t('incidents.tech.rootCause').toUpperCase() }}</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 ml-4">{{ translatedIncident.rootCause }}</p>
        </div>

        <div>
          <div class="flex items-center gap-2 mb-2">
            <Icon name="check-circle" :size="16" color="success" />
            <span class="text-sm font-medium text-console-muted">{{ t('incidents.tech.fix').toUpperCase() }}</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 ml-4">{{ translatedIncident.fix }}</p>
        </div>

        <div>
          <div class="flex items-center gap-2 mb-2">
            <Icon name="shield" :size="16" color="primary" />
            <span class="text-sm font-medium text-console-muted">{{ t('incidents.tech.prevention').toUpperCase() }}</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 ml-4">{{ translatedIncident.prevention }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useViewMode } from '../composables/useViewMode';
import type { Incident } from '../data/profile';
import Badge from './Badge.vue';
import Icon from './Icon.vue';

const { t, tm } = useI18n();
const { isRecruiterView } = useViewMode();

interface Props {
  incident: Incident;
}

const props = defineProps<Props>();

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

const severityColor = computed(() => {
  const colors = {
    'SEV-1': 'bg-console-error animate-pulse-slow',
    'SEV-2': 'bg-console-warning',
    'SEV-3': 'bg-console-success',
  };
  return colors[props.incident.severity];
});

const severityVariant = computed(() => {
  const variants = {
    'SEV-1': 'error' as const,
    'SEV-2': 'warning' as const,
    'SEV-3': 'success' as const,
  };
  return variants[props.incident.severity];
});
</script>
