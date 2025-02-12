<template>
    <div class="flex flex-col min-h-screen">
        <section-navbar class="z-20" />
        <main class="flex-1">
            <slot></slot>
        </main>
        <footer class="bg-gray-900 p-4 sm:py-8 text-white">
            <section-footer />
        </footer>
    </div>
</template>
<script setup>

</script>

<style scoped></style>