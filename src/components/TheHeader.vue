<template>
  <header class="sticky top-0 z-50">
    <!-- Scroll progress bar -->
    <div class="absolute top-0 left-0 right-0 h-[2px] bg-gray-200/50 dark:bg-console-border/30 z-10">
      <div
        class="h-full bg-gradient-to-r from-console-primary to-console-accent transition-none"
        :style="{ width: `${scrollProgress}%` }"
      ></div>
    </div>

    <div class="bg-white/90 dark:bg-console-bg/90 backdrop-blur-xl border-b border-gray-200/60 dark:border-console-border/60">
      <nav class="section-container">
        <div class="flex items-center justify-between gap-4 h-14">

          <!-- Logo -->
          <a href="#" class="flex items-center gap-2.5 shrink-0 group">
            <div class="relative flex items-center justify-center w-2 h-2">
              <div class="absolute inset-0 rounded-full bg-console-success animate-ping opacity-50"></div>
              <div class="relative w-2 h-2 rounded-full bg-console-success"></div>
            </div>
            <span class="text-[15px] font-bold tracking-tight">
              <span class="text-gray-900 dark:text-white">Gonzalo</span>
              <span class="text-console-primary"> Wiñazki</span>
            </span>
          </a>

          <!-- Desktop center: nav links -->
          <div class="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              :class="[
                'relative px-3.5 py-1.5 text-sm font-medium rounded-md transition-all duration-150',
                activeSection === link.section
                  ? 'text-console-primary dark:text-console-primary'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-console-surface/70'
              ]"
            >
              {{ t(`nav.${link.key}`) }}
              <!-- Active underline -->
              <span
                v-if="activeSection === link.section"
                class="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-console-primary"
              ></span>
            </a>
          </div>

          <!-- Desktop right actions -->
          <div class="hidden md:flex items-center gap-2 shrink-0">

            <!-- View mode segmented control -->
            <div class="flex items-center rounded-lg border border-gray-200 dark:border-console-border bg-gray-100/60 dark:bg-console-surface/60 p-0.5 gap-0.5">
              <button
                @click="setView('recruiter')"
                :class="[
                  'px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-150',
                  isRecruiterView
                    ? 'bg-white dark:bg-console-bg text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                ]"
              >
                {{ t('viewToggle.recruiterShort') }}
              </button>
              <button
                @click="setView('techLead')"
                :class="[
                  'px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-150',
                  isTechLeadView
                    ? 'bg-white dark:bg-console-bg text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                ]"
              >
                {{ t('viewToggle.techLeadShort') }}
              </button>
            </div>

            <!-- Divider -->
            <div class="w-px h-5 bg-gray-200 dark:bg-console-border"></div>

            <!-- Language toggle -->
            <button
              @click="toggleLanguage"
              class="p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-console-surface transition-all duration-150"
              :aria-label="`Switch to ${locale === 'en' ? 'Spanish' : 'English'}`"
            >
              <span class="font-mono text-xs font-semibold tracking-wider">{{ locale === 'en' ? 'ES' : 'EN' }}</span>
            </button>

            <!-- Theme toggle -->
            <button
              @click="toggleTheme"
              class="p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-console-surface transition-all duration-150"
              aria-label="Toggle theme"
            >
              <!-- Sun -->
              <svg v-if="isDark" class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              <!-- Moon -->
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            </button>

            <!-- Divider -->
            <div class="w-px h-5 bg-gray-200 dark:bg-console-border"></div>

            <!-- Contact CTA -->
            <a
              href="#deploy"
              class="flex items-center gap-1.5 px-4 py-1.5
                     bg-console-primary text-white text-sm font-semibold rounded-lg
                     hover:bg-blue-500 transition-all duration-150
                     shadow-sm hover:shadow-md hover:shadow-blue-500/20"
            >
              {{ t('nav.contact') }}
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          <!-- Mobile right -->
          <div class="flex md:hidden items-center gap-2">
            <!-- Compact lang + theme -->
            <div class="flex items-center gap-0.5 px-1.5 py-1 rounded-lg border border-gray-200/80 dark:border-console-border/80 bg-gray-100/60 dark:bg-console-surface/60">
              <button
                @click="toggleLanguage"
                class="px-1.5 py-0.5 rounded text-xs font-mono font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >{{ locale === 'en' ? 'ES' : 'EN' }}</button>
              <div class="w-px h-3 bg-gray-300 dark:bg-console-border"></div>
              <button @click="toggleTheme" class="p-0.5 rounded text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg v-if="isDark" class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <svg v-else class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
              </button>
            </div>

            <!-- Hamburger -->
            <button
              @click="toggleMobileMenu"
              class="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-console-surface transition-colors"
              aria-label="Toggle menu"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10"/>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

        </div>
      </nav>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-200/60 dark:border-console-border/60">
          <div class="section-container py-4 space-y-4">

            <!-- View mode tabs mobile -->
            <div class="flex items-center rounded-lg border border-gray-200 dark:border-console-border bg-gray-100/60 dark:bg-console-surface/60 p-0.5 gap-0.5 w-full">
              <button
                @click="setView('recruiter')"
                :class="[
                  'flex-1 py-2 text-xs font-semibold rounded-md transition-all duration-150 text-center',
                  isRecruiterView
                    ? 'bg-white dark:bg-console-bg text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400'
                ]"
              >{{ t('viewToggle.recruiter') }}</button>
              <button
                @click="setView('techLead')"
                :class="[
                  'flex-1 py-2 text-xs font-semibold rounded-md transition-all duration-150 text-center',
                  isTechLeadView
                    ? 'bg-white dark:bg-console-bg text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400'
                ]"
              >{{ t('viewToggle.techLead') }}</button>
            </div>

            <!-- Nav links -->
            <div class="grid grid-cols-2 gap-1">
              <a
                v-for="link in navLinks"
                :key="link.href"
                :href="link.href"
                @click="closeMobileMenu"
                :class="[
                  'px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  activeSection === link.section
                    ? 'bg-console-primary/10 dark:bg-console-primary/15 text-console-primary'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-console-surface'
                ]"
              >
                {{ t(`nav.${link.key}`) }}
              </a>
            </div>

            <!-- CTA -->
            <a
              href="#deploy"
              @click="closeMobileMenu"
              class="flex items-center justify-center gap-2 w-full px-4 py-2.5
                     bg-console-primary text-white text-sm font-semibold rounded-lg
                     hover:bg-blue-500 transition-colors"
            >
              {{ t('nav.contact') }}
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useViewMode } from '../composables/useViewMode';

const { t, locale } = useI18n();
const { isRecruiterView, isTechLeadView, setView } = useViewMode();

const isMobileMenuOpen = ref(false);
const isDark = ref(false);
const scrollProgress = ref(0);
const activeSection = ref('');

const navLinks = [
  { key: 'services', href: '#services', section: 'services' },
  { key: 'incidents', href: '#incidents', section: 'incidents' },
  { key: 'playbooks', href: '#playbooks', section: 'playbooks' },
  { key: 'contact', href: '#deploy', section: 'deploy' },
];

const toggleMobileMenu = () => { isMobileMenuOpen.value = !isMobileMenuOpen.value; };
const closeMobileMenu = () => { isMobileMenuOpen.value = false; };

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark', isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en';
  localStorage.setItem('language', locale.value);
};

// Scroll progress + active section tracking
const sections = ['services', 'incidents', 'playbooks', 'deploy'];

const onScroll = () => {
  // Progress bar
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  // Active section
  let current = '';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 80) current = id;
    }
  }
  activeSection.value = current;

  // Close mobile menu on scroll
  if (isMobileMenuOpen.value) closeMobileMenu();
};

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark');
  window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>
