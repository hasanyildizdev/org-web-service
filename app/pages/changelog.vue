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
    image: '/assets/images/changelog/v1.2.png',
    badge: 'v1.2',
    date: '2025-09-12',
    to: 'https://ourorganize.com/blog/v1-2',
    target: '_blank',
    ui: {
      container: 'max-w-lg'
    }
  },
  {
    title: 'Ourganize 1.1',
    description: 'Web app is out - we improved our web app!',
    image: '/assets/images/changelog/v1.1.png',
    badge: 'v1.1',
    date: '2025-09-07',
    to: 'https://ourorganize.com/blog/v1-1',
    target: '_blank',
    ui: {
      container: 'max-w-lg'
    }
  },
  {
    title: 'Ourganize 1.0',
    description: 'Ourganize 1.0.0 is out - we deployed our first version!',
    image: '/assets/images/changelog/v1.0.png',
    badge: 'v1.0',
    date: '2025-09-01',
    to: 'https://ourorganize.com/blog/v1-0',
    target: '_blank',
    ui: {
      container: 'max-w-lg'
    }
  }
])
</script>

<template>
    <UPage>
        <UPageSection class="max-w-4xl mx-auto">
            <UPageHeader 
                :headline="$t('In Sync')"
                :title="$t('Changelog')"
                :description="$t('We are working hard to improve our platform and bring you the best experience possible.')"
                :ui="{ root: 'pb-0 border-none' }"
            />
            <UChangelogVersions>
                <UChangelogVersion
                    v-for="(version, index) in versions"
                    :key="index"
                    v-bind="version"
                    :to="version.to"
                    />
            </UChangelogVersions>
        </UPageSection>
    </UPage>
</template>
