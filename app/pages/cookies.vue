<script setup lang="ts">
useHead({
    title: 'Cookies',
    meta: [
        { name: 'description', content: 'Cookies' }
    ]
})
const { contactContent } = useOurganize();
</script>

<template>
    <UPage class="max-w-4xl mx-auto">
      <UPageBody class="pt-24 pb-10">
        <UCard class="p-1 sm:p-6 rounded-2xl dark:bg-gray-800">
            <div class="space-y-6 text-gray-700 dark:text-gray-200">
                <h1 class="text-4xl font-bold">Cookies Policy</h1>
                <p>
                    This Cookies Policy explains how <strong>{{ contactContent.name }}</strong> ("we", "us", or "our") uses cookies and similar technologies on our website <a :href="contactContent.url" class="text-blue-600 underline">{{ contactContent.domain }}</a>.
                </p>

                <h2 class="text-2xl font-semibold">1. What Are Cookies?</h2>
                <p>
                    Cookies are small data files stored on your device when you visit a website. They help us understand how you use our services, remember your preferences, and improve user experience.
                </p>

                <h2 class="text-2xl font-semibold">2. How We Use Cookies</h2>
                <p>
                    We use cookies for several purposes, including:
                </p>
                <ul class="list-disc list-inside ml-4 space-y-1">
                    <li>Essential functionality (e.g., logging in to your account)</li>
                    <li>Analytics to understand user behavior</li>
                    <li>Saving user preferences (like language)</li>
                </ul>

                <h2 class="text-2xl font-semibold">3. Types of Cookies We Use</h2>
                <ul class="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Necessary Cookies</strong> – Required for our site to function properly.</li>
                    <li><strong>Analytics Cookies</strong> – Help us track usage to improve features.</li>
                    <li><strong>Preference Cookies</strong> – Remember your settings and preferences.</li>
                </ul>

                <h2 class="text-2xl font-semibold">4. Managing Your Cookie Preferences</h2>
                <p>
                    You can control and manage cookies through your browser settings. You may also choose to disable cookies, though some features of our website may not function properly.
                </p>

                <h2 class="text-2xl font-semibold">5. Changes to This Policy</h2>
                <p>
                    We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>

                <h2 class="text-2xl font-semibold">6. Contact Us</h2>
                <p>
                    If you have any questions about this Cookies Policy, you can contact us at <a :href="'mailto:' + contactContent.email" class="text-blue-600 underline">{{ contactContent.email }}</a>.
                </p>
            </div>
        </UCard>
      </UPageBody>
    </UPage>
</template>
