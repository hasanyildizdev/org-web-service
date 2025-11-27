<script setup lang="ts">
import { useChangelogStore } from '~/stores/changelog'
useHead({ 
  title: 'Ourganize Changelog - Platform Updates & Digital Transformation',
  meta: [
    { 
      name: 'description',
      content: 'Latest updates and releases for the Ourganize digital transformation platform - AI-powered business management suite' 
    }
  ] 
})
const changelogStore = useChangelogStore()
await changelogStore.fetchChangelog()
const versions = computed(() => { 
   if (!changelogStore.versions) return [] 
   return changelogStore.versions.map((c: any) => ({ 
    title: c.title, 
    description: c.description, 
    image: c.image, 
    badge: c.badge, 
    date: c.date, 
    to: c.to, 
    ui: { container: 'max-w-lg' } 
   })) 
})
</script>

<template>
    <UPage class="max-w-4xl mx-auto">
      <UPageHero title="Changelog" :ui="{ container: 'pb-0 sm:pb-0 lg:pb-0 pt-24 sm:pt-24 lg:pt-24' }" />
      <UPageBody>
          <div v-if="changelogStore.loading" class="text-center py-8">
            <UIcon name="i-lucide-loader-circle" class="w-8 h-8 animate-spin mx-auto" />
            <p class="mt-2 text-gray-600">Loading changelogs...</p>
          </div>
          <div v-else-if="changelogStore.main_error" class="text-center py-8 text-red-600">
            {{ changelogStore.main_error.message }}
          </div>
          <UChangelogVersions v-else>
              <UChangelogVersion
                  v-for="(version, index) in versions"
                  :key="index"
                  v-bind="version"
                  :to="version.to"
                  />
          </UChangelogVersions>
      </UPageBody>
    </UPage>
</template>
