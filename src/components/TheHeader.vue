<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-console-bg/80 backdrop-blur-2xl border-b border-gray-200/50 dark:border-console-border/50 shadow-lg">
    <nav class="section-container py-3">
      <div class="flex items-center justify-between gap-8">
        <!-- Logo Mejorado con animación -->
        <a href="#" class="flex items-center gap-3 group shrink-0 relative">
          <!-- Círculo de estado con efecto glow -->
          <div class="relative">
            <div class="w-2.5 h-2.5 rounded-full bg-console-success animate-pulse shadow-lg shadow-console-success/50"></div>
            <div class="absolute inset-0 w-2.5 h-2.5 rounded-full bg-console-success animate-ping"></div>
          </div>
          
          <!-- Nombre con hover effect -->
          <span class="text-xl font-bold tracking-tight">
            <span class="text-gray-900 dark:text-white transition-all group-hover:text-console-primary">Gonzalo </span>
            <span class="text-console-primary group-hover:text-console-accent transition-all">Wiñazki</span>
          </span>
          
          <!-- Underline animado -->
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-console-primary to-console-accent transition-all duration-300 group-hover:w-full"></span>
        </a>

        <!-- Desktop Navigation - Mejorada con pills -->
        <div class="hidden md:flex items-center gap-2 flex-1 justify-center">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 
                   rounded-lg transition-all duration-200 group/nav
                   hover:text-console-primary dark:hover:text-console-primary
                   hover:bg-console-primary/10 dark:hover:bg-console-primary/20"
          >
            {{ t(`nav.${link.key}`) }}
            <!-- Dot indicator on hover -->
            <span class="absolute top-1 right-1 w-1 h-1 rounded-full bg-console-primary opacity-0 group-hover/nav:opacity-100 transition-opacity"></span>
          </a>
        </div>

        <!-- Right Side Actions - Agrupadas con mejor diseño -->
        <div class="flex items-center gap-2 shrink-0">
          <!-- ViewToggle -->
          <ViewToggle class="hidden lg:flex" />
          
          <!-- Toggles en grupo con separador -->
          <div class="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-lg bg-gray-100/50 dark:bg-console-surface/50 border border-gray-200/50 dark:border-console-border/50">
            <LanguageToggle />
            <div class="w-px h-5 bg-gray-300 dark:bg-gray-600"></div>
            <ThemeToggle />
          </div>
          
          <!-- CV Button mejorado con badge -->
          <a
            href="#deploy"
            class="hidden sm:flex items-center gap-2 px-5 py-2.5 
                   bg-console-success text-white font-semibold rounded-lg 
                   border-2 border-console-success
                   hover:bg-console-success/90 hover:border-emerald-400
                   hover:shadow-xl hover:shadow-console-success/40 hover:scale-105 active:scale-95 
                   transition-all duration-200 group relative overflow-hidden"
          >
            <!-- Shine effect on hover -->
            <span class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            
            <svg class="w-4 h-4 group-hover:animate-bounce relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span class="relative z-10">CV</span>
            
            <!-- Pulse badge -->
            <span class="absolute -top-1 -right-1 flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-white/90"></span>
            </span>
          </a>

          <!-- Mobile: Toggles + Menu Button Mejorado -->
          <div class="flex sm:hidden items-center gap-1.5">
            <!-- Toggles en grupo -->
            <div class="flex items-center gap-1 px-1.5 py-1 rounded-lg bg-gray-100/50 dark:bg-console-surface/50 border border-gray-200/50 dark:border-console-border/50">
              <LanguageToggle />
              <div class="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
              <ThemeToggle />
            </div>
            
            <!-- Hamburger button mejorado -->
            <button
              @click="toggleMobileMenu"
              class="p-2.5 rounded-lg hover:bg-console-primary/10 dark:hover:bg-console-primary/20 
                     transition-all duration-200 group relative"
              :class="{ 'bg-console-primary/10 dark:bg-console-primary/20': isMobileMenuOpen }"
              aria-label="Toggle menu"
            >
              <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-90': isMobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  v-if="!isMobileMenuOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <!-- Indicator dot cuando está abierto -->
              <span v-if="isMobileMenuOpen" class="absolute top-1 right-1 w-2 h-2 rounded-full bg-console-primary"></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Mejorado -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden mt-4 py-4 border-t border-gray-200/50 dark:border-console-border/50"
        >
          <div class="flex flex-col gap-2">
            <!-- ViewToggle con mejor espaciado -->
            <div class="mb-2">
              <ViewToggle />
            </div>
            
            <!-- Links con iconos -->
            <a
              v-for="(link, index) in navLinks"
              :key="link.href"
              :href="link.href"
              @click="closeMobileMenu"
              class="group px-4 py-3 rounded-xl text-base font-medium 
                     text-gray-700 dark:text-gray-300 
                     hover:text-console-primary dark:hover:text-console-primary 
                     hover:bg-gradient-to-r hover:from-console-primary/10 hover:to-console-accent/10
                     dark:hover:from-console-primary/20 dark:hover:to-console-accent/20
                     transition-all duration-200 flex items-center justify-between"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <span>{{ t(`nav.${link.key}`) }}</span>
              <svg class="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            <!-- Separador -->
            <div class="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-2"></div>
            
            <!-- Mobile CV Button mejorado -->
            <a
              href="#deploy"
              @click="closeMobileMenu"
              class="flex items-center justify-center gap-2 px-5 py-3.5 
                     bg-console-success text-white font-semibold rounded-xl 
                     border-2 border-console-success
                     hover:bg-console-success/90 hover:shadow-xl hover:shadow-console-success/40
                     transition-all mt-2 group relative overflow-hidden"
            >
              <!-- Shine effect -->
              <span class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              
              <svg class="w-5 h-5 group-hover:animate-bounce relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span class="relative z-10 font-bold">{{ t('nav.downloadCV') }}</span>
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ThemeToggle from './ThemeToggle.vue';
import LanguageToggle from './LanguageToggle.vue';
import ViewToggle from './ViewToggle.vue';

const { t } = useI18n();
const isMobileMenuOpen = ref(false);

// Simplified nav links - only essential sections
const navLinks = [
  { key: 'services', href: '#services' },
  { key: 'incidents', href: '#incidents' },
  { key: 'playbooks', href: '#playbooks' },
  { key: 'contact', href: '#deploy' },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>
