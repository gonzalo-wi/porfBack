// Directiva simple para animar elementos al hacer scroll
export const vScrollReveal = {
  mounted(el: HTMLElement, binding: any) {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Añadir la clase de animación
          el.classList.add('scroll-revealed');
          // Dejar de observar una vez revelado
          observer.unobserve(el);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    
    // Añadir clase inicial
    el.classList.add('scroll-reveal');
    
    // Delay opcional
    if (binding.value?.delay) {
      el.style.animationDelay = `${binding.value.delay}ms`;
    }
    
    observer.observe(el);
  }
};
