<template>
  <section class="relative min-h-[92vh] flex items-center overflow-hidden">
    <!-- Background accents -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/8 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/6 rounded-full blur-3xl"></div>
    </div>

    <div class="section-container w-full py-16 md:py-24">
      <div class="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

        <!-- Left: Main Content (3/5) -->
        <div class="lg:col-span-3 space-y-8 animate-in">

          <!-- Status badge -->
          <div class="flex items-center gap-3">
            <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
              <span class="w-1.5 h-1.5 rounded-full bg-console-success animate-pulse"></span>
              <span class="text-xs font-mono font-medium text-green-700 dark:text-green-400">{{ t('hero.systemStatus') }}: {{ t('hero.healthy') }}</span>
            </span>
            <span class="text-xs font-mono text-gray-400 dark:text-console-muted hidden sm:inline">system v2.4.1 · uptime 99.9%</span>
          </div>

          <!-- Name + role -->
          <div>
            <div v-if="isRecruiterView" class="flex items-center gap-5 mb-5">
              <div class="relative flex-shrink-0">
                <div class="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden ring-2 ring-console-primary/20 dark:ring-console-primary/30 shadow-xl">
                  <img
                    :src="profileImage"
                    alt="Gonzalo Wiñazki"
                    class="w-full h-full object-cover"
                    style="object-position: center 20%;"
                    loading="eager"
                  />
                </div>
                <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-console-success border-2 border-white dark:border-console-bg shadow-md"></div>
              </div>
              <div>
                <p class="text-sm font-mono text-gray-500 dark:text-console-muted mb-1">$ whoami</p>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
                  {{ profile.name.split(' ')[0] }}<span class="text-gradient"> {{ profile.name.split(' ')[1] }}</span>
                </h1>
              </div>
            </div>

            <div v-else class="mb-5">
              <p class="text-sm font-mono text-gray-500 dark:text-console-muted mb-1">$ whoami</p>
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
                {{ profile.name.split(' ')[0] }}<span class="text-gradient"> {{ profile.name.split(' ')[1] }}</span>
              </h1>
            </div>

            <p class="text-lg md:text-xl font-mono font-medium text-gray-500 dark:text-console-muted mb-5">
              <span class="text-console-primary dark:text-console-primary">→</span>
              {{ profile.role }}
            </p>

            <p class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-snug">
              {{ isRecruiterView ? t('hero.recruiter.tagline') : t('hero.tech.tagline') }}
            </p>
          </div>

          <!-- Bio -->
          <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
            {{ isRecruiterView ? t('hero.recruiter.bio') : t('hero.tech.bio') }}
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-3">
            <a href="#services" class="btn-primary flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
              {{ t('hero.viewProjects') }}
            </a>
            <a href="#deploy" class="btn-secondary flex items-center gap-2">
              {{ t('hero.getInTouch') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          <!-- Stack badges -->
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="tech in profile.stack"
              :key="tech"
              variant="tech"
            >
              {{ tech }}
            </Badge>
          </div>
        </div>

        <!-- Right: System Console (2/5) -->
        <div class="lg:col-span-2">
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
