<script setup lang="ts">
useSeoMeta({
  title: 'Ourganize - Your Personalized Organization Assistant',
  ogTitle: 'Ourganize - Your Personalized Organization Assistant',
  description: 'Ourganize - Your Personalized Organization Assistant',
  ogDescription: 'Ourganize - Your Personalized Organization Assistant',
  ogImage: 'logo.png',
  twitterCard: 'summary_large_image',
})
useHead({
  title: 'Ourganize - Your Personalized Organization Assistant',
  meta: [
    { name: 'description', content: 'Ourganize - Your Personalized Organization Assistant' },
  ],
})
</script>
<template>
  <div class="min-h-screen flex items-center justify-center bg-primary-50">
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold text-primary-600">Custom Colors Demo</h1>
      <div class="flex gap-4 justify-center">
        <button class="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600">
          Primary
        </button>
        <button class="px-4 py-2 bg-secondary-500 text-white rounded hover:bg-secondary-600">
          Secondary
        </button>
        <button class="px-4 py-2 bg-accent text-white rounded hover:bg-green-600">
          Accent
        </button>
      </div>
    </div>
  </div>
</template>
