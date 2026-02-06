<template>
  <section class="section-spacing bg-gradient-to-b from-white to-gray-50 dark:from-console-bg dark:to-console-surface">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 animate-in">
          <!-- Recruiter View: Photo + Status Badge -->
          <div v-if="isRecruiterView" class="flex items-center gap-6">
            <!-- Professional Photo -->
            <div class="relative group">
              <div class="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-4 ring-console-primary/20 dark:ring-console-primary/30 shadow-lg group-hover:ring-console-primary/40 transition-all duration-300">
                <img 
                  :src="profileImage" 
                  alt="Gonzalo Wiñazki - Backend Developer"
                  class="w-full h-full object-cover object-top"
                  style="object-position: center 20%;"
                  loading="eager"
                />
              </div>
              <!-- Online Status Indicator -->
              <div class="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-console-success border-4 border-white dark:border-console-bg shadow-lg"></div>
            </div>

            <!-- System Status Badge -->
            <div class="flex-1">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <div class="w-2 h-2 rounded-full bg-console-success animate-pulse"></div>
                <span class="text-sm font-mono text-green-700 dark:text-green-300">{{ t('hero.systemStatus') }}: {{ t('hero.healthy') }}</span>
              </div>
            </div>
          </div>

          <!-- Tech Lead View: Only Status Badge -->
          <div v-else class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <div class="w-2 h-2 rounded-full bg-console-success animate-pulse"></div>
            <span class="text-sm font-mono text-green-700 dark:text-green-300">{{ t('hero.systemStatus') }}: {{ t('hero.healthy') }}</span>
          </div>

          <div>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {{ profile.role }}
            </h1>
            <p class="text-2xl md:text-3xl text-gradient font-semibold mb-6">
              {{ isRecruiterView ? t('hero.recruiter.tagline') : t('hero.tech.tagline') }}
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ isRecruiterView ? t('hero.recruiter.bio') : t('hero.tech.bio') }}
            </p>
          </div>

          <div class="flex flex-wrap gap-4">
            <a href="#services" class="btn-primary">
              {{ t('hero.viewProjects') }}
            </a>
            <a href="#deploy" class="btn-secondary">
              {{ t('hero.getInTouch') }}
            </a>
          </div>

          <div class="flex flex-wrap gap-3">
            <Badge
              v-for="tech in profile.stack.slice(0, 6)"
              :key="tech"
              variant="tech"
            >
              {{ tech }}
            </Badge>
          </div>
        </div>

        <div class="lg:pl-12">
          <SystemConsole />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useViewMode } from '../composables/useViewMode';
import { profile } from '../data/profile';
import Badge from '../components/Badge.vue';
import SystemConsole from '../components/SystemConsole.vue';
import profileImage from '../assets/perfil.jpeg';

const { t } = useI18n();
const { isRecruiterView } = useViewMode();
</script>
