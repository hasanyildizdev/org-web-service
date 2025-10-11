<script setup lang="ts">
useHead({
  title: 'Privacy Policy',
  meta: [
    { name: 'description', content: 'Privacy Policy for our CRM & PMS software' }
  ]
})
</script>

<template>
  <UContainer class="py-16 px-6 md:px-12 lg:px-24 min-h-screen">
    <UCard class="p-6 rounded-2xl dark:bg-gray-800">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        <span class="bg-primary text-transparent bg-clip-text">Privacy Policy</span>
      </h1>

      <div class="space-y-6 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
        <p>
          This Privacy Policy explains how we collect, use, and protect your personal information when you use our software solution project.
        </p>

        <h2 class="text-xl font-semibold">1. Information We Collect</h2>
        <p>
          We may collect personal data including your name, email address, phone number, company name, and usage data when you register or interact with our platform.
        </p>

        <h2 class="text-xl font-semibold">2. How We Use Your Information</h2>
        <ul class="list-disc list-inside pl-4">
          <li>To provide and maintain our CRM & PMS services</li>
          <li>To communicate with you about your account or support requests</li>
          <li>To improve system performance and user experience</li>
          <li>To ensure security and prevent fraud</li>
        </ul>

        <h2 class="text-xl font-semibold">3. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.
        </p>

        <h2 class="text-xl font-semibold">4. Third-Party Services</h2>
        <p>
          We may use trusted third-party services (e.g., hosting, analytics, email providers) that process data on our behalf under strict data protection agreements.
        </p>

        <h2 class="text-xl font-semibold">5. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data. Contact us at <a href="mailto:info@ourganize.com" class="text-primary hover:underline">info@ourganize.com</a> to make a request.
        </p>

        <h2 class="text-xl font-semibold">6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.
        </p>

        <p class="text-sm text-gray-500 mt-10">
          Last updated: July 6, 2025
        </p>
      </div>
    </UCard>
  </UContainer>
</template>
