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
    id="about"
    class="p-8 md:p-12 mb-1"
  >
    <h2 class="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center drop-shadow-sm">
      {{ t.about.title }}
    </h2>

    <p class="text-center text-gray-700 text-lg mb-8 max-w-3xl mx-auto leading-relaxed bg-blue-50 p-6 rounded-lg shadow-md">
      {{ t.about.basicInfo }}
    </p>

    <div class="flex justify-center mb-8">
      <img
        src="/me.jpg" alt="Your Photo"
        class="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-blue-200 transform hover:scale-105 transition-transform duration-300"
        onerror="this.onerror=null; this.src='https://placehold.co/200x200/ADD8E6/000000?text=Image+Error';"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-200 transform hover:scale-105 transition-transform duration-300">
        <h3 class="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
          <i class="fas fa-graduation-cap text-blue-500 mr-3"></i>
          {{ t.about.educationTitle }}
        </h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li v-for="(item, index) in t.about.education" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition-transform duration-300">
        <h3 class="text-2xl font-semibold text-green-600 mb-4 flex items-center">
          <i class="fas fa-briefcase text-green-500 mr-3"></i>
          {{ t.about.experienceTitle }}
        </h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li v-for="(item, index) in t.about.experience" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="bg-purple-50 p-8 rounded-xl shadow-lg border border-purple-200 transform hover:scale-105 transition-transform duration-300">
        <h3 class="text-2xl font-semibold text-purple-600 mb-4 flex items-center">
          <i class="fas fa-lightbulb text-purple-500 mr-3"></i>
          {{ t.about.skillsTitle }}
        </h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li v-for="(item, index) in t.about.skills" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any scoped styles specific to AboutView here */
</style>
