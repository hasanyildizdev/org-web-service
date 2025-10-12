<script setup lang="ts">
const route = useRoute()
type MetaContent = string | string[]
useHead({
    title: (): string => (route.meta?.title as string) ?? 'Ourganize',
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Ourganize` : 'Ourganize';
    },
    htmlAttrs: {
        lang: 'en',
        dir: 'ltr',
    },
    link: [
        {
            rel: 'icon',
            type: 'icon',
            href: '/favicon.ico',
        },
    ],
    meta: [
        {
            name: 'description',
            content: route.meta?.description ? [route.meta.description] as MetaContent : ['Streamline your workflows, connect scattered systems, and automate routine tasks with AI so your teams can focus on what truly matters.'] as MetaContent,
        },
        {
            property: 'og:site_name',
            content: `Ourganize - ${route.meta?.title}`
        },
        {
            property: 'og:description',
            content: route.meta?.description ? [route.meta.description] as MetaContent : ['Streamline your workflows, connect scattered systems, and automate routine tasks with AI so your teams can focus on what truly matters.'] as MetaContent,
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            property: 'og:image',
            content: '/logo.png',
        },
    ],
})
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <AppHeader />
        <UMain>
            <slot /> 
        </UMain>
        <AppFooter />
    </div>
</template>
    