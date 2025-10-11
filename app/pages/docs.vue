<script setup lang="ts">
useHead({
    title: 'Docs',
    meta: [
        { name: 'description', content: 'Ourganize Docs - Latest news and updates' }
    ]
})
</script>

<template>
    <UPage>
        <UPageSection class="max-w-4xl mx-auto">
            <UPageHeader 
                :headline="$t('Docs')"
                :title="$t('Stay tuned for the latest news, updates, and insights about our platform.')"
                :description="$t('Docs coming soon...')"
                :ui="{ root: 'pb-0 border-none' }"
            />
        </UPageSection>
    </UPage>
</template>
