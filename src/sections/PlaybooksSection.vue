<template>
  <section id="playbooks" class="section-spacing bg-gray-50/80 dark:bg-console-surface/30">
    <div class="section-container">
      <div v-scroll-reveal class="mb-12">
        <SectionHeader>
          {{ t('playbooks.title') }}
          <template #description>
            {{ t('playbooks.description') }}
          </template>
        </SectionHeader>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(playbook, index) in playbooks"
          :key="playbook.category"
          v-scroll-reveal="{ delay: index * 80 }"
          class="bg-white dark:bg-console-surface rounded-xl border border-gray-200 dark:border-console-border hover:border-console-primary/30 dark:hover:border-console-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 p-6"
        >
          <!-- Category header -->
          <div class="flex items-center gap-2 mb-5">
            <div class="w-1 h-5 bg-gradient-to-b from-console-primary to-console-accent rounded-full"></div>
            <h3 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
              {{ getTranslatedPlaybook(playbook).category }}
            </h3>
          </div>

          <div class="space-y-5">
            <!-- Skills -->
            <div>
              <p class="text-xs font-mono text-console-muted uppercase tracking-widest mb-2.5">
                {{ t('playbooks.skills') }}
              </p>
              <ul class="space-y-1.5">
                <li
                  v-for="(skill, i) in getTranslatedPlaybook(playbook).skills"
                  :key="i"
                  class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <svg class="w-3.5 h-3.5 text-console-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>{{ skill }}</span>
                </li>
              </ul>
            </div>

            <!-- Tools -->
            <div>
              <p class="text-xs font-mono text-console-muted uppercase tracking-widest mb-2.5">
                {{ t('playbooks.tools') }}
              </p>
              <div class="flex flex-wrap gap-1.5">
                <Badge
                  v-for="tool in playbook.tools"
                  :key="tool"
                  variant="default"
                >
                  {{ tool }}
                </Badge>
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
import { playbooks, type Playbook } from '../data/profile';
import SectionHeader from '../components/SectionHeader.vue';
import Badge from '../components/Badge.vue';

const { t, tm } = useI18n();

const playbookKeyMap: Record<string, string> = {
  'API Design': 'api-design',
  'Data': 'data',
  'Reliability': 'reliability',
  'Security Basics': 'security',
  'Tooling': 'tooling',
};

const getTranslatedPlaybook = (playbook: Playbook) => {
  const key = playbookKeyMap[playbook.category];
  const playbookData = tm(`data.playbooks.${key}`) as any;
  return {
    category: playbookData.category || playbook.category,
    skills: (playbookData.skills || playbook.skills) as string[],
  };
};
</script>
