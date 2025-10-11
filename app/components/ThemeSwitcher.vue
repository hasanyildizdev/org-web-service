<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get () { return colorMode.value === 'dark' },
  set () { colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'}
})
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (import.meta.client) {
    localStorage.setItem('ourganize-session-theme', isDark.value ? 'light' : 'dark');
  }
};
</script>

<template>
    <div>
        <UButton
            color="primary"
            variant="ghost"
            aria-label="Theme"
            class="w-8 h-8 flex flex-row items-center justify-center border-[1px] p-2 rounded-full dark:border-white border-black dark:text-white"
            @click="toggleDarkMode()">
            <UIcon :name="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" class="h-6 w-6 dark:text-white"/>
        </UButton>
    </div>
</template>