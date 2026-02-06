import { ref, computed } from 'vue'

export type ViewMode = 'recruiter' | 'techLead'

const viewMode = ref<ViewMode>('recruiter')

// Load from localStorage
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('viewMode') as ViewMode
  if (saved && (saved === 'recruiter' || saved === 'techLead')) {
    viewMode.value = saved
  }
}

export function useViewMode() {
  const isRecruiterView = computed(() => viewMode.value === 'recruiter')
  const isTechLeadView = computed(() => viewMode.value === 'techLead')

  const toggleView = () => {
    viewMode.value = viewMode.value === 'recruiter' ? 'techLead' : 'recruiter'
    localStorage.setItem('viewMode', viewMode.value)
  }

  const setView = (mode: ViewMode) => {
    viewMode.value = mode
    localStorage.setItem('viewMode', mode)
  }

  return {
    viewMode: computed(() => viewMode.value),
    isRecruiterView,
    isTechLeadView,
    toggleView,
    setView,
  }
}
