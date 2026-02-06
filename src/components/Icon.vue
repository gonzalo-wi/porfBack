<template>
  <component 
    :is="iconComponent" 
    :size="size"
    :stroke-width="strokeWidth"
    :class="['icon-wrapper', colorClass]"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Zap,
  Rocket,
  Link2,
  CheckCircle2,
  Server,
  Database,
  GitBranch,
  Clock,
  Shield,
  Activity,
  TrendingUp,
  TrendingDown,
  Code2,
  Terminal,
  Package,
  Settings,
  AlertTriangle,
  XCircle,
  Info,
  Target,
  Layers,
  Cloud,
  Lock,
  Gauge,
  Workflow,
  FileCode,
  GitMerge,
  Users,
  Eye,
  Play,
  Lightbulb
} from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  name: string
  size?: number
  strokeWidth?: number
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'gray'
}>(), {
  size: 24,
  strokeWidth: 2,
  color: 'primary'
})

const iconMap: Record<string, any> = {
  // Métricas y performance
  'zap': Zap,
  'rocket': Rocket,
  'link': Link2,
  'check': CheckCircle2,
  'check-circle': CheckCircle2,
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,
  'activity': Activity,
  'gauge': Gauge,
  
  // Infraestructura
  'server': Server,
  'database': Database,
  'cloud': Cloud,
  'layers': Layers,
  
  // DevOps
  'git-branch': GitBranch,
  'git-merge': GitMerge,
  'workflow': Workflow,
  'terminal': Terminal,
  'package': Package,
  
  // Código y desarrollo
  'code': Code2,
  'file-code': FileCode,
  
  // Seguridad y monitoreo
  'shield': Shield,
  'lock': Lock,
  'eye': Eye,
  'target': Target,
  
  // Estados
  'settings': Settings,
  'alert': AlertTriangle,
  'error': XCircle,
  'info': Info,
  'clock': Clock,
  'play': Play,
  'users': Users,
  'lightbulb': Lightbulb,
}

const iconComponent = computed(() => {
  return iconMap[props.name] || Info
})

const colorClass = computed(() => {
  const colors = {
    primary: 'text-console-primary',
    success: 'text-console-success',
    warning: 'text-console-warning',
    error: 'text-console-error',
    info: 'text-console-info',
    gray: 'text-gray-500 dark:text-gray-400'
  }
  return colors[props.color]
})
</script>

<style scoped>
.icon-wrapper {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}
</style>
