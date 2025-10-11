<script setup lang="ts">
import { ref } from 'vue';  
import type { NavigationMenuItem } from '@nuxt/ui'
const route = useRoute()
const { locale, setLocale } = useI18n()
const colorMode = useColorMode()

type Section = 'home' | 'docs' | 'changelog' | 'blog' | 'contact';

// State management
const activeSection = ref<Section>('home');
const showMobileMenu = ref(false);

// Methods
const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value;
};

const setActiveSection = (section: Section) => {
    activeSection.value = section;
    showMobileMenu.value = false;
};

const items = computed<NavigationMenuItem[]>(() => [
{
    label: 'Home',
    to: '/',
}, 
{
    label: 'Docs',
    to: '/docs',
}, 
{
    label: 'Changelog',
    to: '/changelog',
}, 
{
    label: 'Blog',
    to: '/blog',
}, 
{
    label: 'Contact',
    to: '/contact',
}])

onMounted(() => {
  const savedLocale = localStorage.getItem('ourganize-session-language');
  const validLocales = ['tr', 'en', 'de', 'fr', 'es'];
  if (savedLocale && validLocales.includes(savedLocale)) {
    setLocale(savedLocale as 'tr' | 'en' | 'de' | 'fr' | 'es');
  }
  const savedTheme = localStorage.getItem('ourganize-session-theme');
  if (savedTheme) {
    colorMode.preference = savedTheme;
  }
});
</script>

<template>
    <UHeader class="fixed top-2 left-0 right-0 z-50 max-w-screen-2xl rounded-lg mx-auto backdrop-blur-xs bg-white/50 dark:bg-slate-900/70 border-b border-gray-200 dark:border-gray-800 shadow-sm shadow-xl py-3">
        <template #title>
            <AppLogo />
        </template>

        <UNavigationMenu :items="items" />
        <template #right>
            <div class="flex items-center space-x-2">
                <UColorModeButton />
                <LanguageSwitcher />
                <NuxtLink to="/auth/login" class="px-4 py-2 text-sm font-medium bg-primary hover:bg-primary/80 text-white rounded-full transition-colors duration-300">
                    {{ $t('Login') }}
                </NuxtLink>
            </div>
        </template>

        <template #body>
            <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
        </template>
    </UHeader>
</template>