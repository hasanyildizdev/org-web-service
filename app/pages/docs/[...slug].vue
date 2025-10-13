<script setup lang="ts"> 
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))
const slug = useRoute().params.slug
const { data: page } = await useAsyncData(`page-${slug}`, () => {
  const slugArray = Array.isArray(slug) ? slug : [slug]
  const path = `/docs/${slugArray.join('/')}`
  return queryCollection('content').path(path).first()
})
const { data: surround } = await useAsyncData(`${slug}-surround`, async () => {
  const slugArray = Array.isArray(slug) ? slug : [slug]
  const path = `/docs/${slugArray.join('/')}`
  try {
    const result = await queryCollectionItemSurroundings('content', path)
    
    // For index page, provide manual next navigation to getting started
    if (path === '/docs/' || path === '/docs') {
      const gettingStarted = await queryCollection('content').path('/docs/guide/getting-started').first()
      if (gettingStarted) {
        return [null, gettingStarted]
      }
    }
    
    return result
  } catch (error) {
    return []
  }
})
useHead({
    title: () => page.value?.title,
    meta: [
        { name: 'description', content: () => page.value?.description }
    ]
})
</script>

<template>
  <UPageHero title="Docs" :ui="{ container: 'pb-0 sm:pb-0 lg:pb-0 pt-24 sm:pt-24 lg:pt-24' }" />
  <UPage class="max-w-6xl mx-auto">
      <UPageHeader :title="page?.title" :description="page?.description"/>
      <template #left>
          <UPageAside>
              <UContentNavigation 
              :navigation="navigation" 
              highlight/>
          </UPageAside>
      </template>
      <UPageBody>
          <ContentRenderer v-if="page" :value="page" prose class="prose"/>
          <div v-else class="text-center py-8">
            <p class="text-gray-500">Content not found</p>
          </div>
          <USeparator />
          <UContentSurround
            v-if="surround && (surround[0] || surround[1])" 
            :surround="(surround as any)"/>
      </UPageBody>
      <template #right>
        <UContentToc 
          v-if="page?.body?.toc?.links"
          :links="page.body.toc.links" 
          highlight/>
      </template>
  </UPage>
</template>
