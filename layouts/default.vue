
<template>
    <div class="flex flex-col min-h-screen">
        <div :class="{'bg-gray-200': scrolled, 'bg-transparent': !scrolled}" class="fixed w-full top-0 left-0 z-50 transition-colors duration-300">
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
        <main class="flex-1 p-4  mt-8">
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>Main content goes here</p>
            <p>lorem ipsum dolor sit amet</p>
            
        </main>
        <footer class="bg-gray-100 p-4">
            <p>Footer</p>
        </footer>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);

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