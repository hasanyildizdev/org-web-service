<script setup lang="ts">
import Logo from '@/components/svg/Logo.vue';
</script>
<template>
    <NuxtLink to="/" class="flex items-center justify-center">
        <Logo class="w-8 h-8 fill-primary dark:fill-white"/>
        <span class="ml-[5px] text-lg font-semibold text-primary dark:text-white">Ourganize</span>
    </NuxtLink>
</template>
