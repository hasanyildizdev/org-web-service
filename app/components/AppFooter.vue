<script setup lang="ts">
</script>
<template>
    <footer class="p-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-gray-800">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="flex flex-col items-start mb-4 md:mb-0">
                    <span class="text-lg font-semibold text-primary dark:text-white">Ourganize</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ $t('Where time works for you.') }}</span>
                </div>
                <div class="text-center md:text-right">
                    <p class="text-sm text-gray-600 dark:text-gray-400">&copy;  {{ new Date().getFullYear() }} Ourganize. {{ $t('All rights reserved.') }}</p>
                    <div class="mt-2 flex justify-center md:justify-end space-x-4">
                        <NuxtLink to="/privacy-policy" class="text-xs text-gray-500 hover:text-primary transition-colors duration-300">{{ $t('Privacy Policy') }}</NuxtLink>
                        <NuxtLink to="/terms-of-service" class="text-xs text-gray-500 hover:text-primary transition-colors duration-300">{{ $t('Terms of Service') }}</NuxtLink>
                        <NuxtLink to="/cookies" class="text-xs text-gray-500 hover:text-primary transition-colors duration-300">{{ $t('Cookies') }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>