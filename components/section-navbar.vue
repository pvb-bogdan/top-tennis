<template>
  <header class="fixed-navbar "
    :class="{ 'bg-white shadow-xl border border-b-amber-600': scrolled, 'bg-transparent': !scrolled }">
    <div class="container mx-auto h-16 flex justify-between items-center px-4">
      <div>
        <a href="#hero">
          <span class="text-white font-bold text-2xl" :class="{ 'text-custom-green': scrolled }">TOP <span
              class="font-light">RACKET</span></span>
        </a>
      </div>
      <nav class="sm:flex space-x-4 hidden">
        <a v-for="link in navLinks" :key="link.text" :href="link.href" :class="{ 'text-custom-green': scrolled }"
          class="text-white hover:text-orange-500">
          <span>{{ link.text }}</span>
        </a>
      </nav>
      <a href="#">
        <small class="text-white font-light" :class="{ 'text-custom-green': scrolled }">+40 777 277 345</small>
      </a>
      <div class="toogle_btn cursor-pointer sm:hidden" @click="isMenuOpen = !isMenuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </div>
    <div class="dropdown-menu" v-if="isMenuOpen">
      <nav class="flex space-y-4 flex-col items-center py-4">
        <a v-for="link in navLinks" :key="link.text" :href="link.href" class="text-green-500 hover:text-yellow-500">
          <span>{{ link.text }}</span>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false)

const isMenuOpen = ref(false)
const handleResize = () => {
  if (window.innerWidth > 640) {
    isMenuOpen.value = false;
  }
};
const navLinks = ref([
  { href: '#home', text: 'HOME' },
  // { href: '#hero', text: 'HOME' },
  { href: '#services', text: 'SERVICES' },
  { href: '#booking', text: 'CONTACT' },
  // { href: '#faq', text: 'FAQ' },
  // { href: '#about', text: 'ABOUT' },
  // { href: '#contact', text: 'CONTACT' }
])

const handleScroll = () => {
  if (window.innerWidth > 640) {
    scrolled.value = window.scrollY > 100;
  } else {
    scrolled.value = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>

<style lang="css">
.header {
  transition: background-color 0.3s;
}

.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  /* Ensure it stays above other content */
  transition: background-color 0.3s;
}
</style>