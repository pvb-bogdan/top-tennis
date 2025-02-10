
<template>
    <div class="flex flex-col min-h-screen">
        <div :class="{'bg-white shadow-2xl': scrolled, 'bg-transparent': !scrolled}" class="hidden sm:block header fixed w-full top-0 left-0 z-50 transition-colors duration-300">
            <div class="container mx-auto flex items-center justify-between py-4">
                <div class="logo">
                    <img src="#" alt="Logo" class="h-8">
                </div>
                <nav class="flex space-x-4">
                    <a href="#" class="text-gray-800 hover:text-gray-600">Home</a>
                    <a href="#" class="text-gray-800 hover:text-gray-600">About</a>
                    <a href="#" class="text-gray-800 hover:text-gray-600">Services</a>
                    <a href="#" class="text-gray-800 hover:text-gray-600">Contact</a>
                    <a href="#" class="text-gray-800 hover:text-gray-600">Blog</a>
                </nav>
            </div>
        </div>
        <div class="sm:hidden">
            <div class="flex justify-between items-center py-4 px-4 bg-white transition-all duration-300 ease-in-out" :class="{'translate-y-0': isMenuOpen, 'translate-y-full': !isMenuOpen}">
                <div class="logo">
                    <img src="#" alt="Logo" class="h-8">
                </div>
                <button @click="isMenuOpen = !isMenuOpen" class="text-gray-800 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <nav class="mt-4" v-if="isMenuOpen">
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
        <main class="flex-1 p-4  mt-8">
            <slot></slot>
        </main>
        <footer class="bg-gray-100 p-4">
            <p>Footer</p>
        </footer>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);
const isMenuOpen = ref(false);

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