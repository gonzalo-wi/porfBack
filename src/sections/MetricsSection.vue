<template>
  <section id="metrics" class="section-spacing bg-gray-50/80 dark:bg-console-surface/30">
    <div class="section-container">
      <div v-scroll-reveal class="mb-12">
        <SectionHeader>
          {{ isRecruiterView ? t('metrics.recruiter.title') : t('metrics.tech.title') }}
          <template #description>
            {{ isRecruiterView ? t('metrics.recruiter.description') : t('metrics.tech.description') }}
          </template>
        </SectionHeader>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="(metric, index) in translatedMetrics"
          :key="index"
          v-scroll-reveal="{ delay: index * 80 }"
        >
          <StatCard :metric="metric" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useViewMode } from '../composables/useViewMode';
import SectionHeader from '../components/SectionHeader.vue';
import StatCard from '../components/StatCard.vue';

const { t } = useI18n();
const { isRecruiterView } = useViewMode();

const translatedMetrics = computed(() => {
  const prefix = isRecruiterView.value ? 'metrics.recruiter' : 'metrics.tech';

  if (isRecruiterView.value) {
    return [
      { label: t(`${prefix}.timeSaved.label`), value: t(`${prefix}.timeSaved.value`), description: t(`${prefix}.timeSaved.description`), icon: 'zap' },
      { label: t(`${prefix}.processesAutomated.label`), value: t(`${prefix}.processesAutomated.value`), description: t(`${prefix}.processesAutomated.description`), icon: 'settings' },
      { label: t(`${prefix}.systemsIntegrated.label`), value: t(`${prefix}.systemsIntegrated.value`), description: t(`${prefix}.systemsIntegrated.description`), icon: 'link' },
      { label: t(`${prefix}.projectsDelivered.label`), value: t(`${prefix}.projectsDelivered.value`), description: t(`${prefix}.projectsDelivered.description`), icon: 'check' },
    ];
  } else {
    return [
      { label: t(`${prefix}.timeSaved.label`), value: t(`${prefix}.timeSaved.value`), description: t(`${prefix}.timeSaved.description`), icon: 'zap' },
      { label: t(`${prefix}.apisShipped.label`), value: t(`${prefix}.apisShipped.value`), description: t(`${prefix}.apisShipped.description`), icon: 'rocket' },
      { label: t(`${prefix}.integrations.label`), value: t(`${prefix}.integrations.value`), description: t(`${prefix}.integrations.description`), icon: 'link' },
      { label: t(`${prefix}.uptime.label`), value: t(`${prefix}.uptime.value`), description: t(`${prefix}.uptime.description`), icon: 'check' },
    ];
  }
});
</script>
