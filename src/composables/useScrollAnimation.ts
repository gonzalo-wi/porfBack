import { onMounted, onUnmounted, ref } from 'vue'

export type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in' | 'fade-up-stagger'

export function useScrollAnimation(animationType: AnimationType = 'fade-up', threshold: number = 0.1) {
  const elementRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  let observer: IntersectionObserver | null = null

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isVisible.value) {
        isVisible.value = true
        // Una vez visible, dejamos de observar
        if (observer && entry.target) {
          observer.unobserve(entry.target)
        }
      }
    })
  }

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: '0px 0px -50px 0px' // Trigger un poco antes de que sea visible
    })

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  const getAnimationClass = () => {
    if (!isVisible.value) return 'opacity-0'
    
    switch (animationType) {
      case 'fade-up':
        return 'animate-fade-up-in'
      case 'fade-in':
        return 'animate-fade-in'
      case 'slide-left':
        return 'animate-slide-left'
      case 'slide-right':
        return 'animate-slide-right'
      case 'zoom-in':
        return 'animate-zoom-in'
      default:
        return 'animate-fade-up-in'
    }
  }

  return {
    elementRef,
    isVisible,
    animationClass: getAnimationClass()
  }
}
