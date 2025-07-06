<script setup>
import { ref } from 'vue';

// Define props to receive translations from App.vue
const props = defineProps({
  translations: Object,
});

// Use props.translations as 't' for consistency
const t = props.translations;

// State for feedback form fields
const feedbackName = ref('');
const feedbackEmail = ref('');
const feedbackMessage = ref('');
const showThankYou = ref(false);

// Handle feedback form submission
const handleFeedbackSubmit = () => {
  // In a real application, you would send this data to a backend.
  console.log({
    name: feedbackName.value,
    email: feedbackEmail.value,
    message: feedbackMessage.value,
  });
  // Clear form fields
  feedbackName.value = '';
  feedbackEmail.value = '';
  feedbackMessage.value = '';
  // Show thank you message
  showThankYou.value = true;
  // Hide thank you message after a few seconds
  setTimeout(() => {
    showThankYou.value = false;
  }, 5000);
};
</script>

<template>
  <section
    id="contact"
    class="p-8 md:p-12 mb-1"
  >
    <h2 class="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center drop-shadow-sm">
      {{ t.contact.title }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-indigo-50 p-8 rounded-xl shadow-lg border border-indigo-200 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300">
        <h3 class="text-2xl font-semibold text-indigo-600 mb-4 flex items-center">
          <i class="fas fa-map-marker-alt text-indigo-500 mr-3"></i>
          {{ t.contact.addressTitle }}
        </h3>
        <p class="text-gray-700 text-lg space-y-2">
            <span class="block">Phnom Penh, Cambodia</span>
            <span class="block"><i class="fas fa-phone-alt mr-2"></i>+855 93 442 802</span>
            <span class="block"><i class="fab fa-telegram-plane mr-2"></i>@PonlorkSok</span>
            <span class="block"><i class="fab fa-facebook-f mr-2"></i>fb.com/PonlorkSok</span>
            <span class="block"><i class="fas fa-envelope mr-2"></i>sok.ponlork@gmail.com</span>
        </p>
      </div>

      <div class="bg-red-50 p-8 rounded-xl shadow-lg border border-red-200">
        <h3 class="text-2xl font-semibold text-red-600 mb-4 text-center">
          {{ t.contact.feedbackTitle }}
        </h3>
        <form @submit.prevent="handleFeedbackSubmit" class="space-y-4">
          <div>
            <label for="name" class="sr-only">
              {{ t.contact.namePlaceholder }}
            </label>
            <input
              type="text"
              id="name"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
              :placeholder="t.contact.namePlaceholder"
              v-model="feedbackName"
              required
            />
          </div>
          <div>
            <label for="email" class="sr-only">
              {{ t.contact.emailPlaceholder }}
            </label>
            <input
              type="email"
              id="email"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
              :placeholder="t.contact.emailPlaceholder"
              v-model="feedbackEmail"
              required
            />
          </div>
          <div>
            <label for="message" class="sr-only">
              {{ t.contact.messagePlaceholder }}
            </label>
            <textarea
              id="message"
              rows="5"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
              :placeholder="t.contact.messagePlaceholder"
              v-model="feedbackMessage"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg transform hover:scale-105"
          >
            {{ t.contact.submitButton }}
          </button>
        </form>
        <p v-if="showThankYou" class="mt-4 text-center text-green-600 font-medium animate-pulse">
          {{ t.contact.thankYou }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any scoped styles specific to ContactView here */
</style>
