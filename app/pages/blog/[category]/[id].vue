<script setup lang="ts">
const route = useRoute()

useHead({
    title: 'Blog Post',
    meta: [
        { name: 'description', content: 'Ourganize Blog Post' }
    ]
})

// You can access route params here
const category = route.params.category // 'version'
const id = route.params.id // 'v1-2'

// Fetch or define your post data based on the category and id
const post = ref({
    title: `Ourganize ${id}`,
    description: `Discover Ourganize ${id}!`,
    image: `/assets/images/version/v${id}.png`,
    date: '2024-11-25',
})
</script>

<template>
    <UPage>
        <UPageHero :title="post.title" :ui="{ container: 'pb-0 sm:pb-0 lg:pb-4 pt-24 sm:pt-24 lg:pt-28' }" />
        <UPageBody>
            <UContainer>
                <UBlogPost v-bind="post"/>
            </UContainer>
        </UPageBody>
    </UPage>
</template>
