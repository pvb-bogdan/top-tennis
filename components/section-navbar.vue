<template>
  <header
    class="fixed-navbar"
    :class="{
      'bg-white shadow-xl border border-b-green-500': scrolled,
      'bg-transparent': !scrolled,
    }"
  >
    <div class="container mx-auto h-16 flex justify-between items-center px-4">
      <div>
        <a href="#hero">
          <span
            class="text-white font-bold text-2xl"
            :class="{ 'text-custom-green': scrolled }"
            >TOP <span class="font-light">TENNIS DEMO</span></span
          >
        </a>
      </div>
      <nav class="sm:flex space-x-4 hidden">
        <a
          v-for="link in navLinks"
          :key="link.text"
          :href="link.href"
          :class="{ 'text-custom-green': scrolled }"
          class="text-white hover:text-orange-500"
        >
          <span>{{ link.text }}</span>
        </a>
      </nav>

      <a href="tel:+447778685516">
        <small
          class="text-white font-light"
          :class="{ 'text-custom-green': scrolled }"
          >0777 868 55 16</small
        >
      </a>

      <div
        class="toogle_btn cursor-pointer sm:hidden"
        @click="isMenuOpen = !isMenuOpen"
      >
        <iconsHamburger />
      </div>
    </div>
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="opacity-0 transform translate-y-4"
      leave-to-class="opacity-0 transform translate-y-4"
    >
      <div class="dropdown-menu" v-if="isMenuOpen">
        <nav class="flex space-y-4 flex-col items-center py-4">
          <a
            v-for="link in navLinks"
            :key="link.text"
            :href="link.href"
            class="text-green-500 hover:text-yellow-500"
          >
            <span>{{ link.text }}</span>
          </a>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const scrolled = ref(false)

const isMenuOpen = ref(false)
const handleResize = () => {
  if (window.innerWidth > 640) {
    isMenuOpen.value = false
  }
}
const navLinks = ref([
  { href: "#home", text: "HOME" },
  // { href: '#hero', text: 'HOME' },
  { href: "#services", text: "SERVICES" },
  { href: "#booking", text: "CONTACT" },
  // { href: '#faq', text: 'FAQ' },
  // { href: '#about', text: 'ABOUT' },
  // { href: '#contact', text: 'CONTACT' }
])

const handleScroll = () => {
  if (window.innerWidth > 640) {
    scrolled.value = window.scrollY > 100
  } else {
    scrolled.value = true
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
  window.addEventListener("resize", handleResize)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
  window.removeEventListener("resize", handleResize)
})
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
