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

const name = ref('');
const email = ref('');
const message = ref('');
const formSubmitted = ref(false);

const submitContactForm = () => {
    // Here you would typically submit the form data to your backend
    console.log({ name: name.value, email: email.value, message: message.value });
    formSubmitted.value = true;

    toast.add({
        id: 'contact_success',
        title: t('Message Sent!'),
        description: t('Your message has been successfully sent. We will get back to you shortly.'),
        icon: 'i-heroicons-check-circle',
    });

    // Reset form after submission
    setTimeout(() => {
        name.value = '';
        email.value = '';
        message.value = '';
        formSubmitted.value = false;
    }, 3000);
};
</script>

<template>
    <UPage>
        <UPageHero title="Contact" :ui="{ container: 'pb-0 sm:pb-0 lg:pb-4 pt-24 sm:pt-24 lg:pt-28' }" />
        <UPageBody>
            <div class="w-full flex flex-col lg:flex-row gap-6 justify-center">
                <UCard class="rounded-2xl dark:bg-gray-800 min-w-md">
                    <template #header>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ $t('Contact Information') }}</h3>
                    </template>

                    <ul class="space-y-6">
                        <li class="flex items-start">
                            <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 text-primary border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-primary"></UIcon>
                            </div>
                            <div>
                                <h4 class="text-sm font-medium text-gray-500 mb-1 dark:text-gray-400">{{ $t('Email') }}</h4>
                                <a :href="`mailto:${contactContent.email}`" class="text-gray-900 dark:text-white">{{ contactContent.email }}</a>
                            </div>
                        </li>

                        <li class="flex items-start">
                            <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 text-primary border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                <UIcon name="i-heroicons-phone" class="w-5 h-5 text-primary"></UIcon>
                            </div>
                            <div>
                                <h4 class="text-sm font-medium text-gray-500 mb-1 dark:text-gray-400">{{ $t('Phone') }}</h4>
                                <a :href="`tel:${contactContent.phone_}`" class="text-gray-900 dark:text-white">{{ contactContent.phone }}</a>
                            </div>
                        </li>

                        <li class="flex items-start">
                            <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 text-primary border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                <UIcon name="ic:baseline-location-on" class="w-5 h-5 text-primary"></UIcon>
                            </div>
                            <div>
                                <h4 class="text-sm font-medium text-gray-500 mb-1 dark:text-gray-400">{{ $t('Address') }}</h4>
                                <p class="text-gray-900 dark:text-white">{{ contactContent.address }}</p>
                            </div>
                        </li>
                    </ul>

                    <div class="flex space-x-6 h-full mt-16 justify-center">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-300 border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600">
                            <UIcon name="fa-brands-linkedin" class="w-5 h-5 text-primary"></UIcon>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-300 border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600">
                            <UIcon name="fa-brands-facebook" class="w-5 h-5 text-primary"></UIcon>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-300 border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600">
                            <UIcon name="fa-brands-twitter" class="w-5 h-5 text-primary"></UIcon>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-300 border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600">
                            <UIcon name="fa-brands-instagram" class="w-5 h-5 text-primary"></UIcon>
                        </a>
                    </div>
                </UCard>

                <UCard class="rounded-2xl dark:bg-gray-800 min-w-md">
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