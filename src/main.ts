import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import { vScrollReveal } from './directives/scrollReveal';

// Initialize dark mode based on system preference or saved preference
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

initTheme();

const app = createApp(App);
app.use(router);
app.use(i18n);
app.directive('scroll-reveal', vScrollReveal);
app.mount('#app');
