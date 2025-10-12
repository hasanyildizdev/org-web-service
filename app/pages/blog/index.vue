<script setup lang="ts">
useHead({
    title: 'Blog',
    meta: [
        { name: 'description', content: 'Ourganize Blog - Latest news and updates' }
    ]
})

const allPosts = ref([
  {
    title: 'Ourganize 1.2',
    description: 'Discover Ourganize v1.2!',
    image: '/assets/images/version/v1.2.png',
    date: '2024-11-25',
    to: '/blog/version/1.2'
  },
  {
    title: 'Ourganize 1.1',
    description: 'Discover Ourganize v1.1!',
    image: '/assets/images/version/v1.1.png',
    date: '2024-11-04',
    to: '/blog/version/1.1'
  },
  {
    title: 'Ourganize 1.0',
    description: 'Discover Ourganize v1.0!',
    image: '/assets/images/version/v1.0.png',
    date: '2024-08-22',
    to: '/blog/version/1.0'
  },
])

const page = ref(1)
const pageSize = 8 // Posts per page

// Computed property to get paginated posts
const paginatedPosts = computed(() => {
  const start = (page.value - 1) * pageSize
  const end = start + pageSize
  return allPosts.value.slice(start, end)
})
</script>

<template>
    <UPage>
        <UPageHero title="Blog" :ui="{ container: 'pb-0 sm:pb-0 lg:pb-4 pt-24 sm:pt-24 lg:pt-28' }" />
        <UPageBody>
            <UContainer>
                <UBlogPosts>
                    <UBlogPost
                        v-for="(post, index) in paginatedPosts"
                        :key="index"
                        v-bind="post"
                        :to="post.to"
                        variant="ghost"/>
               </UBlogPosts>
               <div class="mt-8 flex justify-center">
                 <UPagination v-if="allPosts.length > pageSize" v-model:page="page" :total="allPosts.length" :sibling-count="1" show-edges />
               </div>
              </UContainer>
        </UPageBody>
    </UPage>
</template>
