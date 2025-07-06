<script setup>
// Define props to receive translations from App.vue
const props = defineProps({
  translations: Object,
});

// Use props.translations as 't' for consistency
const t = props.translations;
</script>

<template>
  <section
    id="services"
    class="p-8 md:p-12 mb-1"
  >
    <h2 class="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center drop-shadow-sm">
      {{ t.services.title }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(service, index) in t.services.list"
        :key="index"
        class="bg-yellow-50 p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-yellow-200 transform hover:scale-105 transition-transform duration-300 group">
        <div class="text-5xl text-yellow-600 mb-4 group-hover:text-yellow-700 transition-colors duration-300">
          <i v-if="index === 0" class="fas fa-code"></i>
          <i v-else-if="index === 1" class="fas fa-database"></i>
          <i v-else-if="index === 2" class="fas fa-chart-line"></i>
        </div>
        <h3 class="text-xl font-semibold text-yellow-700 group-hover:text-yellow-800 transition-colors duration-300 mb-2">
          {{ service.name }}
        </h3>
        <p class="text-gray-600 text-sm">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any scoped styles specific to ServicesView here */
</style>
