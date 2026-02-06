<template>
  <footer class="bg-gray-50 dark:bg-console-surface border-t border-gray-200 dark:border-console-border py-8">
    <div class="section-container">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-console-success"></div>
          <span class="text-sm text-gray-600 dark:text-gray-400">
            {{ t('footer.builtWith') }}
          </span>
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          © 2026 Gonzalo Wiñazki. {{ t('footer.allSystemsOperational') }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
