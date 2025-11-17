<script setup lang="ts">
useHead({
    title: 'Terms of Service',
    meta: [
        { name: 'description', content: 'Terms of Service' }
    ]
})
const { contactContent } = useOurganize();
</script>

<template>
    <UPage class="max-w-4xl mx-auto">
        <UPageBody class="pt-24 pb-10">
            <UCard class="p-1 sm:p-6 rounded-2xl dark:bg-gray-800">
                <div class="space-y-6 text-gray-700 dark:text-gray-200">
                    <h1 class="text-4xl font-bold">Terms of Service</h1>
                    <p>
                        These Terms of Service ("Terms") govern your access to and use of {{ contactContent.name }} ("we", "us", or "our"), a CRM and PMS software platform. By using our services, you agree to be bound by these Terms.
                    </p>

                    <h2 class="text-2xl font-semibold">1. Use of Service</h2>
                    <p>
                        You agree to use the platform in accordance with applicable laws and not for any unlawful or prohibited purposes. We reserve the right to suspend or terminate accounts involved in abusive or suspicious activities.
                    </p>

                    <h2 class="text-2xl font-semibold">2. User Accounts</h2>
                    <p>
                        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. If you believe your account has been compromised, contact us immediately.
                    </p>

                    <h2 class="text-2xl font-semibold">3. Data & Privacy</h2>
                    <p>
                        Our use of your data is governed by our <NuxtLink to="/privacy-policy" target="_blank" class="text-blue-600 underline">Privacy Policy</NuxtLink>. By using {{ contactContent.name }}, you consent to the collection and use of information as described there.
                    </p>

                    <h2 class="text-2xl font-semibold">4. Availability & Changes</h2>
                    <p>
                        We strive to keep the platform running smoothly, but we do not guarantee uninterrupted access. We may update or discontinue features at any time without prior notice.
                    </p>

                    <h2 class="text-2xl font-semibold">5. Termination</h2>
                    <p>
                        We may suspend or terminate your access to the service if you violate these Terms. You may stop using the platform at any time.
                    </p>

                    <h2 class="text-2xl font-semibold">6. Limitation of Liability</h2>
                    <p>
                        {{ contactContent.name }} shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the platform.
                    </p>

                    <h2 class="text-2xl font-semibold">7. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at <a :href="'mailto:' + contactContent.email" class="text-blue-600 underline">{{ contactContent.email }}</a>.
                    </p>

                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        Last updated: July 6, 2025
                    </p>
                </div>
            </UCard>
        </UPageBody>
    </UPage>
</template>
