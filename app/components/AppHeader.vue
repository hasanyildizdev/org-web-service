<script setup lang="ts">
import { ref } from 'vue';  
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
        <div class="container mx-auto px-6 flex justify-between items-center">
            <div class="flex items-center">
            </div>
            
            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-8">
                <NuxtLink @click="setActiveSection('home')" :class="[activeSection === 'home' ? 'text-primary dark:text-accent' : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary', 'transition-colors duration-300 text-sm font-medium']" to="/#home">{{ $t('Home') }}</NuxtLink>
                <NuxtLink @click="setActiveSection('docs')" :class="[activeSection === 'docs' ? 'text-primary dark:text-accent' : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary', 'transition-colors duration-300 text-sm font-medium']" to="/docs">{{ $t('Docs') }}</NuxtLink>
                <NuxtLink @click="setActiveSection('changelog')" :class="[activeSection === 'changelog' ? 'text-primary dark:text-accent' : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary', 'transition-colors duration-300 text-sm font-medium']" to="/changelog">{{ $t('Changelog') }}</NuxtLink>
                <NuxtLink @click="setActiveSection('blog')" :class="[activeSection === 'blog' ? 'text-primary dark:text-accent' : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary', 'transition-colors duration-300 text-sm font-medium']" to="/blog">{{ $t('Blog') }}</NuxtLink>
                <NuxtLink @click="setActiveSection('contact')" :class="[activeSection === 'contact' ? 'text-primary dark:text-accent' : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary', 'transition-colors duration-300 text-sm font-medium']" to="/contact">{{ $t('Contact') }}</NuxtLink>
            </nav>

            <!-- Auth Buttons -->
            <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-2">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                </div>
                
                <div class="hidden md:flex items-center space-x-4">
                    <NuxtLink
                        to="/auth/login"
                        target="_blank"
                        class="px-4 py-2 text-sm font-medium bg-primary hover:bg-primary/80 text-white rounded-full transition-colors duration-300">
                        {{ $t('Login') }}
                    </NuxtLink>
                </div>
            </div>
            
            <!-- Mobile Menu Button -->
            <button @click="toggleMobileMenu" class="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none">
                <UIcon
                    :name="showMobileMenu ? 'heroicons-solid:x' : 'heroicons-solid:menu'"
                    class="w-6 h-6"
                />
            </button>
        </div>
        
        <!-- Mobile Menu -->
        <div v-if="showMobileMenu" class="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 shadow-lg">
            <div class="container mx-auto px-6 py-4 space-y-4">
                <NuxtLink @click="setActiveSection('home')" :class="[activeSection === 'home' ? 'text-primary dark:text-accent' : 'text-gray-700 dark:text-gray-300', 'block py-2 text-base font-medium hover:text-primary dark:hover:text-primary']" to="/#home">{{ $t('Home') }}</NuxtLink>
                <NuxtLink @click="setActiveSection('docs')" :class="[activeSection === 'docs' ? 'text-primary dark:text-primary' : 'text-gray-700 dark:text-gray-300', 'block py-2 text-base font-medium hover:text-primary dark:hover:text-primary']" to="/docs">{{ $t('Docs') }}</NuxtLink>
                <NuxtLink @click="setActiveSection('changelog')" :class="[activeSection === 'changelog' ? 'text-primary dark:text-primary' : 'text-gray-700 dark:text-gray-300', 'block py-2 text-base font-medium hover:text-primary dark:hover:text-primary']" to="/changelog">{{ $t('Changelog') }}</NuxtLink>
                <NuxtLink @click="setActiveSection('blog')" :class="[activeSection === 'blog' ? 'text-primary dark:text-primary' : 'text-gray-700 dark:text-gray-300', 'block py-2 text-base font-medium hover:text-primary dark:hover:text-primary']" to="/blog">{{ $t('Blog') }}</NuxtLink>
                <NuxtLink @click="setActiveSection('contact')" :class="[activeSection === 'contact' ? 'text-primary dark:text-primary' : 'text-gray-700 dark:text-gray-300', 'block py-2 text-base font-medium hover:text-primary dark:hover:text-primary']" to="/contact">{{ $t('Contact') }}</NuxtLink>
                <div class="pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col space-y-3">
                    <NuxtLink
                        to="/auth/login"
                        class="px-4 py-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                    >
                        {{ $t('Login') }}
                    </NuxtLink>
                    <NuxtLink
                        to="/auth/register"
                        class="px-4 py-2 text-center text-sm font-medium bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors duration-300"
                    >
                        {{ $t('Register') }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </UHeader>
</template>