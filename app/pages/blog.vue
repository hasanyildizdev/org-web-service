<script setup lang="ts">
useHead({
    title: 'Blog',
    meta: [
        { name: 'description', content: 'Ourganize Blog - Latest news and updates' }
    ]
})
</script>

<template>
    <UContainer class="py-16 px-6 md:px-12 lg:px-24 min-h-screen">
        <UCard class="p-6 rounded-2xl dark:bg-gray-800">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
                <span class="bg-primary text-transparent bg-clip-text">{{ $t('Blog') }}</span>
            </h1>

            <div class="space-y-6 text-gray-700 dark:text-gray-200">
                <p>
                    Welcome to the Ourganize blog. Stay tuned for the latest news, updates, and insights about our platform.
                </p>

                <div class="mt-8">
                    <p class="text-gray-500 dark:text-gray-400">
                        Blog posts coming soon...
                    </p>
                </div>
            </div>
        </UCard>
    </UContainer>
</template>
