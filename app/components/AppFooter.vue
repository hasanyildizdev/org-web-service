<script setup lang="ts">
</script>
<template>
    <UFooter class="mt-4 border-t border-gray-200 dark:border-gray-800">
        <template #left>
            <div class="flex flex-col items-start mb-4 md:mb-0">
                <span class="text-lg font-semibold text-primary dark:text-white">Ourganize</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ $t('Where time works for you.') }}</span>
            </div>
        </template>
        <template #right>
            <div class="text-center md:text-right">
                <p class="text-muted text-sm">
                    Copyright © {{ new Date().getFullYear() }} {{ $t('All rights reserved.') }}
                </p>
                <div class="mt-2 flex justify-center md:justify-end space-x-3">
                    <NuxtLink to="/privacy-policy" class="text-xs text-gray-500 hover:text-primary transition-colors duration-300">{{ $t('Privacy Policy') }}</NuxtLink>
                    <NuxtLink to="/terms-of-service" class="text-xs text-gray-500 hover:text-primary transition-colors duration-300">{{ $t('Terms of Service') }}</NuxtLink>
                    <NuxtLink to="/cookies" class="text-xs text-gray-500 hover:text-primary transition-colors duration-300">{{ $t('Cookies') }}</NuxtLink>
                </div>
            </div>
        </template>
    </UFooter>
</template>