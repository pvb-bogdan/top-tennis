<template>
  <div class="flex flex-col min-h-screen">
    <section-navbar class="z-20" />
    <main class="flex-1">
      <slot></slot>
      <!-- button to scroll to top -->
      <button
        @click="$router.push('#hero')"
        class="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full sm:block hidden shadow-lg transition-transform transform hover:scale-110 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </main>
    <footer class="bg-gray-900 p-4 sm:py-8 text-white">
      <section-footer />
    </footer>
  </div>
</template>
<script setup></script>

<style scoped></style>
