<template>
  <div class="bg-gray-100 pt-20 pb-40">
    <div class="container mx-auto">
      <div class="flex justify-between items-center p-4">
        <h2 class="font-semibold uppercase text-3xl">Follow Up Sessions</h2>
        <h3
          class="font-semibold uppercase text-2xl text-gray-200 hidden sm:block"
        >
          Follow-Up Racket Sessions
        </h3>
      </div>
      <div class="grid grid-cols-3 items-center gap-8">
        <div class="col-span-3 sm:col-span-1 text-justify">
          <p class="p-4">
            Following your initial racket demo event, schedule a focused
            follow-up session. These sessions, designed for smaller groups of
            1-4 people, allow for extended play with the rackets that interested
            you most. You'll have up to 3 hours to refine your choice, gaining a
            deeper understanding of each racket's feel and performance before
            making a purchase decision.
          </p>
        </div>
        <div class="col-span-3 sm:col-span-1 text-justify">
          <p class="p-4">
            During the follow-up session, our experts will be on hand to answer
            any questions and provide further guidance. We'll prepare the demo
            rackets with suitable overgrips and strings, and you can even
            request specific stringing services to fine-tune your playing
            experience. These sessions are perfect for players who want that
            extra time and attention to ensure they select the ideal racket.
          </p>
        </div>
        <div class="col-span-3 sm:col-span-1 relative">
          <img
            src="../assets/images/follow.jpg"
            alt="racket demo"
            class="aspect-3/2 object-cover rounded-2xl"
          />
          <a
            href="#details"
            class="bg-green-500 text-white p-4 rounded-lg absolute -bottom-8 left-1/2 transform -translate-x-1/2 shadow-xl cursor-pointer hover:bg-green-600 transition-all duration-300"
            @click="expandDetails = !expandDetails"
          >
            <h3 class="text-xl font-semibold flex items-center uppercase">
              <span class="inline-block mr-4">
                <IconsArrowDown class="animate-bounce" />
              </span>
              Sessions Details
            </h3>
          </a>
        </div>
      </div>
      <transition
        enter-active-class="transition-all duration-500 ease-in-out"
        leave-active-class="transition-all duration-500 ease-in-out"
        enter-from-class="opacity-0 transform translate-y-4"
        leave-to-class="opacity-0 transform translate-y-4"
      >
        <div class="p-4 mt-24" v-show="expandDetails" id="details">
          <div
            class="grid grid-cols-1 xs:mt-10 sm:grid-cols-3 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0"
          >
            <!-- Feature 1 -->
            <div class="md:p-8 lg:p-14 flex flex-col items-center">
              <div
                class="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center"
              >
                <icons-calendar class="size-8" />
              </div>
              <h3 class="mt-12 text-xl font-bold text-gray-900 uppercase mb-4">
                Event Details
              </h3>
              <ul
                class="list-disc list-inside text-base text-gray-600 text-left space-y-4"
              >
                <li>
                  <b>Fee:</b> Starting from £20 per person, depending on travel
                  distance. Minimum charge of £40 per hour.
                </li>
                <li>
                  <b>Travel:</b> Travel is free for the first 15 miles or up to
                  3 hours of booked time.
                </li>
                <li><b>Hitting Fee:</b> £20 per hour</li>
                <li>
                  <b>Payment:</b> Refundable up to 24 hours before the session.
                </li>
              </ul>
            </div>

            <!-- Feature 2 -->
            <div
              class="md:p-8 lg:p-14 md:border-l md:border-gray-300 flex flex-col items-center"
            >
              <div
                class="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center"
              >
                <icons-group class="size-8" />
              </div>
              <h3 class="mt-12 text-xl font-bold text-gray-900 uppercase mb-4">
                Group Size & Duration
              </h3>
              <ul
                class="list-disc list-inside text-base text-gray-600 text-left space-y-4"
              >
                <li><b>Participants:</b> 1 to 4 people.</li>
                <li>
                  <b>Duration:</b>
                  <span>Maximum 3 hours.</span>
                </li>
              </ul>
            </div>

            <!-- Feature 3 -->
            <div
              class="md:p-8 lg:p-14 flex flex-col items-center md:border-l md:border-gray-300"
            >
              <div
                class="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center"
              >
                <icons-racket class="size-8" />
              </div>
              <h3 class="mt-12 text-xl font-bold uppercase mb-4 text-gray-900">
                Equipment &amp; Location
              </h3>
              <ul
                class="list-disc list-inside text-base text-left space-y-4 text-gray-600"
              >
                <li>
                  <b>Rackets:</b> 8-12 rackets provided, depending on
                  availability and condition.
                </li>
                <li>
                  <b>Location: </b> Booked and organized by the event organizer.
                </li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-1 xs:mt-10">
            <!-- Feature 4 -->
            <div
              class="md:p-8 lg:p-14 flex flex-col md:border-t md:border-gray-300 items-center"
            >
              <div
                class="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center"
              >
                <icons-text class="size-8" />
              </div>
              <div class="md:p-8 flex flex-col items-center">
                <h3
                  class="mt-12 text-xl font-bold text-gray-900 uppercase mb-8"
                >
                  Additional Information:
                </h3>
                <ul
                  class="list-disc list-inside text-base text-gray-600 text-left space-y-4"
                >
                  <li>Sessions are scheduled based on date availability.</li>
                  <li>
                    Demo rackets will be prepared with suitable overgrips and
                    strings. Participants can also change overgrips if needed.
                  </li>
                  <li>
                    <b>Damage Policy:</b> <br />
                    <span class="px-6"
                      >Reasonable wear and tear is acceptable.</span
                    ><br />
                    <span class="px-6"
                      >Serious damage to the racket frame or paint will incur a
                      £20 maintenance fee.</span
                    >
                  </li>
                  <li>
                    The event organizer is responsible for providing access for
                    the Top Racket Demo representative.
                  </li>
                  <li><b>Full payment is due 24 hours before the event.</b></li>
                  <li>
                    <b>All participants agree to the terms and conditions.</b>
                    <a
                      href="#"
                      class="text-green-500 hover:text-green-600 italic text-sm"
                    >
                      (see attached document)</a
                    >
                  </li>
                  <li>
                    <b>Stringing Services:</b>
                    Participants can pay to upgrade specific strings and tension
                    for their follow-up sessions. Stringing services would be
                    provided by Tennis Steps.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const expandDetails = ref(false)
</script>

<style lang="scss" scoped></style>
