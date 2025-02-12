<template>
  <div id="booking">
    <h1>booking</h1>
    <form class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <fieldset class="border border-gray-300 p-4 rounded-lg">
        <legend class="text-2xl uppercase font-semibold text-gray-700 px-2">
          <h3>Contact Us</h3>
        </legend>

        <div class="grid gap-4">
          <!-- Name -->
          <div class="relative">
            <input type="text" id="name" name="name" required
              class="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition" />
            <label for="name"
              class="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-500 transition">
              Name
            </label>
          </div>

          <!-- Phone -->
          <div class="relative">
            <input type="tel" id="phone" name="phone" required
              class="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition" />
            <label for="phone"
              class="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-500 transition">
              Phone
            </label>
          </div>

          <!-- Email -->
          <div class="relative">
            <input type="email" id="email" name="email" required
              class="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition" />
            <label for="email"
              class="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-500 transition">
              Email
            </label>
          </div>

          <!-- Message -->
          <div class="relative">
            <textarea id="message" name="message" rows="4" required
              class="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"></textarea>
            <label for="message"
              class="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-500 transition">
              Message
            </label>
          </div>

          <!-- Submit Button -->
          <button type="submit"
            class="w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition">
            Send Message
          </button>
        </div>
      </fieldset>
    </form>

  </div>
</template>

<script setup>

</script>

<style lang="css" scoped></style>