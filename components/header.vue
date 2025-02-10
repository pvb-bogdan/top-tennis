<template>
    <div :class="{'bg-white': scrolled, 'bg-transparent': !scrolled}" class="fixed w-full top-0 left-0 z-50 transition-colors duration-300">
        <div class="container mx-auto flex items-center justify-between py-4">
            <div class="logo">
                <img src="/path/to/logo.png" alt="Logo" class="h-8">
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);

const handleScroll = () => {
    scrolled.value = window.scrollY > 200;
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