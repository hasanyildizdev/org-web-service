<script setup lang="ts">
import { ref } from 'vue';
const { t } = useI18n()

useHead({
    title: t('Contact'),
    meta: [
        { name: 'description', content: t('Contact us') }
    ]
})
const toast = useToast()
const { contactContent } = useOurganize();

const topics = computed(() => [
    t('General'),
    t('Support'),
    t('Feedback'), 
    t('Other')
])

const name = ref('');
const email = ref('');
const topic = ref('');
const message = ref('');
const formSubmitted = ref(false);
const loading = ref(false)

const social_media_links = computed(() => [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/ourganize',
        icon: 'fa-brands-linkedin',
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/ourganize',
        icon: 'fa-brands-facebook',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/ourganize',
        icon: 'fa-brands-twitter',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/ourganize',
        icon: 'fa-brands-instagram',
    },
]);

const submitContactForm = async () => {
  if (!name.value || !email.value || !message.value) {
    toast.add({
      id: 'contact_error',
      title: t('Missing information'),
      description: t('Please fill out all fields before submitting.'),
      icon: 'i-heroicons-exclamation-triangle',
      color: 'error',
    })
    return
  }

  loading.value = true

  try {
    // Send form data to your Nuxt API route
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        topic: topic.value,
        message: message.value,
      },
    })

    if ('success' in res && res.success) {
      toast.add({
        id: 'contact_success',
        title: t('Message Sent!'),
        description: t('Your message has been successfully sent. We will get back to you shortly.'),
        icon: 'i-heroicons-check-circle',
        color: 'success',
      })

      formSubmitted.value = true

      // Reset form
      setTimeout(() => {
        name.value = ''
        email.value = ''
        topic.value = ''
        message.value = ''
        formSubmitted.value = false
      }, 3000)
    } else {
      throw new Error(('error' in res && res.error) || 'Unknown error')
    }
  } catch (err) {
    console.error('Contact form submission failed:', err)
    toast.add({
      id: 'contact_failed',
      title: t('Failed to Send'),
      description: t('There was a problem sending your message. Please try again later.'),
      icon: 'i-heroicons-x-circle',
      color: 'error',
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
    <UPage class="max-w-4xl mx-auto">
        <UPageHero title="Contact" :ui="{ container: 'pb-0 sm:pb-0 lg:pb-0 pt-24 sm:pt-24 lg:pt-24' }" />
        <UPageBody class="px-2">
            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <UCard class="rounded-2xl dark:bg-gray-800 col">
                    <!-- Header with gradient background -->
                    <template #header>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ $t('Get in Touch') }}</h3>
                    </template>

                    <!-- Contact Information -->
                    <div class="flex-1">
                        <div class="space-y-4">
                            <div class="group">
                                <div class="flex items-start p-4 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary/30 transition-colors duration-200">
                                    <div class="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4">
                                        <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-primary"></UIcon>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-1">{{ $t('Email Address') }}</h4>
                                        <a :href="`mailto:${contactContent.email}`" class="text-primary hover:text-primary/80 font-medium transition-colors">{{ contactContent.email }}</a>
                                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ $t('We respond within 24 hours') }}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="group">
                                <div class="flex items-start p-4 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary/30 transition-colors duration-200">
                                    <div class="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4">
                                        <UIcon name="i-heroicons-phone" class="w-6 h-6 text-primary"></UIcon>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-1">{{ $t('Phone Number') }}</h4>
                                        <a :href="`tel:${contactContent.phone_}`" class="text-primary hover:text-primary/80 font-medium transition-colors">{{ contactContent.phone }}</a>
                                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ $t('Mon-Fri 9AM-6PM') }}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="group">
                                <div class="flex items-start p-4 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary/30 transition-colors duration-200">
                                    <div class="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4">
                                        <UIcon name="ic:baseline-location-on" class="w-6 h-6 text-primary"></UIcon>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-1">{{ $t('Office Address') }}</h4>
                                        <p class="text-gray-700 dark:text-gray-300 font-medium">{{ contactContent.address }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Social Media -->
                        <div class="mt-6">
                            <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4 text-center">{{ $t('Follow Us') }}</h4>
                            <div class="flex justify-center space-x-3">
                                <template v-for="link in social_media_links" :key="link.name">
                                    <a :href="link.url" class="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center hover:scale-110 transition-transform duration-200">
                                        <UIcon :name="link.icon" class="w-6 h-6 text-primary"></UIcon>
                                    </a>
                                </template>
                            </div>
                        </div>
                    </div>
                </UCard>

                <UCard class="rounded-2xl dark:bg-gray-800 col">
                    <template #header>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ $t('Send Us a Message') }}</h3>
                    </template>
                    <UForm :state="{ name, email, message }" @submit="submitContactForm" class="space-y-4">
                        <UFormField 
                            :label="$t('Name')"
                            name="name"
                        >
                            <UInput
                                type="text"
                                id="name"
                                v-model="name"
                                :placeholder="$t('Your name')"
                                icon="i-heroicons-user"
                                size="xl"
                                required
                                class="w-full"
                            />
                        </UFormField>

                        <UFormField :label="$t('Email')" name="email">
                            <UInput
                                type="email"
                                id="email"
                                v-model="email"
                                :placeholder="$t('Your email address')"
                                icon="i-heroicons-envelope"
                                size="xl"
                                required
                                class="w-full"
                            />
                        </UFormField>

                        <UFormField :label="$t('Topic')" name="topic">
                            <USelectMenu 
                                id="topic"
                                v-model="topic"
                                :items="topics"
                                :placeholder="$t('Your topic')"
                                icon="mdi:crosshairs-question"
                                size="xl"
                                required
                                class="w-full"
                            />
                        </UFormField>

                        <UFormField :label="$t('Message')" name="message">
                            <UTextarea
                                id="message"
                                v-model="message"
                                :placeholder="$t('Your message')"
                                size="xl"
                                required
                                class="w-full"
                            />
                        </UFormField>

                        <UButton
                            type="submit"
                            block
                            size="lg"
                            variant="solid"
                            :disabled="formSubmitted"
                        >
                            {{ formSubmitted ? $t('Message Sent!') : $t('Send Message') }}
                        </UButton>
                    </UForm>
                </UCard>
            </div>
        </UPageBody>
    </UPage>
</template>