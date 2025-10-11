<script setup lang="ts">
useHead({
    title: 'Changelog',
    meta: [
        { name: 'description', content: 'Ourganize Changelog - Latest news and updates' }
    ]
})
</script>

<template>
    <UPage>
        <UPageSection class="max-w-4xl mx-auto">
            <UPageHeader 
                :headline="$t('Changelog')"
                :title="$t('Stay tuned for the latest news, updates, and insights about our platform.')"
                :description="$t('Changelog coming soon...')"
                :ui="{ root: 'pb-0 border-none' }"
            />
        </UPageSection>
    </UPage>
</template>
