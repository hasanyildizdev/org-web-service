<script setup lang="ts">
useHead({
    title: 'Blog',
    meta: [
        { name: 'description', content: 'Ourganize Blog - Latest news and updates' }
    ]
})

const post = ref({
    title: 'Ourganize 1.2',
    description: 'Discover Ourganize v1.2!',
    image: '/assets/images/version/v1.2.png',
    date: '2024-11-25',
    to: '/blog/v1-2'
})
</script>

<template>
    <UPage>
        <UPageHero title="Blog" :ui="{ container: 'pb-0 sm:pb-0 lg:pb-4 pt-24 sm:pt-24 lg:pt-28' }" />
        <UPageBody>
            <UContainer>
                <UBlogPost v-bind="post"/>
            </UContainer>
        </UPageBody>
    </UPage>
</template>
.