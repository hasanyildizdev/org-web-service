<script setup lang="ts">
useHead({
    title: 'Changelog',
    meta: [
        { name: 'description', content: 'Ourganize Changelog - Latest news and updates' }
    ]
})

const versions = ref([
  {
    title: 'Ourganize 1.2',
    description: 'Web app updated - with a new built-in component, better warnings, and performance improvements!',
    image: '/assets/images/version/v1.2.png',
    badge: 'v1.2',
    date: '2025-09-12',
    to: '/blog/version/1.2',
    ui: {
      container: 'max-w-lg'
    }
  },
  {
    title: 'Ourganize 1.1',
    description: 'Web app is out - we improved our web app!',
    image: '/assets/images/version/v1.1.png',
    badge: 'v1.1',
    date: '2025-09-07',
    to: '/blog/version/1.1',
    ui: {
      container: 'max-w-lg'
    }
  },
  {
    title: 'Ourganize 1.0',
    description: 'Ourganize 1.0 is out - we deployed our first version!',
    image: '/assets/images/version/v1.0.png',
    badge: 'v1.0',
    date: '2025-09-01',
    to: '/blog/version/1.0',
    ui: {
      container: 'max-w-lg'
    }
  }
])
</script>

<template>
    <UContainer class="max-w-5xl mx-auto">
      <UPage>
        <UPageHero title="Changelog" :ui="{ container: 'pb-0 sm:pb-0 lg:pb-4 pt-24 sm:pt-24 lg:pt-28' }" />
        <UPageBody>
          <UContainer>
            <UChangelogVersions>
                <UChangelogVersion
                    v-for="(version, index) in versions"
                    :key="index"
                    v-bind="version"
                    :to="version.to"
                    />
            </UChangelogVersions>
          </UContainer>
        </UPageBody>
      </UPage>
    </UContainer>
</template>
