<template>
  <div class="card">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-semibold font-mono">{{ t('console.title').toUpperCase() }}</h3>
      <button
        @click="toggleTraffic"
        :class="[
          'px-3 py-1 rounded text-xs font-mono transition-all duration-200',
          isTrafficActive 
            ? 'bg-console-success text-white' 
            : 'bg-gray-200 dark:bg-console-border text-gray-700 dark:text-gray-300'
        ]"
      >
        {{ isTrafficActive ? t('console.live').toUpperCase() : t('console.paused').toUpperCase() }}
      </button>
    </div>

    <div class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-2 h-2 rounded-full bg-console-success animate-pulse"></div>
            <span class="text-xs font-mono text-console-muted uppercase">{{ t('console.latency') }}</span>
          </div>
          <div class="text-2xl font-bold font-mono text-console-success">
            {{ displayMetrics.latency }}ms
          </div>
        </div>

        <div>
          <div class="flex items-center gap-2 mb-1">
            <div :class="[
              'w-2 h-2 rounded-full',
              parseFloat(displayMetrics.errorRate) < 1 ? 'bg-console-success' : 'bg-console-warning animate-pulse'
            ]"></div>
            <span class="text-xs font-mono text-console-muted uppercase">{{ t('console.errorRate') }}</span>
          </div>
          <div :class="[
            'text-2xl font-bold font-mono',
            parseFloat(displayMetrics.errorRate) < 1 ? 'text-console-success' : 'text-console-warning'
          ]">
            {{ displayMetrics.errorRate }}%
          </div>
        </div>

        <div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-2 h-2 rounded-full bg-console-primary"></div>
            <span class="text-xs font-mono text-console-muted uppercase">{{ t('console.throughput') }}</span>
          </div>
          <div class="text-2xl font-bold font-mono text-console-primary">
            {{ displayMetrics.throughput }}
          </div>
          <div class="text-xs text-console-muted">{{ t('console.reqPerMin') }}</div>
        </div>

        <div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-2 h-2 rounded-full bg-gray-400"></div>
            <span class="text-xs font-mono text-console-muted uppercase">{{ t('console.lastDeploy') }}</span>
          </div>
          <div class="text-sm font-mono text-gray-700 dark:text-gray-300">
            {{ displayMetrics.lastDeploy }}
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-gray-200 dark:border-console-border">
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono text-console-muted">{{ t('console.systemStatus').toUpperCase() }}</span>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-console-success animate-pulse"></div>
            <span class="text-sm font-mono font-semibold text-console-success">{{ t('console.healthy').toUpperCase() }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const isTrafficActive = ref(false);
const baseMetrics = {
  latency: 42,
  errorRate: 0.03,
  throughput: 1250,
  lastDeploy: '2h ago',
};

const currentMetrics = ref({ ...baseMetrics });
let intervalId: number | null = null;

const displayMetrics = computed(() => ({
  latency: Math.round(currentMetrics.value.latency),
  errorRate: currentMetrics.value.errorRate.toFixed(2),
  throughput: Math.round(currentMetrics.value.throughput).toLocaleString(),
  lastDeploy: currentMetrics.value.lastDeploy,
}));

const animateMetric = (
  current: number,
  target: number,
  speed: number = 0.1
): number => {
  const diff = target - current;
  return current + diff * speed;
};

const updateMetrics = () => {
  if (!isTrafficActive.value) return;

  // Generate random targets
  const targetLatency = 30 + Math.random() * 40;
  const targetErrorRate = Math.random() * 0.5;
  const targetThroughput = 1000 + Math.random() * 500;

  currentMetrics.value = {
    latency: animateMetric(currentMetrics.value.latency, targetLatency, 0.15),
    errorRate: animateMetric(currentMetrics.value.errorRate, targetErrorRate, 0.1),
    throughput: animateMetric(currentMetrics.value.throughput, targetThroughput, 0.12),
    lastDeploy: baseMetrics.lastDeploy,
  };
};

const toggleTraffic = () => {
  isTrafficActive.value = !isTrafficActive.value;
  
  if (isTrafficActive.value) {
    intervalId = window.setInterval(updateMetrics, 150);
  } else {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    // Reset to base metrics smoothly
    const resetInterval = setInterval(() => {
      currentMetrics.value = {
        latency: animateMetric(currentMetrics.value.latency, baseMetrics.latency, 0.2),
        errorRate: animateMetric(currentMetrics.value.errorRate, baseMetrics.errorRate, 0.2),
        throughput: animateMetric(currentMetrics.value.throughput, baseMetrics.throughput, 0.2),
        lastDeploy: baseMetrics.lastDeploy,
      };

      // Stop when close enough
      if (
        Math.abs(currentMetrics.value.latency - baseMetrics.latency) < 1 &&
        Math.abs(currentMetrics.value.errorRate - baseMetrics.errorRate) < 0.01 &&
        Math.abs(currentMetrics.value.throughput - baseMetrics.throughput) < 10
      ) {
        currentMetrics.value = { ...baseMetrics };
        clearInterval(resetInterval);
      }
    }, 100);
  }
};

onMounted(() => {
  currentMetrics.value = { ...baseMetrics };
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
