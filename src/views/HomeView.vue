<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';

// Define props to receive translations and current language from App.vue
const props = defineProps({
  translations: Object,
  lang: String,
});

// Use props.translations as 't' for consistency
const t = props.translations;

// --- Slider Logic ---
const currentSlide = ref(0);
let slideInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % t.home.activities.length;
};

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? t.home.activities.length - 1 : currentSlide.value - 1;
};

const startAutoSlide = () => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
  slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
};

const nextSlideManual = () => {
  nextSlide();
  startAutoSlide(); // Restart the timer
};

const prevSlideManual = () => {
  prevSlide();
  startAutoSlide(); // Restart the timer
};

// Restart auto-slide if language changes (and thus activities list might re-render)
watch(() => props.lang, () => {
  startAutoSlide();
});

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
});
</script>

<template>
  <section
    id="home"
    class="mb-1 flex flex-col items-center justify-center text-center relative overflow-hidden"
  >
    <div class="w-full home-title-bg relative overflow-hidden flex flex-col items-center justify-center py-16 md:py-24">
      <div class="absolute inset-0 bg-black opacity-0 z-0"></div>
    </div>

    <div class="relative w-[90%] overflow-hidden rounded-xl shadow-inner bg-blue-50 bg-opacity-80 p-6 border border-blue-200 relative z-10 mt-8">
      <div class="flex transition-transform duration-500 ease-in-out"
           :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(activity, index) in t.home.activities" :key="index" class="w-full flex-shrink-0 flex flex-col items-center justify-center py-8">
          <i :class="`${activity.icon} text-6xl md:text-7xl text-blue-600 mb-4`"></i>
          <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{{ activity.title }}</h3>
          <p class="text-gray-700 text-base md:text-lg">{{ activity.description }}</p>
        </div>
      </div>
      <button
        @click="prevSlideManual"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3.5 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-2 transform hover:scale-110"
        :aria-label="t.home.prev"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        @click="nextSlideManual"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3.5 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mr-2 transform hover:scale-110"
        :aria-label="t.home.next"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </section>
</template>

<style scoped>
/* Add any scoped styles specific to HomeView here */
</style>
