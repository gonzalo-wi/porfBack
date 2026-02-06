<template>
  <section id="playbooks" class="section-spacing bg-gray-50 dark:bg-console-surface/50">
    <div class="section-container">
      <div v-scroll-reveal class="mb-12">
        <SectionHeader>
          {{ t('playbooks.title') }}
          <template #description>
            {{ t('playbooks.description') }}
          </template>
        </SectionHeader>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(playbook, index) in playbooks"
          :key="playbook.category"
          v-scroll-reveal="{ delay: index * 100 }"
          class="card"
        >
          <h3 class="text-lg font-semibold mb-4 text-console-primary">
            {{ getTranslatedPlaybook(playbook).category }}
          </h3>

          <div class="space-y-4">
            <div>
              <p class="text-xs font-mono text-console-muted uppercase tracking-wider mb-2">
                {{ t('playbooks.skills') }}
              </p>
              <ul class="space-y-2">
                <li
                  v-for="(skill, i) in getTranslatedPlaybook(playbook).skills"
                  :key="i"
                  class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <Icon name="check-circle" :size="16" color="success" class="mt-0.5 flex-shrink-0" />
                  <span>{{ skill }}</span>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs font-mono text-console-muted uppercase tracking-wider mb-2">
                {{ t('playbooks.tools') }}
              </p>
              <div class="flex flex-wrap gap-2">
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
import Icon from '../components/Icon.vue';

const { t, tm } = useI18n();

// Map playbook categories to i18n keys
const playbookKeyMap: Record<string, string> = {
  'API Design': 'api-design',
  'Data': 'data',
  'Reliability': 'reliability',
  'Security Basics': 'security',
  'Tooling': 'tooling',
};

const getTranslatedPlaybook = (playbook: Playbook) => {
  const key = playbookKeyMap[playbook.category];
  // Use tm() to access arrays and objects properly
  const playbookData = tm(`data.playbooks.${key}`) as any;
  
  return {
    category: playbookData.category || playbook.category,
    skills: (playbookData.skills || playbook.skills) as string[],
  };
};
</script>
