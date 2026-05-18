<template>
  <div class="bg-gray-950 dark:bg-console-bg border border-gray-800 dark:border-console-border rounded-xl overflow-hidden shadow-2xl shadow-black/30">
    <!-- Window chrome -->
    <div class="flex items-center gap-2 px-4 py-3 bg-gray-900 dark:bg-black/40 border-b border-gray-800 dark:border-console-border">
      <div class="flex gap-1.5">
        <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <span class="flex-1 text-center text-xs font-mono text-gray-500">gonzalo@backend:~</span>
      <button
        @click="toggleTraffic"
        :class="[
          'px-2.5 py-0.5 rounded text-xs font-mono font-medium transition-all duration-200',
          isTrafficActive
            ? 'bg-console-success/20 text-console-success border border-console-success/30'
            : 'bg-gray-700/50 text-gray-400 border border-gray-700'
        ]"
      >
        {{ isTrafficActive ? '● LIVE' : '○ PAUSED' }}
      </button>
    </div>

    <!-- Metrics grid -->
    <div class="p-5">
      <div class="grid grid-cols-2 gap-4 mb-5">
        <div class="space-y-1">
          <div class="flex items-center gap-1.5">
            <div class="w-1.5 h-1.5 rounded-full bg-console-success animate-pulse"></div>
            <span class="text-xs font-mono text-gray-500 uppercase tracking-wider">{{ t('console.latency') }}</span>
          </div>
          <div class="text-2xl font-bold font-mono text-console-success">
            {{ displayMetrics.latency }}<span class="text-sm font-normal text-gray-500 ml-0.5">ms</span>
          </div>
        </div>

        <div class="space-y-1">
          <div class="flex items-center gap-1.5">
            <div :class="['w-1.5 h-1.5 rounded-full', parseFloat(displayMetrics.errorRate) < 1 ? 'bg-console-success' : 'bg-console-warning animate-pulse']"></div>
            <span class="text-xs font-mono text-gray-500 uppercase tracking-wider">{{ t('console.errorRate') }}</span>
          </div>
          <div :class="['text-2xl font-bold font-mono', parseFloat(displayMetrics.errorRate) < 1 ? 'text-console-success' : 'text-console-warning']">
            {{ displayMetrics.errorRate }}<span class="text-sm font-normal text-gray-500 ml-0.5">%</span>
          </div>
        </div>

        <div class="space-y-1">
          <div class="flex items-center gap-1.5">
            <div class="w-1.5 h-1.5 rounded-full bg-console-primary"></div>
            <span class="text-xs font-mono text-gray-500 uppercase tracking-wider">{{ t('console.throughput') }}</span>
          </div>
          <div class="text-2xl font-bold font-mono text-console-primary">
            {{ displayMetrics.throughput }}<span class="text-xs font-normal text-gray-500 ml-0.5">req/m</span>
          </div>
        </div>

        <div class="space-y-1">
          <div class="flex items-center gap-1.5">
            <div class="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
            <span class="text-xs font-mono text-gray-500 uppercase tracking-wider">{{ t('console.lastDeploy') }}</span>
          </div>
          <div class="text-sm font-mono text-gray-300 pt-1">{{ displayMetrics.lastDeploy }}</div>
        </div>
      </div>

      <!-- Log stream -->
      <div class="bg-black/40 dark:bg-black/60 rounded-lg p-3 font-mono text-xs space-y-1.5 border border-gray-800/60 dark:border-console-border/40">
        <TransitionGroup name="log-list">
          <div v-for="log in visibleLogs" :key="log.id" class="flex gap-2 items-start">
            <span class="text-gray-600 flex-shrink-0">{{ log.time }}</span>
            <span :class="log.levelClass" class="flex-shrink-0 uppercase font-semibold">{{ log.level }}</span>
            <span class="text-gray-400 leading-snug">{{ log.msg }}</span>
          </div>
        </TransitionGroup>
      </div>

      <!-- Status bar -->
      <div class="mt-4 flex items-center justify-between">
        <span class="text-xs font-mono text-gray-600">{{ t('console.systemStatus').toUpperCase() }}</span>
        <div class="flex items-center gap-1.5">
          <div class="w-1.5 h-1.5 rounded-full bg-console-success animate-pulse"></div>
          <span class="text-xs font-mono font-semibold text-console-success">{{ t('console.healthy').toUpperCase() }}</span>
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
const baseMetrics = { latency: 42, errorRate: 0.03, throughput: 1250, lastDeploy: '2h ago' };
const currentMetrics = ref({ ...baseMetrics });
let intervalId: number | null = null;

