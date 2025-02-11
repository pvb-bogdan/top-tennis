<template>
  <div id="services">
    <div class="container mx-auto">
      <div class="grid grid-cols-1">
        <div class="sm:flex xs:flex-col gap-8 sm:gap-16">
          <div class="sm:w-1/3 xs:w-full relative">
            <img src="../assets/images/racket-portrait.jpg" alt="" class=" w-full h-full object-fit rounded-2xl">
            <div
              class="bg-gray-900 text-white min-h-7 max-w-fit p-8 rounded-br-lg absolute bottom-8 -right-8 shadow-2xl ">
              <h3 class="text-3xl font-semibold">Racket Demo Event Details</h3>
            </div>
          </div>
          <div class="sm:flex-1 xs:flex-none">
            <div class="flex justify-between items-center">
              <h2 class="font-semibold uppercase text-3xl">Our services</h2>
              <h3 class="font-semibold uppercase text-2xl text-gray-100 hidden sm:block">Racket Demo Event</h3>
            </div>
            <hr class="w-75 border-gray-200 border-solid my-4 border-b-2">
            <div
              class="grid grid-cols-1 xs:mt-10 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 md:gap-0">
              <!-- Feature 1 -->
              <div class="md:p-8 lg:p-14 flex flex-col items-center">
                <div class="w-14 h-14 rounded-full bg-purple-200 flex items-center">
                  <i class="fa-solid fa-chart-column text-3xl text-gray-900"></i>
                </div>
                <h3 class="mt-12 text-xl font-bold text-gray-900 uppercase mb-4">Event Details</h3>
                <ul class="list-disc list-inside text-base text-gray-600 text-left space-y-4">
                  <li><b>Fee:</b> Starting from £20 per person, depending on travel distance. Minimum charge of £40 per hour.                  </li>
                  <li><b>Travel:</b> Travel is free for the first 15 miles or up to 3 hours of booked time.</li>
                  <li><b>Payment:</b> Refundable up to 24 hours before the event.</li>
                </ul>
              </div>

              <!-- Feature 2 -->
              <div class="md:p-8 lg:p-14 md:border-l md:border-gray-300 flex flex-col items-center">
                <div class="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                  <i class="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
                </div>
                <h3 class="mt-12 text-xl font-bold text-gray-900 uppercase mb-4">Group Size & Duration</h3>
                <ul class="list-disc list-inside text-base text-gray-600 text-left space-y-4">
                  <li><b>Participants:</b> Starting from 1 to 12 people.                  </li>
                  <li><b>Duration:</b><br/>
                    <p class="ml-6">1 to 8 people: Maximum 2 hours.</p>
                    <p class="ml-6">9 to 12 people: Maximum 3 hours.</p>
                  </li>
                  <li><b>Payment:</b> Refundable up to 24 hours before the event.</li>
                </ul>
              </div>

              <!-- Feature 3 -->
              <div class="md:p-8 lg:p-14 flex flex-col items-center md:border-t md:border-gray-300">
                <div class="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                  <i class="fa-solid fa-shield text-3xl "></i>
                </div>
                <h3 class="mt-12 text-xl font-bold uppercase mb-4 text-gray-900">Equipment &amp; Location</h3>
                <ul class="list-disc list-inside text-base  text-left space-y-4 text-gray-600">
                  <li><b>Rackets:</b> 8-12 rackets provided, depending on availability and condition. </li>
                  <li><b>Location: </b> Booked and organized by the event organizer.</li>
                </ul>
              </div>

              <!-- Feature 4 -->
              <div class="md:p-8 lg:p-14 flex flex-col md:border-t md:border-l md:border-gray-300 items-center">
                <div class="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                  <i class="fa-solid fa-cloud text-3xl text-gray-900"></i>
                </div>
                <h3 class="mt-12 text-xl font-bold text-gray-900 uppercase">Event Description</h3>
                <p class="mt-5 text-base text-gray-600">Participants will have a reasonable amount of time to try different rackets through hitting and playing games.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="border-gray-200 my-30">
      <div class="grid grid-cols-1">
        <div class="sm:flex xs:flex-col gap-8 sm:gap-16">
          <div class="sm:flex-1 xs:flex-none">
            <div class="flex justify-between items-center">
              <h2 class="font-semibold uppercase text-3xl">Additional Information</h2>
              <h3 class="font-semibold uppercase text-2xl text-gray-100 hidden sm:block">Racket Demo Event</h3>
            </div>
            <hr class="w-75 border-gray-200 border-solid my-4 border-b-2">
            <div
              class="grid grid-cols-1 xs:mt-10 sm:grid-cols-1 sm:gap-x-12 gap-y-12 md:grid-cols-1 md:gap-0">
              <!-- Feature 1 -->
              <div class="md:p-8 lg:p-14 flex flex-col items-center">
                <h3 class="mt-12 text-xl font-bold text-gray-900 uppercase mb-8">Additional Event Details</h3>
                <ul class="list-disc list-inside text-base text-gray-600 text-left space-y-4">
                  <li>Events are scheduled based on date availability.</li>
                  <li>Demo rackets will be prepared with suitable overgrips and strings. Participants can also change overgrips if needed</li>
                  <li>
                    <b>Damage Policy:</b> <br/>
                    <span class="px-6">Reasonable wear and tear is acceptable.</span>
                    <span class="px-6">Serious damage to the racket frame or paint will incur a £20 maintenance fee.</span>
                  </li>
                  <li>The event organizer is responsible for providing access for the Top Racket Demo representative.</li>
                  <li><b>Full payment is due 24 hours before the event.</b></li>
                  <li><b>All participants agree to the terms and conditions (see attached document).</b></li>
                  <li>Participants may need to switch rackets every 15 minutes to ensure everyone has a chance to try each one.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="sm:w-1/3 xs:w-full relative">
            <img src="../assets/images/racket-portrait-2.jpg" alt="" class=" w-full h-full object-fit rounded-2xl">
            <div
              class="bg-gray-900 text-white min-h-7 max-w-fit p-8 rounded-bl-lg absolute bottom-8 -left-8 shadow-2xl ">
              <h3 class="text-3xl font-semibold">Racket Demo Event Details</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="css" scoped></style>