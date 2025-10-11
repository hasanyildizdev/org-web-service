<script setup lang="ts">
useHead({
    title: 'Blog',
    meta: [
        { name: 'description', content: 'Ourganize Blog - Latest news and updates' }
    ]
})
</script>

<template>
    <UPage>
        <UPageSection class="max-w-4xl mx-auto">
            <UPageHeader 
                :headline="$t('Blog')"
                :title="$t('Latest news and updates')"
                :description="$t('Stay tuned for the latest news, updates, and insights about our platform.')"
                :ui="{ root: 'pb-0 border-none' }"
            />
        </UPageSection>
    </UPage>
</template>
