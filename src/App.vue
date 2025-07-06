<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'; // Import Router specific functions

// --- Language and Translations ---
const lang = ref('en');

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      services: 'My Services',
      contact: 'Contact Us',
      langToggle: 'Khmer',
    },
    home: {
      activities: [
        { title: 'Developing Web Applications', description: 'Crafting responsive and dynamic web experiences.', icon: 'fas fa-laptop-code' },
        { title: 'Building Data Pipelines', description: 'Designing efficient and scalable data integration solutions.', icon: 'fas fa-cogs' },
        { title: 'Analyzing Data for Insights', description: 'Extracting valuable information and patterns from complex datasets.', icon: 'fas fa-chart-bar' },
        { title: 'Creating User Interfaces', description: 'Focusing on intuitive and visually appealing user experiences.', icon: 'fas fa-paint-brush' },
        { title: 'Optimizing Database Performance', description: 'Ensuring fast and reliable data access for applications.', icon: 'fas fa-database' },
      ],
      prev: 'Previous',
      next: 'Next',
    },
    about: {
      title: 'About Me',
      basicInfo: 'Hello! I am Ponlork Sok, a passionate software developer and data enthusiast with a strong background in building robust web applications and designing efficient data solutions. I thrive on solving complex problems and transforming data into actionable insights. My journey in technology has equipped me with a diverse skill set, allowing me to contribute effectively to various stages of software and data lifecycles.',
      educationTitle: 'Education',
      education: [
        'Master of Data Science, 2026',
        'Bachelor of Computer Science, 2003',
        'Bac II, 1999',
      ],
      experienceTitle: 'Experiences',
      experience: [
        'Software Developer, NIPH',
        'Data Management, CWCC',
        'GIS officer, MLUC',
      ],
      skillsTitle: 'Skills',
      skills: [
        'Software Engineering',
        'Data Engineering',
        'Data Science',
        'PHP',
        'VueJS',
        'Python',
        'MySQL',
        'SQL Server',
        'Oracle',
      ],
    },
    services: {
      title: 'My Services',
      list: [
        { name: 'Software Development', description: 'Crafting high-quality, scalable, and maintainable software solutions tailored to your needs.' },
        { name: 'Data Engineering', description: 'Designing, building, and maintaining robust data pipelines and infrastructure for efficient data flow.' },
        { name: 'Data Science', description: 'Extracting valuable insights from complex datasets using advanced analytical techniques and machine learning.' },
      ],
    },
    contact: {
      title: 'Contact Us',
      addressTitle: 'Address',
      address: `Phnom Penh, Cambodia`,
      feedbackTitle: 'Feedback Form',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      submitButton: 'Send Message',
      thankYou: 'Thank you for your feedback! We will get back to you soon.',
    },
    footer: '© 2025 Ponlork Sok. All rights reserved.',
  },
  km: {
    nav: {
      home: 'ទំព័រដើម',
      about: 'អំពីខ្ញុំ',
      services: 'សេវាកម្មរបស់ខ្ញុំ',
      contact: 'ទំនាក់ទំនង',
      langToggle: 'English',
    },
    home: {
      activities: [
        { title: 'ការអភិវឌ្ឍន៍កម្មវិធីគេហទំព័រ', description: 'បង្កើតបទពិសោធន៍គេហទំព័រដែលមានការឆ្លើយតប និងថាមវន្ត។', icon: 'fas fa-laptop-code' },
        { title: 'ការកសាងបំពង់ទិន្នន័យ', description: 'រចនាដំណោះស្រាយការរួមបញ្ចូលទិន្នន័យដែលមានប្រសិទ្ធភាព និងអាចពង្រីកបាន។', icon: 'fas fa-cogs' },
        { title: 'ការវិភាគទិន្នន័យដើម្បីទទួលបានការយល់ដឹង', description: 'ទាញយកព័ត៌មាន និងលំនាំដ៏មានតម្លៃពីសំណុំទិន្នន័យស្មុគស្មាញ។', icon: 'fas fa-chart-bar' },
        { title: 'ការបង្កើតចំណុចប្រទាក់អ្នកប្រើ', description: 'ផ្តោតលើបទពិសោធន៍អ្នកប្រើប្រាស់ដែលងាយស្រួលប្រើ និងទាក់ទាញភ្នែក។', icon: 'fas fa-paint-brush' },
        { title: 'បង្កើនប្រសិទ្ធភាពមូលដ្ឋានទិន្នន័យ', description: 'ធានាការចូលប្រើទិន្នន័យលឿន និងអាចទុកចិត្តបានសម្រាប់កម្មវិធី។', icon: 'fas fa-database' },
      ],
      prev: 'មុន',
      next: 'បន្ទាប់',
    },
    about: {
      title: 'អំពីខ្ញុំ',
      basicInfo: 'សួស្តី! ខ្ញុំបាទ ពន្លក សុខ ជាអ្នកអភិវឌ្ឍន៍កម្មវិធី និងជាអ្នកចូលចិត្តទិន្នន័យ ដែលមានបទពិសោធន៍យ៉ាងរឹងមាំក្នុងការកសាងកម្មវិធីគេហទំព័រ និងរកដំណោះស្រាយទិន្នន័យប្រកបដោយប្រសិទ្ធភាព។ ខ្ញុំរីករាយនឹងការដោះស្រាយបញ្ហាស្មុគស្មាញ និងការបំប្លែងទិន្នន័យទៅជាការយល់ដឹងដែលអាចអនុវត្តបាន ជំនួយដល់ការធ្វើផែនការណ៍ ការសម្រេចចិត្តបានត្រឹមត្រូវក្នុងអាជីវកម្មរបស់លោកអ្នក។',
      educationTitle: 'ការអប់រំ',
      education: [
        'បរិញ្ញាបត្រជាន់ខ្ពស់វិទ្យាសាស្ត្រទិន្នន័យ',
        'បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ និងវិស្វកម្ម',
        'មធ្យមសិក្សា បាក់ដុប',
      ],
      experienceTitle: 'បទពិសោធន៍',
      experience: [
        'អ្នកអភិវឌ្ឍន៍កម្មវិធីជាន់ខ្ពស់នៅ NIPH',
        'ការគ្រប់គ្រងទិន្នន័យនៅ CWCC',
        'អ្នកបច្ចេកទេស GIS នៅ MLUC',
      ],
      skillsTitle: 'ជំនាញ',
      skills: [
        'វិស្វកម្មកម្មវិធី',
        'វិស្វកម្មទិន្នន័យ',
        'វិទ្យាសាស្ត្រទិន្នន័យ',
        'PHP',
        'VueJS',
        'Python',
        'MySQL',
        'SQL Server',
        'Oracle',
      ],
    },
    services: {
      title: 'My Services',
      list: [
        { name: 'Software Development', description: 'Crafting high-quality, scalable, and maintainable software solutions tailored to your needs.' },
        { name: 'Data Engineering', description: 'Designing, building, and maintaining robust data pipelines and infrastructure for efficient data flow.' },
        { name: 'Data Science', description: 'Extracting valuable insights from complex datasets using advanced analytical techniques and machine learning.' },
      ],
    },
    contact: {
      title: 'ទំនាក់ទំនង',
      addressTitle: 'អាសយដ្ឋាន',
      address: `ភ្នំពេញ, កម្ពុជា`,
      feedbackTitle: 'ទម្រង់មតិកែលម្អ',
      namePlaceholder: 'ឈ្មោះរបស់អ្នក',
      emailPlaceholder: 'អ៊ីមែលរបស់អ្នក',
      messagePlaceholder: 'សាររបស់អ្នក',
      submitButton: 'ផ្ញើសារ',
      thankYou: 'សូមអរគុណសម្រាប់មតិកែលម្អរបស់អ្នក! យើងនឹងទាក់ទងអ្នកឆាប់ៗនេះ។',
    },
    footer: '© 2025 Ponlork Sok. រក្សាសិទ្ធិគ្រប់យ៉ាង។',
  },
};

