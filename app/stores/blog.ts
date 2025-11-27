import { defineStore } from 'pinia'
import type { BlogPost } from '~/types/core_types'
import { GET_BLOG_POSTS, GET_BLOG_POST_BY_SLUG, GET_BLOG_CATEGORIES, GET_BLOGS_BY_CATEGORY } from '~/graphql/queries'
import { useApolloClient } from '@vue/apollo-composable'

export const useBlogStore = defineStore('blog', () => {
    const apollo = useApolloClient().client
    const loading = ref(false)
    const main_error = ref<{ message: string } | null>(null)
    const posts = ref<BlogPost[]>([])
    const currentPost = ref<BlogPost | null>(null)
    const categories = ref<string[]>([])
    const selectedCategory = ref<string | null>(null)

    /**
     * Fetch all published blog posts
     */
    async function fetchPosts(force = false) {
        if(posts.value.length > 0 && !force) return
        
        try {
            loading.value = true
            main_error.value = null
            
            const { data, error } = await apollo.query({
                query: GET_BLOG_POSTS,
                fetchPolicy: force ? 'network-only' : 'cache-first',
            })
            
            if (error) {
                console.error('❌ Error fetching blog posts:', error)
                main_error.value = { message: error.message || 'Failed to fetch blog posts' }
                return
            }
            
            posts.value = data?.blogs || []
            console.log(`✅ Fetched ${posts.value.length} blog posts`)
        } catch (err: any) {
            console.error('❌ Error fetching blog posts:', err)
            main_error.value = { message: err?.message || 'Failed to fetch blog posts' }
        } finally {
            loading.value = false
        }
    }

    /**
     * Fetch a single blog post by slug
     */
    async function fetchPostBySlug(slug: string) {
        try {
            loading.value = true
            main_error.value = null
            
            const { data, error } = await apollo.query({
                query: GET_BLOG_POST_BY_SLUG,
                variables: { slug },
                fetchPolicy: 'network-only',
            })
            
            if (error) {
                console.error('❌ Error fetching blog post:', error)
                main_error.value = { message: error.message || 'Failed to fetch blog post' }
                return null
            }
            
            currentPost.value = data?.blogBySlug || null
            
            if (currentPost.value) {
                console.log(`✅ Fetched blog post: "${currentPost.value.title}"`)
            } else {
                console.warn(`⚠️ No blog post found for slug: "${slug}"`)
            }
            
            return currentPost.value
        } catch (err: any) {
            console.error('❌ Error fetching blog post:', err)
            main_error.value = { message: err?.message || 'Failed to fetch blog post' }
            return null
        } finally {
            loading.value = false
        }
    }
    
    /**
     * Fetch all available blog categories
     */
    async function fetchCategories() {
        try {
            const { data, error } = await apollo.query({
                query: GET_BLOG_CATEGORIES,
                fetchPolicy: 'cache-first',
            })
            
            if (error) {
                console.error('❌ Error fetching categories:', error)
                return
            }
            
            categories.value = data?.blogCategories || []
            console.log(`✅ Fetched ${categories.value.length} categories`)
        } catch (err: any) {
            console.error('❌ Error fetching categories:', err)
        }
    }

    /**
     * Fetch blog posts filtered by category
     */
    async function fetchPostsByCategory(category: string) {
        try {
            loading.value = true
            main_error.value = null
            selectedCategory.value = category
            
            const { data, error } = await apollo.query({
                query: GET_BLOGS_BY_CATEGORY,
                variables: { category },
                fetchPolicy: 'network-only',
            })
            
            if (error) {
                console.error('❌ Error fetching posts by category:', error)
                main_error.value = { message: error.message || 'Failed to fetch posts' }
                return
            }
            
            posts.value = data?.blogsByCategory || []
            console.log(`✅ Fetched ${posts.value.length} posts for category: ${category}`)
        } catch (err: any) {
            console.error('❌ Error fetching posts by category:', err)
            main_error.value = { message: err?.message || 'Failed to fetch posts' }
        } finally {
            loading.value = false
        }
    }

    /**
     * Clear category filter and show all posts
     */
    function clearCategoryFilter() {
        selectedCategory.value = null
        fetchPosts(true)
    }
    
    return {
        loading,
        main_error,
        posts,
        currentPost,
        categories,
        selectedCategory,
        fetchPosts,
        fetchPostBySlug,
        fetchCategories,
        fetchPostsByCategory,
        clearCategoryFilter
    }
})