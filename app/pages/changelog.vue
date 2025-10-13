<script setup lang="ts">
useHead({
    title: 'Ourganize Changelog - Platform Updates & Digital Transformation',
    meta: [
        { name: 'description', content: 'Latest updates and releases for the Ourganize digital transformation platform - AI-powered business management suite' }
    ]
})

const versions = ref([
  {
    title: 'Ourganize Platform v1.3 - AI Intelligence Suite',
    description: 'Major AI enhancement release featuring auto-generated CVs, advanced ML-driven decision making, and enhanced social collaboration platform with intelligent workflow automation across all business modules.',
    image: '/assets/images/version/v1.3.png',
    badge: 'v1.3 - Latest',
    date: '2024-12-15',
    to: '/blog/version/1.3',
    ui: {
      container: 'max-w-lg'
    }
  },
  {
    title: 'Ourganize Platform v1.2 - Complete Digital Transformation',
    description: 'Full platform launch with integrated PMS, CRM, ERP, HR, IMS, and Social modules. Features visual time blocks, smart schedules, customer journey management, and connected systems integration with big data analytics.',
    image: '/assets/images/version/v1.2.png',
    badge: 'v1.2 - Major Release',
    date: '2024-11-28',
    to: '/blog/version/1.2',
    ui: {
      container: 'max-w-lg'
    }
  },
  {
    title: 'Ourganize Platform v1.1 - Smart Workflows & Collaboration',
    description: 'Introduction of digitized automated workflows, enhanced collaboration & visibility features, and intelligent project management. Includes HR module with comprehensive talent management and social platform for team connectivity.',
    image: '/assets/images/version/v1.1.png',
    badge: 'v1.1',
    date: '2024-10-15',
    to: '/blog/version/1.1',
    ui: {
      container: 'max-w-lg'
    }
  },
  {
    title: 'Ourganize Platform v1.0 - Foundation Release',
    description: 'Initial platform deployment with core PMS and CRM modules. Organizations digitize operations with data-driven insights, project tracking, customer pipeline management, and foundational user profile system.',
    image: '/assets/images/version/v1.0.png',
    badge: 'v1.0 - Foundation',
    date: '2024-09-01',
    to: '/blog/version/1.0',
    ui: {
      container: 'max-w-lg'
    }
  }
])
</script>

<template>
    <UPage class="max-w-4xl mx-auto">
      <UPageHero title="Changelog" :ui="{ container: 'pb-0 sm:pb-0 lg:pb-0 pt-24 sm:pt-24 lg:pt-24' }" />
      <UPageBody>
          <UChangelogVersions>
              <UChangelogVersion
                  v-for="(version, index) in versions"
                  :key="index"
                  v-bind="version"
                  :to="version.to"
                  />
          </UChangelogVersions>
      </UPageBody>
    </UPage>
</template>
