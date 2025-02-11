
<template>
    <div class="flex flex-col min-h-screen">
        <div :class="{'bg-white shadow-xl border border-b-amber-50': scrolled, 'bg-transparent': !scrolled}" class="hidden sm:block header fixed w-full top-0 left-0 z-50 transition-colors duration-300">
            <div class="container mx-auto flex items-center justify-between py-4">
                <div class="logo">
                    <a href="#hero">
                         <span class="text-white font-bold text-2xl" :class="{'text-custom-green': scrolled}">TOP RACKET</span>
                    </a>
                </div>
                <nav class="flex space-x-4">
                    <a v-for="link in navLinks" :key="link.text" :href="link.href" :class="{'text-custom-green hover:text-yellow-500': scrolled}" class="text-white">
                        <span>{{ link.text }}</span>
                    </a>
                    <!-- <a href="#hero" :class="{'text-custom-green hover:text-yellow-500': scrolled}" class="text-white"><span class="">HOME</span></a>
                    <a href="#services" class="text-white hover:text-yellow-500">SERVICES</a>
                    <a href="#booking" class="text-white hover:text-yellow-500">BOOKING</a>
                    <a href="#faq" class="text-white hover:text-yellow-500">FAQ</a>
                    <a href="#about" class="text-white hover:text-yellow-500">ABOUT</a>
                    <a href="#contact" class="text-white hover:text-yellow-500">CONTACT</a> -->
                </nav>
            </div>
        </div>
        <div class="sm:hidden">
            <div class="flex justify-between p-2 bg-gray-100 items-center">
                <div class="logo">
                <img src="#" alt="Logo" class="h-8">
            </div>
            <button @click="isMenuOpen = !isMenuOpen" class="text-gray-800 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            </div>
            <div class="text-center bg-blue-100 transition-all duration-300 ease-in-out" :class="{'translate-y-0': isMenuOpen, 'translate-y-full': !isMenuOpen}">
                <nav class="py-4" v-if="isMenuOpen">
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-800 hover:text-gray-600">Home</a></li>
                        <li><a href="#" class="text-gray-800 hover:text-gray-600">About</a></li>
                        <li><a href="#" class="text-gray-800 hover:text-gray-600">Services</a></li>
                        <li><a href="#" class="text-gray-800 hover:text-gray-600">Contact</a></li>
                        <li><a href="#" class="text-gray-800 hover:text-gray-600">Blog</a></li>
                    </ul>
                </nav>
             </div>
        </div>
        <main class="flex-1">
            <slot></slot>
        </main>
        <footer class="bg-gray-100 p-4">
            <p>Footer</p>
        </footer>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false)
const isMenuOpen = ref(false)
const navLinks = ref([
    { href: '#home', text: 'HOME' },
    // { href: '#hero', text: 'HOME' },
    { href: '#services', text: 'SERVICES' },
    { href: '#booking', text: 'BOOKING' },
    { href: '#faq', text: 'FAQ' },
    { href: '#about', text: 'ABOUT' },
    { href: '#contact', text: 'CONTACT' }
])

const handleScroll = () => {
    scrolled.value = window.scrollY > 100;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.header {
    transition: background-color 0.3s;
}
</style>