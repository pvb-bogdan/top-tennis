<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div v-for="(item, index) in items" :key="index" class="border-b border-gray-200">
      <button @click="toggleItem(index)"
        class="flex items-center justify-between w-full px-6 py-4 font-medium text-left focus:outline-none"
        :class="{ 'bg-gray-50': expandedItems.includes(index) }">
        <h3>{{ item.title }}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition-transform duration-300 ease-in-out"
          :class="{ 'transform rotate-180': expandedItems.includes(index) }" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div v-if="expandedItems.includes(index)" class="px-6 py-4 bg-gray-50 transition-all duration-300 ease-in-out">
        <p v-if="item.content">{{ item.content }}</p>
        <slot :name="'content-' + index" :item="item" />
      </div>
    </div>
  </div>

  <!-- for where i want the accordion to show-->

  <!-- <div class="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow">
      <div>
        <Accordion :items="accordionItems">
          <template #content-0="slotProps">
            <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur...</p>
          </template>
<template #content-1>
            <p>Tennis requires a racket, balls, and a net. Proper shoes and athletic wear are also recommended.</p>
          </template>
<template #content-2>
            <p>A tennis court is 78 feet long and 27 feet wide for singles matches, and 36 feet wide for doubles
              matches.</p>
          </template>
<template #content-3>
            <p>A serve is initiated by tossing the ball in the air and striking it with the racket before it bounces,
              aiming diagonally into the opponent's service box.</p>
          </template>
</Accordion>
</div>
</div> -->
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const expandedItems = ref([]); // Initialize as an empty array

const toggleItem = (index) => {
  if (expandedItems.value.includes(index)) {
    // If the clicked item is already open, close it
    expandedItems.value = expandedItems.value.filter((i) => i !== index);
  } else {
    // Close any other open items first
    expandedItems.value = []; // Clear the array to close all others

    // Now open the clicked item
    expandedItems.value.push(index);
  }
};
</script>