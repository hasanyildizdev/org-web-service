<template>
    <UFooter class="mt-4 border-t border-gray-200 dark:border-gray-800">
        <template #left>
            <div class="w-full sm:w-auto">
                <p class="text-muted text-sm">
                    Copyright © {{ new Date().getFullYear() }} {{ $t('All rights reserved.') }}
                </p>
                <div class="w-full mt-2 space-x-3">
                    <NuxtLink to="/privacy-policy" class="text-xs text-gray-500 hover:text-primary transition-colors duration-300">{{ $t('Privacy Policy') }}</NuxtLink>
                    <NuxtLink to="/terms-of-service" class="text-xs text-gray-500 hover:text-primary transition-colors duration-300">{{ $t('Terms of Service') }}</NuxtLink>
                    <NuxtLink to="/cookies" class="text-xs text-gray-500 hover:text-primary transition-colors duration-300">{{ $t('Cookies') }}</NuxtLink>
                </div>
            </div>
        </template>
        <template #right>
            <div class="w-full sm:w-auto flex flex-col items-start mb-4 md:mb-0">
                <span class="text-lg font-semibold text-secondary dark:text-white">Ourganize</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ $t('Where time works for you.') }}</span>
            </div>
        </template>
    </UFooter>
</template>