<template>
  <div class="text-center">
    <svg class="w-full h-24 text-console-muted opacity-50" viewBox="0 0 200 100" fill="none" stroke="currentColor">
      <g v-if="type === 'gateway'">
        <!-- API Gateway diagram -->
        <rect x="10" y="35" width="30" height="30" rx="4" stroke-width="1.5"/>
        <text x="25" y="53" font-size="8" text-anchor="middle" class="fill-current">Client</text>
        
        <rect x="85" y="20" width="30" height="60" rx="4" stroke-width="2"/>
        <text x="100" y="48" font-size="8" text-anchor="middle" class="fill-current font-bold">Gateway</text>
        <text x="100" y="56" font-size="6" text-anchor="middle" class="fill-current">Auth</text>
        <text x="100" y="62" font-size="6" text-anchor="middle" class="fill-current">Rate Limit</text>
        
        <rect x="160" y="15" width="30" height="20" rx="4" stroke-width="1.5"/>
        <text x="175" y="27" font-size="7" text-anchor="middle" class="fill-current">API A</text>
        
        <rect x="160" y="40" width="30" height="20" rx="4" stroke-width="1.5"/>
        <text x="175" y="52" font-size="7" text-anchor="middle" class="fill-current">API B</text>
        
        <rect x="160" y="65" width="30" height="20" rx="4" stroke-width="1.5"/>
        <text x="175" y="77" font-size="7" text-anchor="middle" class="fill-current">API C</text>
        
        <path d="M 40 50 L 85 50" stroke-width="1.5" marker-end="url(#arrow)"/>
        <path d="M 115 30 L 160 25" stroke-width="1.5" marker-end="url(#arrow)"/>
        <path d="M 115 50 L 160 50" stroke-width="1.5" marker-end="url(#arrow)"/>
        <path d="M 115 70 L 160 75" stroke-width="1.5" marker-end="url(#arrow)"/>
      </g>

      <g v-else-if="type === 'pipeline'">
        <!-- Pipeline diagram -->
        <rect x="10" y="35" width="35" height="30" rx="4" stroke-width="1.5"/>
        <text x="27" y="48" font-size="7" text-anchor="middle" class="fill-current">Source</text>
        <text x="27" y="56" font-size="6" text-anchor="middle" class="fill-current">CRM</text>
        
        <rect x="65" y="35" width="35" height="30" rx="4" stroke-width="2"/>
        <text x="82" y="48" font-size="7" text-anchor="middle" class="fill-current font-bold">Pipeline</text>
        <text x="82" y="56" font-size="6" text-anchor="middle" class="fill-current">Transform</text>
        
        <circle cx="130" cy="50" r="12" stroke-width="1.5"/>
        <text x="130" y="53" font-size="6" text-anchor="middle" class="fill-current">Queue</text>
        
        <rect x="155" y="35" width="35" height="30" rx="4" stroke-width="1.5"/>
        <text x="172" y="48" font-size="7" text-anchor="middle" class="fill-current">Target</text>
        <text x="172" y="56" font-size="6" text-anchor="middle" class="fill-current">ERP</text>
        
        <path d="M 45 50 L 65 50" stroke-width="1.5" marker-end="url(#arrow)"/>
        <path d="M 100 50 L 118 50" stroke-width="1.5" marker-end="url(#arrow)"/>
        <path d="M 142 50 L 155 50" stroke-width="1.5" marker-end="url(#arrow)"/>
      </g>

      <g v-else-if="type === 'monitoring'">
        <!-- Monitoring diagram -->
        <rect x="10" y="15" width="30" height="20" rx="4" stroke-width="1.5"/>
        <text x="25" y="27" font-size="6" text-anchor="middle" class="fill-current">API</text>
        
        <rect x="10" y="40" width="30" height="20" rx="4" stroke-width="1.5"/>
        <text x="25" y="52" font-size="6" text-anchor="middle" class="fill-current">Worker</text>
        
        <rect x="10" y="65" width="30" height="20" rx="4" stroke-width="1.5"/>
        <text x="25" y="77" font-size="6" text-anchor="middle" class="fill-current">DB</text>
        
        <rect x="75" y="35" width="40" height="30" rx="4" stroke-width="2"/>
        <text x="95" y="48" font-size="7" text-anchor="middle" class="fill-current font-bold">Monitor</text>
        <text x="95" y="56" font-size="6" text-anchor="middle" class="fill-current">Aggregate</text>
        
        <rect x="150" y="35" width="40" height="30" rx="4" stroke-width="1.5"/>
        <text x="170" y="48" font-size="7" text-anchor="middle" class="fill-current">Dashboard</text>
        <text x="170" y="56" font-size="6" text-anchor="middle" class="fill-current">Real-time</text>
        
        <path d="M 40 25 L 75 45" stroke-width="1.5" marker-end="url(#arrow)"/>
        <path d="M 40 50 L 75 50" stroke-width="1.5" marker-end="url(#arrow)"/>
        <path d="M 40 75 L 75 55" stroke-width="1.5" marker-end="url(#arrow)"/>
        <path d="M 115 50 L 150 50" stroke-width="1.5" marker-end="url(#arrow)"/>
      </g>

      <g v-else>
        <!-- Tool diagram -->
        <rect x="30" y="35" width="35" height="30" rx="4" stroke-width="1.5"/>
        <text x="47" y="48" font-size="7" text-anchor="middle" class="fill-current">Developer</text>
        
        <rect x="90" y="35" width="35" height="30" rx="4" stroke-width="2"/>
        <text x="107" y="48" font-size="7" text-anchor="middle" class="fill-current font-bold">CLI Tool</text>
        <text x="107" y="56" font-size="6" text-anchor="middle" class="fill-current">Automate</text>
        
        <rect x="150" y="20" width="30" height="15" rx="3" stroke-width="1.5"/>
        <text x="165" y="30" font-size="6" text-anchor="middle" class="fill-current">Setup</text>
        
        <rect x="150" y="42" width="30" height="15" rx="3" stroke-width="1.5"/>
        <text x="165" y="52" font-size="6" text-anchor="middle" class="fill-current">Docs</text>
        
        <rect x="150" y="64" width="30" height="15" rx="3" stroke-width="1.5"/>
        <text x="165" y="74" font-size="6" text-anchor="middle" class="fill-current">Creds</text>
        
        <path d="M 65 50 L 90 50" stroke-width="1.5" marker-end="url(#arrow)"/>
        <path d="M 125 45 L 150 30" stroke-width="1.5" marker-end="url(#arrow)"/>
        <path d="M 125 50 L 150 50" stroke-width="1.5" marker-end="url(#arrow)"/>
        <path d="M 125 55 L 150 72" stroke-width="1.5" marker-end="url(#arrow)"/>
      </g>

      <!-- Arrow marker definition -->
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" class="fill-current"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type: string;
}

defineProps<Props>();
</script>
