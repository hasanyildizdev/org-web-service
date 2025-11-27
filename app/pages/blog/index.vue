<script setup lang="ts">
import { useBlogStore } from '~/stores/blog'

useHead({
    title: 'Blog | Ourganize',
    meta: [
        { name: 'description', content: 'Ourganize Blog - Latest news, insights, and updates on digital transformation, AI, and business technology' }
    ]
})

const blogStore = useBlogStore()
const route = useRoute()

// Get category from URL query
const categoryFromQuery = route.query.category as string | undefined

// Fetch data
await Promise.all([
    blogStore.fetchPosts(),
    blogStore.fetchCategories()
])

// Apply category filter from URL if present
if (categoryFromQuery && blogStore.categories.includes(categoryFromQuery)) {
    await blogStore.fetchPostsByCategory(categoryFromQuery)
}

const page = ref(1)
const pageSize = 6 // Posts per page

// Handle category selection
async function selectCategory(category: string | null) {
    page.value = 1 // Reset to first page
    
    if (category === null) {
        // Clear filter
        await navigateTo('/blog')
        blogStore.clearCategoryFilter()
    } else {
        // Apply filter
        await navigateTo(`/blog?category=${category}`)
        await blogStore.fetchPostsByCategory(category)
    }
}

// Transform blog posts to match the UBlogPost component format
const allPosts = computed(() => {
  return blogStore.posts.map(post => ({
    title: post.title,
    description: post.summary,
    image: post.image,
    date: post.published_at,
    category: post.category,
    to: `/blog/${post.category}/${post.slug}`
  }))
})

// Computed property to get paginated posts
const paginatedPosts = computed(() => {
  const start = (page.value - 1) * pageSize
  const end = start + pageSize
  return allPosts.value.slice(start, end)
})

// Computed for showing active category
const activeCategory = computed(() => blogStore.selectedCategory)

// Computed for post count message
const postCountMessage = computed(() => {
    const total = allPosts.value.length
    if (activeCategory.value) {
        return `${total} post${total !== 1 ? 's' : ''} in ${activeCategory.value}`
    }
    return `${total} post${total !== 1 ? 's' : ''}`
})
</script>

<template>
    <UPage class="max-w-6xl mx-auto">
        <UPageHero title="Blog" description="Latest insights, news, and updates" :ui="{ container: 'pb-0 sm:pb-0 lg:pb-0 pt-24 sm:pt-24 lg:pt-28' }" />
        <UPageBody>
            <!-- Category Filter Section -->
            <div class="mb-8 space-y-4">
                <!-- Category Pills -->
                <div class="flex flex-wrap items-center gap-2">
                    <!-- All Posts Button -->
                    <UButton
                        :variant="!activeCategory ? 'solid' : 'soft'"
                        color="primary"
                        size="sm"
                        @click="selectCategory(null)"
                    >
                        <template #leading>
                            <UIcon name="i-lucide-layout-grid" class="w-4 h-4" />
                        </template>
                        All Posts
                    </UButton>

                    <!-- Category Buttons -->
                    <UButton
                        v-for="category in blogStore.categories"
                        :key="category"
                        :variant="activeCategory === category ? 'solid' : 'soft'"
                        color="neutral"
                        size="sm"
                        @click="selectCategory(category)"
                    >
                        {{ category }}
                    </UButton>
                </div>

                <!-- Post Count -->
                <div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ postCountMessage }}
                    </p>
                    <UButton
                        v-if="activeCategory"
                        variant="ghost"
                        color="neutral"
                        size="xs"
                        @click="selectCategory(null)"
                    >
                        <template #trailing>
                            <UIcon name="i-lucide-x" class="w-3 h-3" />
                        </template>
                        Clear filter
                    </UButton>
                </div>
            </div>

            <!-- Loading state -->
            <div v-if="blogStore.loading" class="flex justify-center items-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
            
            <!-- Error state -->
            <div v-else-if="blogStore.main_error" class="text-center py-12">
                <UAlert
                    icon="i-lucide-alert-circle"
                    color="error"
                    variant="subtle"
                    :title="blogStore.main_error.message"
                />
            </div>
            
            <!-- Empty state -->
            <div v-else-if="allPosts.length === 0" class="text-center py-16">
                <UIcon name="i-lucide-inbox" class="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 class="text-lg font-semibold mb-2">No posts found</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                    {{ activeCategory ? `No posts in "${activeCategory}" category` : 'No blog posts available' }}
                </p>
                <UButton v-if="activeCategory" variant="soft" @click="selectCategory(null)">
                    View all posts
                </UButton>
            </div>

            <!-- Posts Grid -->
            <div v-else>
                <UBlogPosts>
                    <UBlogPost
                        v-for="(post, index) in paginatedPosts"
                        :key="index"
                        v-bind="post"
                        :to="post.to"
                        variant="ghost"
                    >
                        <template #badge>
                            <span class="text-xs font-medium text-primary">{{ post.category }}</span>
                        </template>
                    </UBlogPost>
                </UBlogPosts>
                
                <!-- Pagination -->
                <div class="mt-12 flex justify-center">
                    <UPagination 
                        v-if="allPosts.length > pageSize" 
                        v-model="page" 
                        :total="allPosts.length" 
                        :page-count="pageSize"
                        :sibling-count="1" 
                        show-edges 
                    />
                </div>
            </div>
        </UPageBody>
    </UPage>
</template>
