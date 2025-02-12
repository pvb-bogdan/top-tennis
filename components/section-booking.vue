<template>
  <div id="booking">
    <div class="container mx-auto px-4 sm:px-0">
      <div class="grid grid-cols-1">
        <div class="sm:flex xs:flex-col gap-8 sm:gap-24">
          <div class="sm:w-1/3 xs:w-full relative">
            <img src="../assets/images/tennis-book.jpg" alt="" class=" w-full h-full object-fit rounded-2xl">
            <div
              class="bg-gray-900 text-white min-h-7 max-w-fit p-8 rounded-br-lg absolute bottom-8 sm:-right-8 shadow-2xl ">
              <h3 class="text-3xl font-semibold uppercase">book us now!</h3>
            </div>
          </div>
          <div class="sm:flex-1 xs:flex-none mt-8 sm:mt-0">
            <div class="flex justify-between items-center">
              <h2 class="font-semibold uppercase text-3xl">Book Your Racket Demo</h2>
              <h3 class="font-semibold uppercase text-2xl text-gray-100 hidden sm:block">Racket Demo Booking</h3>
            </div>
            <hr class="w-75 border-gray-200 border-solid my-4 border-b-2">
            <p class="text-gray-500">
              Ready to find your perfect racket? Fill out the form below to book your demo session with <span
                class="text-custom-green font-semibold">Top Racket Demo</span> .
              Experience a variety of rackets, get expert guidance, and playtest in a real-world setting. Our sessions
              are designed to help you make an informed decision and elevate your game.
            </p>
            <p class="text-gray-500 mt-4">Simply complete the form with your details and preferred dates. We'll handle
              the
              rest, ensuring you have a fantastic demo experience. Book now and discover the racket that's right for
              you!</p>
            <hr class="border-b border-gray-200 mt-8 mb-26">
            <form class="space-y-6 bg-gray-50 shadow-md p-6 rounded">
              <!-- Grid Layout -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Name -->
                <div class="relative flex items-center">
                  <span class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                    <i class="icon-[mdi--account] text-lg"></i>
                  </span>
                  <input type="text" placeholder="Name"
                    class="w-full border-b border-gray-300 pl-8 py-2 focus:outline-none focus:border-green-500" />
                </div>

                <!-- Email -->
                <div class="relative flex items-center">
                  <span class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                    <i class="icon-[mdi--email-outline] text-lg"></i>
                  </span>
                  <input type="email" placeholder="Email Address"
                    class="w-full border-b border-gray-300 pl-8 py-2 focus:outline-none focus:border-green-500" />
                </div>

                <!-- Phone -->
                <div class="relative flex items-center">
                  <span class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                    <i class="icon-[mdi--phone] text-lg"></i>
                  </span>
                  <input type="tel" placeholder="Phone"
                    class="w-full border-b border-gray-300 pl-8 py-2 focus:outline-none focus:border-green-500" />
                </div>

                <!-- Subject -->
                <div class="relative flex items-center">
                  <span class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                    <i class="icon-[mdi--information-outline] text-lg"></i>
                  </span>
                  <input type="text" placeholder="Subject"
                    class="w-full border-b border-gray-300 pl-8 py-2 focus:outline-none focus:border-green-500" />
                </div>
              </div>

              <!-- Message -->
              <div class="relative flex items-center">
                <span class="absolute left-2 top-2 text-gray-500">
                  <i class="icon-[mdi--pencil] text-lg"></i>
                </span>
                <textarea placeholder="How can we help you? Feel free to get in touch!" rows="3"
                  class="w-full border-b border-gray-300 pl-8 py-2 focus:outline-none focus:border-green-500"></textarea>
              </div>

              <!-- Submit & Checkbox -->
              <div class="flex flex-col md:flex-row md:items-center justify-between space-y-4">
                <button type="submit"
                  class="flex items-center bg-green-500 text-white font-medium py-2 px-6 rounded-md hover:bg-green-600 transition">
                  <i class="icon-[mdi--send] mr-2"></i> GET IN TOUCH
                </button>

                <label class="flex items-center space-x-2 text-gray-600 text-sm">
                  <input type="checkbox" class="w-5 h-5 accent-green-500" />
                  <span>I agree that my data is <a href="#" class="text-green-500 underline">collected and
                      stored.</a></span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Accordion from './Accordion.vue'; // Import your component
const accordionItems = [
  { title: 'WHAT KIND OF BALL IS USED IN TENNIS?', content: '' },
  { title: 'WHAT EQUIPMENT IS USED TO PLAY TENNIS?', content: '' },
  { title: 'WHAT ARE THE DIMENSIONS OF A TENNIS COURT?', content: '' },
  { title: 'HOW IS A TENNIS SERVE PERFORMED?', content: '' },
];
</script>

<style lang="css" scoped></style>