interface LogEntry {
  id: number;
  time: string;
  level: string;
  levelClass: string;
  msg: string;
}

const logPool: Omit<LogEntry, 'id' | 'time'>[] = [
  { level: 'INFO', levelClass: 'text-blue-400', msg: 'GET /api/v1/orders 200 38ms' },
  { level: 'INFO', levelClass: 'text-blue-400', msg: 'POST /api/v1/payments 201 44ms' },
  { level: 'INFO', levelClass: 'text-blue-400', msg: 'circuit-breaker: upstream healthy' },
  { level: 'INFO', levelClass: 'text-blue-400', msg: 'cache hit ratio: 94.2%' },
  { level: 'DEBUG', levelClass: 'text-gray-500', msg: 'worker pool: 8/16 goroutines active' },
  { level: 'INFO', levelClass: 'text-blue-400', msg: 'GET /api/v1/users 200 29ms' },
  { level: 'WARN', levelClass: 'text-yellow-400', msg: 'rate-limit: 850/1000 rps used' },
  { level: 'INFO', levelClass: 'text-blue-400', msg: 'health-check passed: db, redis, queue' },
  { level: 'INFO', levelClass: 'text-blue-400', msg: 'metric flush: 1,247 data points' },
  { level: 'DEBUG', levelClass: 'text-gray-500', msg: 'GC pause: 1.2ms' },
];

const logs = ref<LogEntry[]>([]);
let logCounter = 0;
let logInterval: number | null = null;

const visibleLogs = computed(() => logs.value.slice(-4));

const addLog = () => {
  const now = new Date();
  const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
  const entry = logPool[logCounter % logPool.length]!;
  const { level, levelClass, msg } = entry;
  logs.value.push({ id: Date.now(), time, level, levelClass, msg });
  if (logs.value.length > 8) logs.value.shift();
  logCounter++;
};

const displayMetrics = computed(() => ({
  latency: Math.round(currentMetrics.value.latency),
  errorRate: currentMetrics.value.errorRate.toFixed(2),
  throughput: Math.round(currentMetrics.value.throughput).toLocaleString(),
  lastDeploy: currentMetrics.value.lastDeploy,
}));

const animateMetric = (current: number, target: number, speed = 0.12) =>
  current + (target - current) * speed;

const updateMetrics = () => {
  if (!isTrafficActive.value) return;
  currentMetrics.value = {
    latency: animateMetric(currentMetrics.value.latency, 30 + Math.random() * 40),
    errorRate: animateMetric(currentMetrics.value.errorRate, Math.random() * 0.4),
    throughput: animateMetric(currentMetrics.value.throughput, 1000 + Math.random() * 500),
    lastDeploy: baseMetrics.lastDeploy,
  };
};

const toggleTraffic = () => {
  isTrafficActive.value = !isTrafficActive.value;

  if (isTrafficActive.value) {
    intervalId = window.setInterval(updateMetrics, 150);
    logInterval = window.setInterval(addLog, 1800);
    addLog();
  } else {
    if (intervalId) { clearInterval(intervalId); intervalId = null; }
    if (logInterval) { clearInterval(logInterval); logInterval = null; }
    const resetInterval = setInterval(() => {
      currentMetrics.value = {
        latency: animateMetric(currentMetrics.value.latency, baseMetrics.latency, 0.2),
        errorRate: animateMetric(currentMetrics.value.errorRate, baseMetrics.errorRate, 0.2),
        throughput: animateMetric(currentMetrics.value.throughput, baseMetrics.throughput, 0.2),
        lastDeploy: baseMetrics.lastDeploy,
      };
      if (
        Math.abs(currentMetrics.value.latency - baseMetrics.latency) < 0.5 &&
        Math.abs(currentMetrics.value.throughput - baseMetrics.throughput) < 5
      ) {
        currentMetrics.value = { ...baseMetrics };
        clearInterval(resetInterval);
      }
    }, 100);
  }
};

onMounted(() => {
  currentMetrics.value = { ...baseMetrics };
  // Show a couple of initial static logs
  addLog(); addLog(); addLog();
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
  if (logInterval) clearInterval(logInterval);
});
</script>

<style scoped>
.log-list-enter-active { transition: all 0.3s ease-out; }
.log-list-enter-from { opacity: 0; transform: translateY(-6px); }
.log-list-leave-active { transition: all 0.2s ease-in; position: absolute; }
.log-list-leave-to { opacity: 0; }
</style>
