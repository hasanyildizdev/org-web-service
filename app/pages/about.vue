<script setup lang="ts">
const { contactContent } = useOurganize()

useHead({
    title: 'About Ourganize - AI-Powered Digital Transformation Platform',
    meta: [
        { name: 'description', content: 'Learn about Ourganize, the comprehensive AI-powered digital transformation platform that revolutionizes business operations through unified project management, CRM, ERP, HR, and collaboration tools.' }
    ]
})

const coreValues = computed(() => [
  {
    title: $t('Go Digital with Big Data'),
    description: $t('Turn your paper-based work into smart digital systems. We help you collect and understand your business data to make better decisions.'),
    icon: 'i-heroicons-server-stack'
  },
  {
    title: $t('Automate Your Work'),
    description: $t('Let technology handle repetitive tasks automatically. Save time, reduce mistakes, and focus on what matters most for your business.'),
    icon: 'i-heroicons-cog-6-tooth'
  },
  {
    title: $t('Work Better Together'),
    description: $t('Keep your team connected and informed. Everyone can see project progress, share updates, and collaborate easily in real-time.'),
    icon: 'i-heroicons-users'
  },
  {
    title: $t('Connect All Your Tools'),
    description: $t('Link all your business software together. No more switching between different apps - everything works as one unified system.'),
    icon: 'i-heroicons-link'
  },
  {
    title: $t('Smart Business Decisions'),
    description: $t('Get clear insights from your data. Our AI technology helps you understand trends and make informed decisions that grow your business.'),
    icon: 'i-heroicons-cpu-chip'
  }
])

const modules = computed(() => [
  {
    name: $t('Project Management'),
    description: $t('Plan, track, and complete projects easily. See progress at a glance with visual timelines.'),
    icon: 'i-heroicons-clipboard-document-list'
  },
  {
    name: $t('Customer Management'),
    description: $t('Keep track of your customers, sales, and relationships all in one place.'),
    icon: 'i-heroicons-user-group'
  },
  {
    name: $t('Business Operations'),
    description: $t('Manage inventory, finances, and daily operations from one central system.'),
    icon: 'i-heroicons-building-office'
  },
  {
    name: $t('Human Resources'),
    description: $t('Handle employee records, create CVs automatically, and track team performance.'),
    icon: 'i-heroicons-identification'
  },
  {
    name: $t('Document Management'),
    description: $t('Store, organize, and find all your business documents quickly and securely.'),
    icon: 'i-heroicons-document-duplicate'
  },
  {
    name: $t('Team Communication'),
    description: $t('Chat, share ideas, and collaborate with your team in a private workspace.'),
    icon: 'i-heroicons-chat-bubble-left-right'
  }
])

const stats = computed(() => [
  { label: $t('Business Tools'), value: '6' },
  { label: $t('Smart Features'), value: '25+' },
  { label: $t('Integrations'), value: '100+' },
  { label: $t('Years Experience'), value: '10+' }
])
</script>

<template>
  <UPage>
    <!-- Hero Section -->
    <UPageHero 
      :title="$t('About')" 
      :description="$t('Trusted by businesses worldwide to streamline operations and drive growth')" 
      :ui="{ container: 'pb-8 sm:pb-8 lg:pb-8 pt-24 sm:pt-24 lg:pt-24' }"
    >
      <template #headline>
        <UBadge variant="solid" color="primary" class="mb-4">{{ $t('Enterprise Business Platform') }}</UBadge>
      </template>
    </UPageHero>

    <UPageBody>
        <UContainer class="max-w-6xl mx-auto">         
            <!-- Company Overview -->
            <div class="mb-20">
              <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 lg:p-12 shadow-sm">
                <div class="text-center mb-8">
                  <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {{ $t('Your Complete Business Solution') }}
                  </h2>
                  <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    {{ $t('Ourganize brings all your business tools together in one simple, powerful platform') }}
                  </p>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 class="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {{ $t('Why Choose Ourganize?') }}
                    </h3>
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      {{ $t('Running a business means juggling many different tools and systems. Ourganize changes that by putting everything you need in one place - from managing projects and customers to handling finances and team communication.') }}
                    </p>
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {{ $t('We\'ve helped thousands of businesses work more efficiently, save time, and grow faster. Our platform is designed to be simple enough for anyone to use, yet powerful enough to handle complex business needs.') }}
                    </p>
                  </div>
                  <div>
                    <!-- Stats Section -->
                    <div class="grid grid-cols-2 gap-6">
                      <div v-for="stat in stats" :key="stat.label" class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div class="text-3xl font-bold text-primary mb-1">{{ stat.value }}</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">{{ stat.label }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
      
            <!-- How We Help Section -->
            <div class="mb-20">
              <div class="text-center mb-12">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {{ $t('How We Help Your Business') }}
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  {{ $t('Simple solutions for complex business challenges') }}
                </p>
              </div>
              <div class="grid gap-6 lg:gap-8">
                <div v-for="(value, index) in coreValues" :key="value.title" 
                     class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div class="flex flex-col lg:flex-row gap-6 items-start">
                    <div class="flex-shrink-0">
                      <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <UIcon :name="value.icon" class="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                        {{ value.title }}
                      </h3>
                      <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {{ value.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <!-- Business Tools Section -->
            <div class="mb-20">
              <div class="text-center mb-12">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {{ $t('Everything Your Business Needs') }}
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  {{ $t('Six powerful tools that work together seamlessly') }}
                </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="module in modules" :key="module.name" 
                     class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <UIcon :name="module.icon" class="w-6 h-6 text-primary" />
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {{ module.name }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {{ module.description }}
                  </p>
                </div>
              </div>
            </div>
      
            <!-- Trust & Reliability Section -->
            <div>
              <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 lg:p-12">
                <div class="text-center mb-12">
                  <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {{ $t('Built for Business Success') }}
                  </h2>
                  <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    {{ $t('Trusted features that help your business run smoothly') }}
                  </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <UIcon name="i-heroicons-shield-check" class="w-8 h-8 text-primary" />
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ $t('Secure & Reliable') }}</h3>
                    <p class="text-gray-600 dark:text-gray-400">{{ $t('Enterprise-grade security keeps your business data safe and protected at all times.') }}</p>
                  </div>
                  
                  <div class="text-center">
                    <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <UIcon name="i-heroicons-rocket-launch" class="w-8 h-8 text-primary" />
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ $t('Easy to Use') }}</h3>
                    <p class="text-gray-600 dark:text-gray-400">{{ $t('Simple, intuitive design means your team can start using it right away without complex training.') }}</p>
                  </div>
                  
                  <div class="text-center">
                    <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <UIcon name="i-heroicons-chart-bar-square" class="w-8 h-8 text-primary" />
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ $t('Grows With You') }}</h3>
                    <p class="text-gray-600 dark:text-gray-400">{{ $t('Whether you\'re a small team or large company, our platform scales to meet your needs.') }}</p>
                  </div>
                </div>
              </div>
            </div>
        </UContainer>
    </UPageBody>
  </UPage>
</template>
    