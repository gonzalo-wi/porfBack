<template>
  <div class="relative group">
    <!-- Botón Principal con Borde Brillante -->
    <button
      @click="toggleView"
      class="relative flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm
             bg-console-primary text-white
             border-2 border-console-primary
             hover:bg-console-primary/90 hover:border-console-accent
             hover:shadow-xl hover:shadow-console-primary/40 hover:scale-105 active:scale-95
             transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-console-accent focus:ring-offset-2
             dark:focus:ring-offset-console-bg"
      :aria-label="`Switch to ${isRecruiterView ? t('viewToggle.techLead') : t('viewToggle.recruiter')} view`"
    >
      <!-- Icon with Flip Animation -->
      <svg 
        class="w-5 h-5 transition-all duration-500"
        :class="{ 'rotate-180 scale-110': isTechLeadView }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2.5" 
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
      
      <!-- Text with Responsive Display -->
      <span class="hidden sm:inline font-bold">
        {{ isRecruiterView ? t('viewToggle.recruiter') : t('viewToggle.techLead') }}
      </span>
      <span class="sm:hidden font-bold">
        {{ isRecruiterView ? t('viewToggle.recruiterShort') : t('viewToggle.techLeadShort') }}
      </span>
      
      <!-- Badge Indicator -->
      <span class="absolute -top-1 -right-1 flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-300"></span>
      </span>
    </button>
    
    <!-- Tooltip on Hover -->
    <div class="absolute left-1/2 -translate-x-1/2 -bottom-10 opacity-0 group-hover:opacity-100 
                transition-opacity duration-200 pointer-events-none z-50">
      <div class="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium 
                  px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
        {{ isRecruiterView ? '🚀 Ver modo técnico' : '👔 Ver modo reclutador' }}
        <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 
                    bg-gray-900 dark:bg-gray-100"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useViewMode } from '../composables/useViewMode'
import { useI18n } from 'vue-i18n'

const { isRecruiterView, isTechLeadView, toggleView } = useViewMode()
const { t } = useI18n()
</script>
