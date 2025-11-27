import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { provideApolloClient } from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  const httpLink = createHttpLink({
    uri: `${config.public.apiUrl}/graphql`,
  })

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })

  // Provide for @vue/apollo-composable
  provideApolloClient(apolloClient)
  
  // Also provide via Nuxt for direct access if needed
  nuxtApp.provide('apollo', { defaultClient: apolloClient })
})
