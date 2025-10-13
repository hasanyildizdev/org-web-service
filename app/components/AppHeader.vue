<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const { locale, locales, setLocale } = useI18n()

// Restore saved locale on mount
onMounted(() => {
  const savedLocale = localStorage.getItem('ourganize-session-language')
  const validLocales = ['tr', 'en', 'de', 'fr', 'es']
  if (savedLocale && validLocales.includes(savedLocale)) {
    setLocale(savedLocale as 'tr' | 'en' | 'de' | 'fr' | 'es')
  }
})

// Save locale when it changes
watch(locale, (newLocale) => {
  localStorage.setItem('ourganize-session-language', newLocale)
})

const items = computed<NavigationMenuItem[]>(() => [
{
    label: $t('Home'),
    to: '/',
}, 
{
    label: $t('Docs'),
    to: '/docs',
}, 
{
    label: $t('Changelog'),
    to: '/changelog',
}, 
{
    label: $t('Blog'),
    to: '/blog',
}, 
{
    label: $t('Contact'),
    to: '/contact',
}
])
const navigationUi = {
  link: 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent font-medium',
  active: 'text-primary dark:text-accent font-semibold',
  inactive: 'text-gray-700 dark:text-gray-200'
}
</script>

<template>
    <UHeader class="fixed top-2 left-0 right-0 z-50 max-w-screen-xl rounded-lg mx-auto backdrop-blur-xs bg-white/50 dark:bg-slate-900/70 border-b border-gray-200 dark:border-gray-800 shadow-sm shadow-xl py-3">
        <template #title>
            <AppLogo size="md" />
        </template>

        <UNavigationMenu :items="items" :ui="navigationUi" />
        <template #right>
            <!-- Desktop: Show all controls -->
            <div class="hidden lg:flex items-center space-x-2">
                <UColorModeSwitch color="neutral"/>
                <ULocaleSelect 
                    v-model="locale" 
                    :locales="locales as any" 
                    class="w-32"/>
                <NuxtLink to="/auth/login" class="px-4 py-2 text-sm font-medium bg-primary hover:bg-primary/80 text-white rounded-full transition-colors duration-300">
                    {{ $t('Login') }}
                </NuxtLink>
            </div>
            
            <!-- Mobile: Only show login -->
            <div class="lg:hidden">
                <NuxtLink to="/auth/login" class="px-3 py-1.5 text-sm font-medium bg-primary hover:bg-primary/80 text-white rounded-full transition-colors duration-300">
                    {{ $t('Login') }}
                </NuxtLink>
            </div>
        </template>

        <template #body>
            <!-- Mobile Navigation Menu -->
            <div class="lg:hidden">
                <UNavigationMenu :items="items" orientation="vertical" :ui="navigationUi" class="-mx-2.5" />
                
                <!-- Mobile Controls at Bottom -->
                <div class="flex items-center justify-between px-2.5 pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                    <UColorModeSwitch color="neutral"/>
                    <ULocaleSelect 
                        v-model="locale" 
                        :locales="locales as any" 
                        class="w-28"/>
                </div>
            </div>
        </template>
    </UHeader>
</template>