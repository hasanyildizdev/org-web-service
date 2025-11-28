<script setup lang="ts">
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Welcome to our amazing project!' }
  ]
})
const config = useRuntimeConfig()

const { t } = useI18n()

const cta_links = computed(() => [
  {
    label: t('Start Free Trial'),
    color: 'neutral' as const,
    to: config.public.dashboardUrl + '/auth/login'
  },
  {
    label: t('Schedule Demo'),
    color: 'neutral' as const,
    variant: 'subtle' as const,
    trailingIcon: 'i-lucide-arrow-right',
    to: '/contact'
  }
])

const hero_links = computed(() => [
    {
        label: t('Start Organizing'),
        color: 'neutral' as const,
        to: config.public.dashboardUrl + '/auth/login'
    },
    {
        label: t('Get Started'),
        color: 'neutral' as const,
        variant: 'subtle' as const,
        trailingIcon: 'i-lucide-arrow-right',
        to: config.public.dashboardUrl + '/auth/login'
    }
])

const what_is_ourganize = computed(() => [
  {
    title: t('Digitize Everything'),
    description: t('Transform your organization\'s data into actionable insights with advanced big data management and processing.'),
    icon: 'material-symbols:graph-2',
    to: '/docs/getting-started/integrations/icons'
  },
  {
    title: t('Automate Workflows'),
    description: t('Streamline repetitive tasks with intelligent automation that saves time and reduces errors.'),
    icon: 'mdi:robot',
    to: '/docs/getting-started/integrations/automate-workflows'
  },
  {
    title: t('Collaborate Seamlessly'),
    description: t('Enable real-time collaboration with enhanced visibility across your entire organization.'),
    icon: 'mdi:account-group',
    to: '/docs/getting-started/integrations/color-mode'
  },
  {
    title: t('Integrate Systems'),
    description: t('Connect all your tools and systems into one cohesive ecosystem for maximum efficiency.'),
    icon: 'mdi:link',
    to: '/docs/getting-started/integrations/color-mode'
  },
  {
    title: t('AI-Driven Decisions'),
    description: t('Leverage machine learning and AI to make smarter, data-driven decisions that drive growth.'),
    icon: 'i-lucide-brain',
    to: '/docs/getting-started/integrations/color-mode'
  },
  {
    title: t('Enhanced Visibility'),
    description: t('Get complete transparency across projects, teams, and workflows with powerful analytics.'),
    icon: 'i-lucide-chart-bar',
    to: '/docs/getting-started/integrations/color-mode'
  }
])

