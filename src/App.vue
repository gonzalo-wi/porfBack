<template>
  <div class="min-h-screen relative">
    <!-- System Background -->
    <SystemBackground :viewMode="isRecruiterView ? 'recruiter' : 'tech'" />
    
    <!-- Content Layer -->
    <div class="relative z-10">
      <TheHeader />
      
      <main>
        <HeroSection />
        <MetricsSection />
        <ServicesSection />
        <IncidentsSection />
        <DayInProductionSection />
        <SystemHealthSection />
        <OptimizeForSection />
        <PlaybooksSection />
        <LogsSection />
        <DeploySection />
      </main>

      <TheFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import SystemBackground from './components/SystemBackground.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import HeroSection from './sections/HeroSection.vue';
import MetricsSection from './sections/MetricsSection.vue';
import ServicesSection from './sections/ServicesSection.vue';
import IncidentsSection from './sections/IncidentsSection.vue';
import DayInProductionSection from './sections/DayInProductionSection.vue';
import SystemHealthSection from './sections/SystemHealthSection.vue';
import OptimizeForSection from './sections/OptimizeForSection.vue';
import PlaybooksSection from './sections/PlaybooksSection.vue';
import LogsSection from './sections/LogsSection.vue';
import DeploySection from './sections/DeploySection.vue';
import { useViewMode } from './composables/useViewMode';

const { isRecruiterView } = useViewMode();
</script>

<style>
/* Global styles are in style.css */
</style>
