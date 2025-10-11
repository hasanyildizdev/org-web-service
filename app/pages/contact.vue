<script setup lang="ts">
import { ref } from 'vue';
useHead({
    title: 'Contact',
    meta: [
        { name: 'description', content: 'Contact us' }
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
        title: 'Message Sent!',
        description: 'Your message has been successfully sent. We will get back to you shortly.',
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
    <section id="contact" class="py-20 px-6 md:px-12 lg:px-24 mt-6">
        <div class="container mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    Contact Us
                </h2>
                <p class="text-gray-600 text-lg max-w-2xl mx-auto dark:text-gray-400">
                    Have questions or feedback? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
                </p>
            </div>

            <div class="w-full flex flex-col lg:flex-row gap-6 justify-center">
                <UCard class="rounded-2xl dark:bg-gray-800 min-w-md">
                    <template #header>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
                    </template>

                    <ul class="space-y-6">
                        <li class="flex items-start">
                            <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 text-primary border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-primary"></UIcon>
                            </div>
                            <div>
                                <h4 class="text-sm font-medium text-gray-500 mb-1 dark:text-gray-400">Email</h4>
                                <a :href="`mailto:${contactContent.email}`" class="text-gray-900 dark:text-white">{{ contactContent.email }}</a>
                            </div>
                        </li>

                        <li class="flex items-start">
                            <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 text-primary border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                <UIcon name="i-heroicons-phone" class="w-5 h-5 text-primary"></UIcon>
                            </div>
                            <div>
                                <h4 class="text-sm font-medium text-gray-500 mb-1 dark:text-gray-400">Phone</h4>
                                <a :href="`tel:${contactContent.phone_}`" class="text-gray-900 dark:text-white">{{ contactContent.phone }}</a>
                            </div>
                        </li>

                        <li class="flex items-start">
                            <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 text-primary border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                <UIcon name="ic:baseline-location-on" class="w-5 h-5 text-primary"></UIcon>
                            </div>
                            <div>
                                <h4 class="text-sm font-medium text-gray-500 mb-1 dark:text-gray-400">Address</h4>
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
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Send Us a Message</h3>
                    </template>
                    <UForm :state="{ name, email, message }" @submit="submitContactForm" class="space-y-4">
                        <UFormField 
                            label="Name"
                            name="name"
                        >
                            <UInput
                                type="text"
                                id="name"
                                v-model="name"
                                placeholder="Your name"
                                icon="i-heroicons-user"
                                size="xl"
                                required
                                class="w-full"
                            />
                        </UFormField>

                        <UFormField label="Email" name="email">
                            <UInput
                                type="email"
                                id="email"
                                v-model="email"
                                placeholder="Your email address"
                                icon="i-heroicons-envelope"
                                size="xl"
                                required
                                class="w-full"
                            />
                        </UFormField>

                        <UFormField label="Message" name="message">
                            <UTextarea
                                id="message"
                                v-model="message"
                                placeholder="Your message"
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
                            {{ formSubmitted ? 'Message Sent!' : 'Send Message' }}
                        </UButton>
                    </UForm>
                </UCard>
            </div>
        </div>
    </section>
</template>