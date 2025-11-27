import { defineStore } from 'pinia'
import type { Changelog } from '~/types/core_types'
import { GET_CHANGELONGS } from '~/graphql/queries'
import { useApolloClient } from '@vue/apollo-composable'

export const useChangelogStore = defineStore('changelog', () => {
    const apollo = useApolloClient().client
    const loading = ref(false)
    const main_error = ref<{ message: string } | null>(null)
    const versions = ref<Changelog[]>([])

    async function fetchChangelog() {
        if(versions.value.length > 0) return
        
        try {
            loading.value = true
            
            const { data, error } = await apollo.query({
                query: GET_CHANGELONGS,
            })
            
            if (error) {
                console.error('Error fetching changelogs:', error)
                main_error.value = { message: error.message || 'Failed to fetch changelogs' }
                return
            }
            
            versions.value = data?.changelogs || []
            console.log(`✅ Fetched ${versions.value.length} changelogs`)
        } catch (err: any) {
            console.error('Error fetching changelogs:', err)
            main_error.value = { message: err?.message || 'Failed to fetch changelogs' }
        } finally {
            loading.value = false
        }
    }
    
    return {
        loading,
        main_error,
        versions,
        fetchChangelog
    }
})