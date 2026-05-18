<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {{ t('form.name') }} *
      </label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        required
        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-console-border bg-white dark:bg-console-surface text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-console-primary transition-all"
        :class="{ 'border-red-500': errors.name }"
      />
      <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {{ t('form.email') }} *
      </label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        required
        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-console-border bg-white dark:bg-console-surface text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-console-primary transition-all"
        :class="{ 'border-red-500': errors.email }"
      />
      <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {{ t('form.message') }} *
      </label>
      <textarea
        id="message"
        v-model="formData.message"
        required
        rows="5"
        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-console-border bg-white dark:bg-console-surface text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-console-primary transition-all resize-none"
        :class="{ 'border-red-500': errors.message }"
      ></textarea>
      <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ isSubmitting ? t('form.sending') : t('form.send') }}
    </button>

    <div
      v-if="submitStatus"
      :class="[
        'p-4 rounded-lg text-sm font-medium',
        submitStatus === 'success'
          ? 'bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300'
          : 'bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300'
      ]"
    >
      {{ submitMessage }}
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const formData = reactive({
  name: '',
  email: '',
  message: '',
});

const errors = reactive({
  name: '',
  email: '',
  message: '',
});

const isSubmitting = ref(false);
const submitStatus = ref<'success' | 'error' | null>(null);
const submitMessage = ref('');

const validateForm = (): boolean => {
  let isValid = true;
  
  // Reset errors
  errors.name = '';
  errors.email = '';
  errors.message = '';

  if (!formData.name.trim()) {
    errors.name = t('form.name') + ' ' + t('form.required').toLowerCase();
    isValid = false;
  }

  if (!formData.email.trim()) {
    errors.email = t('form.email') + ' ' + t('form.required').toLowerCase();
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = t('form.invalidEmail');
    isValid = false;
  }

  if (!formData.message.trim()) {
    errors.message = t('form.message') + ' ' + t('form.required').toLowerCase();
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  submitStatus.value = null;

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success
    submitStatus.value = 'success';
    submitMessage.value = t('form.successTitle') + ' ' + t('form.successMessage');
    
    // Reset form
    formData.name = '';
    formData.email = '';
    formData.message = '';
  } catch (error) {
    submitStatus.value = 'error';
    submitMessage.value = t('form.errorMessage');
  } finally {
    isSubmitting.value = false;
  }
};
</script>
