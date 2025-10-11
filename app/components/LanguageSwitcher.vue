<script setup lang="ts">
import type { SelectMenuItem } from '@nuxt/ui'
import { useI18n } from 'vue-i18n'
const { locale, setLocale } = useI18n()
type LanguageOption = SelectMenuItem & { value: string; label: string; icon?: string }

const languageOptions: LanguageOption[] = [
  { label: 'English', value: 'en', icon: 'openmoji:flag-united-states' },
  { label: 'Türkçe', value: 'tr', icon: 'openmoji:flag-turkiye' },
  { label: 'Deutsch', value: 'de', icon: 'openmoji:flag-germany' },
  { label: 'Français', value: 'fr', icon: 'openmoji:flag-france' },
  { label: 'Español', value: 'es', icon: 'openmoji:flag-spain' }
]

const savedLocale = import.meta.client ? localStorage.getItem('ourganize-session-language') : null
const defaultLanguage = languageOptions.find(opt => opt.value === savedLocale) ?? languageOptions[0]!

const selectedLanguage = ref<LanguageOption>(defaultLanguage)

const changeLanguage = () => {
  setLocale(selectedLanguage.value.value as 'en' | 'tr' | 'de' | 'fr' | 'es')
  if (import.meta.client) {
    localStorage.setItem('ourganize-session-language', selectedLanguage.value.value)
  }
}
</script>

<template>
  <USelectMenu
    v-model="selectedLanguage"
    :icon="selectedLanguage.icon"
    :items="languageOptions"
    class="w-30"
    @change="changeLanguage"
  />
</template>
