<template>
  <section class="relative h-screen overflow-hidden" id="hero">
    <video
      autoplay
      muted
      loop
      class="absolute inset-0 object-cover w-full h-full"
      poster="../assets/images/first-cta-bg.jpg"
      preload="none"
    >
      <source src="../assets/videos/video-hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-white space-y-8 sm:w-3xl mx-auto"
    >
      <h3 class="text-2xl">Find Your</h3>
      <h1
        class="text-6xl sm:text-9xl text-center font-semibold sm:font-bold italic px-4 sm:px-0"
      >
        Perfect Tennis Racket
      </h1>
      <p class="text-center sm:text-xl">
        Tired of guessing which racket is right for you?<br />
        We take the uncertainty out of finding your perfect racket match.
      </p>
      <hr class="border border-b-white w-3xl hidden sm:block" />
      <a
        href="#booking"
        class="mt-6 px-12 py-4 bg-green-500 text-white rounded-xl text-3xl font-medium hover:bg-green-600 cursor-pointer"
      >
        <h6 class="flex gap-3 items-center">
          <icons-arrow-down class="size-8 animate-bounce" />
          BOOK US NOW!
        </h6>
      </a>
    </div>
  </section>
</template>
