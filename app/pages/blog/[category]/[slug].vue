<script setup lang="ts">
import { useBlogStore } from '~/stores/blog'

const route = useRoute()
const blogStore = useBlogStore()

// Get slug from route params
const slug = route.params.slug as string

// Fetch blog post by slug
const post = await blogStore.fetchPostBySlug(slug)

// Handle not found
if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found',
    message: `No blog post found with slug: ${slug}`
  })
}

// Set page metadata
useHead({
    title: `${post.title} | Ourganize Blog`,
    meta: [
        { name: 'description', content: post.summary },
        { property: 'og:title', content: post.title },
        { property: 'og:description', content: post.summary },
        { property: 'og:image', content: post.image || '' },
        { property: 'og:type', content: 'article' },
        { name: 'twitter:card', content: 'summary_large_image' },
    ]
})

// Format date
const formattedDate = computed(() => {
  if (!post.published_at) return ''
  return new Date(post.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<template>
    <UPage>
        <UPageHero :title="post.title" :description="post.summary" :ui="{ container: 'pb-0 sm:pb-0 lg:pb-4 pt-24 sm:pt-24 lg:pt-28' }" />
        <UPageBody>
            <UContainer class="max-w-4xl">
                <!-- Meta info bar -->
                <div class="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
                    <!-- Category badge -->
                    <span class="inline-flex items-center px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                        {{ post.category }}
                    </span>
                    
                    <!-- Date -->
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                        {{ formattedDate }}
                    </span>
                    
                    <!-- Author -->
                    <div v-if="post.author" class="flex items-center gap-2 ml-auto">
                        <img v-if="post.author.avatar" 
                             :src="post.author.avatar" 
                             :alt="post.author.name" 
                             class="w-8 h-8 rounded-full" />
                        <div v-else class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span class="text-xs font-semibold text-primary">
                                {{ post.author.name.charAt(0).toUpperCase() }}
                            </span>
                        </div>
                        <span class="text-sm font-medium">{{ post.author.name }}</span>
                    </div>
                </div>
                
                <!-- Featured image -->
                <img v-if="post.image" 
                     :src="post.image" 
                     :alt="post.image_alt || post.title" 
                     class="w-full rounded-xl shadow-lg mb-12" />
                
                <!-- Content -->
                <article class="prose prose-lg dark:prose-invert max-w-none mb-12" v-html="post.content"></article>

                <!-- Footer -->
                <div class="pt-8 border-t border-gray-200 dark:border-gray-800">
                    <NuxtLink to="/blog" 
                              class="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                        <UIcon name="i-lucide-arrow-left" class="w-4 h-4" />
                        Back to all posts
                    </NuxtLink>
                </div>
            </UContainer>
        </UPageBody>
    </UPage>
</template>