const user = {
  id: 1,
  name: "Jane Doe",
  photo: "https://randomuser.me/api/portraits/men/3.jpg",
  title: "Full Stack Developer",
  summary:
    "Passionate developer with 5+ years building scalable web applications.",
  education: "MSc Computer Science, University X",
  skills: ["JavaScript", "Vue.js", "Laravel", "GraphQL", "Tailwind CSS"],
  experience: "5 years at TechCorp as Senior Developer",
  email: "jane.doe@example.com",
};
</script>
<template>
    <UPage class="max-w-6xl mx-auto">
      <UPageBody>  
          <!-- Section 1: Hero / Intro -->
          <UPageHero
            :headline="$t('In Sync')"
            :title="$t('Organize with AI')"
            :description="$t('Streamline your workflows, connect scattered systems, and automate routine tasks with AI so your teams can focus on what truly matters.')"
            :links="hero_links"
            :ui="{ headline: 'text-primary dark:text-accent', container: 'pb-0 sm:pb-0 md:pb-0 lg:pb-0' }"
            orientation="horizontal">
            <UColorModeImage
                light="/assets/images/hero.jpg"
                dark="/assets/images/hero_dark.jpg"
                alt="App screenshot"
                class="rounded-lg shadow-2xl ring ring-default"
            />
          </UPageHero>
  
          <!-- Section 2: What is ourganize -->
          <UPageSection>
              <div class="text-start">
                  <h2 class="text-sm font-semibold text-secondary dark:text-accent uppercase tracking-wide mb-3">
                      {{ $t('What is Ourganize?') }}
                  </h2>
                  <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-6">
                      {{ $t('Your Complete Digital Organization Platform') }}
                  </h3>
                  <p class="text-lg text-gray-700 dark:text-gray-300">
                      {{ $t('Ourganize transforms how teams work by combining powerful automation, intelligent data management, and seamless collaboration into one unified platform. Say goodbye to scattered tools and hello to organized success.') }}
                  </p>
              </div>
              <UPageGrid>
                  <UPageCard
                      v-for="(card, index) in what_is_ourganize"
                      :key="index"
                      v-bind="card"
                      class="[&_[class*='i-']]:text-primary [&_[class*='i-']]:dark:text-accent [&_[class*='i-']]:w-8 [&_[class*='i-']]:h-8"
                      />
              </UPageGrid>
          </UPageSection>

          <UPageSection>
            <div class="text-start">
                <h2 class="text-sm font-semibold text-secondary dark:text-accent uppercase tracking-wide mb-3">
                    {{ $t('Auto CV Generator') }}
                </h2>
                <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-6">
                    {{ $t('Generate your CV in seconds') }}
                </h3>
            </div>
            <div class="py-16 px-6 md:px-12 lg:px-24">
              <!-- CV Card -->
              <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                  <!-- Header: User Image & Name -->
                  <div class="flex items-center px-6 py-4">
                      <img
                          class="h-16 w-16 rounded-full object-cover border-2 border-indigo-500"
                          :src="user.photo"
                          :alt="user.name"
                      />
                      <div class="ml-4">
                          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                          {{ user.name }}
                          </h2>
                          <p class="text-indigo-600 font-medium text-sm">{{ user.title }}</p>
                      </div>
                  </div>
  
                  <!-- Summary -->
                  <div class="px-6 py-2 text-gray-700 dark:text-gray-300">
                      <p class="text-sm italic mb-4">
                          "{{ user.summary }}"
                      </p>
                  </div>
  
                  <!-- CV Info Grid -->
                  <div class="px-6 py-4 border-t border-gray-200 dark:border-gray-700 grid grid-cols-2 gap-4 text-gray-800 dark:text-gray-200">
                      <div>
                          <h3 class="text-xs font-semibold uppercase text-indigo-600 mb-1">
                          Education
                          </h3>
                          <p class="text-sm">{{ user.education }}</p>
                      </div>
                      <div>
                          <h3 class="text-xs font-semibold uppercase text-indigo-600 mb-1">
                          Skills
                          </h3>
                          <p class="text-sm">{{ user.skills.join(', ') }}</p>
                      </div>
                      <div>
                          <h3 class="text-xs font-semibold uppercase text-indigo-600 mb-1">
                          Experience
                          </h3>
                          <p class="text-sm">{{ user.experience }}</p>
                      </div>
                      <div>
                          <h3 class="text-xs font-semibold uppercase text-indigo-600 mb-1">
                          Contact
                          </h3>
                          <p class="text-sm text-indigo-700 underline cursor-pointer">
                              {{ user.email }}
                          </p>
                      </div>
                  </div>
  
                  <!-- Action Buttons -->
                  <div class="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-between gap-3">
                      <p class="text-indigo-600 font-semibold hover:underline">View Full Profile</p>
                      <p class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md text-sm">Download CV</p>
                  </div>
              </div>
            </div>
          </UPageSection>

          <!-- Section 8: CTA -->
          <UPageCTA
              :title="$t('Transform Your Organization Today')"
              :description="$t('Join thousands of teams who are already digitizing their workflows and making data-driven decisions.')"
              variant="soft"
              :links="cta_links"
              class="rounded-none sm:rounded-xl"
              :ui="{ container: 'py-0' }"
          />
      </UPageBody>
    </UPage>
</template>
    