const t = computed(() => translations[lang.value]);

const toggleLanguage = () => {
  lang.value = lang.value === 'en' ? 'km' : 'en';
};

// --- Navigation and Mobile Menu ---
const isNavOpen = ref(false);
const toggleLanguageAndCloseNav = () => {
  toggleLanguage();
  isNavOpen.value = false;
};

// --- Router and Section Highlighting ---
const route = useRoute();
const router = useRouter();
const currentSection = ref(route.name || 'home'); // Initialize with current route name

// Update currentSection when route changes
onMounted(() => {
  currentSection.value = route.name;
});

// Watch for route changes to update active navigation link
router.afterEach((to) => {
  currentSection.value = to.name;
});

// Function to navigate and close mobile nav
const navigateAndCloseNav = (routeName) => {
  router.push({ name: routeName });
  isNavOpen.value = false;
};

// Note: Intersection Observer for scroll-based highlighting is more complex
// with Vue Router's SPA nature and might need a separate mixin/composable
// or an external library if you want both router-link and scroll-spy.
// For now, navigation will control the active state based on route.
</script>

<template>
  <div class="font-sans text-gray-800 min-h-screen flex flex-col">
    <nav class="bg-white py-4 px-6 md:px-12 sticky top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <RouterLink
          to="/"
          class="text-3xl font-extrabold text-blue-700 rounded-lg p-2 hover:text-blue-800 transition duration-300 transform hover:scale-105"
        >
          Ponlork Sok
        </RouterLink>

        <div class="hidden md:flex space-x-8 items-center">
          <RouterLink
            to="/"
            :class="['text-gray-700 hover:text-blue-600 font-medium transition duration-300 relative group', { 'text-blue-800 !font-bold': currentSection === 'home' }]"
          >
            {{ t.nav.home }}
            <span
              :class="['absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300', { 'scale-x-100': currentSection === 'home', 'scale-x-0 group-hover:scale-x-100': currentSection !== 'home' }]"
            ></span>
          </RouterLink>
          <RouterLink
            to="/about"
            :class="['text-gray-700 hover:text-blue-600 font-medium transition duration-300 relative group', { 'text-blue-800 !font-bold': currentSection === 'about' }]"
          >
            {{ t.nav.about }}
            <span
              :class="['absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300', { 'scale-x-100': currentSection === 'about', 'scale-x-0 group-hover:scale-x-100': currentSection !== 'about' }]"
            ></span>
          </RouterLink>
          <RouterLink
            to="/services"
            :class="['text-gray-700 hover:text-blue-600 font-medium transition duration-300 relative group', { 'text-blue-800 !font-bold': currentSection === 'services' }]"
          >
            {{ t.nav.services }}
            <span
              :class="['absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300', { 'scale-x-100': currentSection === 'services', 'scale-x-0 group-hover:scale-x-100': currentSection !== 'services' }]"
            ></span>
          </RouterLink>
          <RouterLink
            to="/contact"
            :class="['text-gray-700 hover:text-blue-600 font-medium transition duration-300 relative group', { 'text-blue-800 !font-bold': currentSection === 'contact' }]"
          >
            {{ t.nav.contact }}
            <span
              :class="['absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300', { 'scale-x-100': currentSection === 'contact', 'scale-x-0 group-hover:scale-x-100': currentSection !== 'contact' }]"
            ></span>
          </RouterLink>
          <button
            @click="toggleLanguage"
            class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-full hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-lg transform hover:scale-105"
          >
            {{ t.nav.langToggle }}
          </button>
        </div>

        <div class="md:hidden flex items-center">
          <button
            @click="isNavOpen = !isNavOpen"
            class="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 rounded-md transition duration-300"
          >
            <i :class="`${isNavOpen ? 'fas fa-times' : 'fas fa-bars'} text-2xl`"></i>
          </button>
        </div>
      </div>

      <div :class="['md:hidden mt-4 space-y-2 px-4 pb-4 bg-white shadow-inner mobile-menu-transition', { 'open': isNavOpen }]">
        <RouterLink
          to="/"
          @click="navigateAndCloseNav('home')"
          class="block text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-md transition duration-300 hover:bg-gray-100"
        >
          {{ t.nav.home }}
        </RouterLink>
        <RouterLink
          to="/about"
          @click="navigateAndCloseNav('about')"
          class="block text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-md transition duration-300 hover:bg-gray-100"
        >
          {{ t.nav.about }}
        </RouterLink>
        <RouterLink
          to="/services"
          @click="navigateAndCloseNav('services')"
          class="block text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-md transition duration-300 hover:bg-gray-100"
        >
          {{ t.nav.services }}
        </RouterLink>
        <RouterLink
          to="/contact"
          @click="navigateAndCloseNav('contact')"
          class="block text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-md transition duration-300 hover:bg-gray-100"
        >
          {{ t.nav.contact }}
        </RouterLink>
        <button
          @click="toggleLanguageAndCloseNav"
          class="w-full text-left bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-md mt-2"
        >
          {{ t.nav.langToggle }}
        </button>
      </div>
    </nav>

    <main class="flex-grow container mx-auto px-6 py-4 md:py-6">
      <RouterView :translations="t" :lang="lang" /> </main>

    <footer class="bg-gray-800 text-white py-6 px-6 md:px-12 mt-auto">
      <div class="container mx-auto text-center text-gray-400">
        <p>{{ t.footer }}</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* No specific scoped styles for App.vue needed here, global styles are in main.css */
</style>
