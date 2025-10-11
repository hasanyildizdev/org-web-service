<script setup lang="ts">
const { t } = useI18n()

useHead({
    title: 'Home',
    meta: [
        { name: 'description', content: 'Welcome to our amazing project!' }
    ]
})

const cta_links = computed(() => [
  {
    label: t('Start Free Trial'),
    color: 'neutral' as const,
    to: '/auth/login'
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
        to: '/auth/login'
    },
    {
        label: t('Get Started'),
        color: 'neutral' as const,
        variant: 'subtle' as const,
        trailingIcon: 'i-lucide-arrow-right',
        to: '/auth/login'
    }
])

const what_is_ourganize = ref([
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
</script>
<template>
    <UPage>

        <!-- Section 1: Hero / Intro -->
        <UPageHero
          :headline="$t('In Sync')"
          :title="$t('Organize with AI')"
          :description="$t('Streamline your workflows, connect scattered systems, and automate routine tasks with AI so your teams can focus on what truly matters.')"
          orientation="horizontal"
          :links="hero_links">
          <img
              src="/assets/images/hero.jpg"
              alt="App screenshot"
              class="rounded-lg shadow-2xl ring ring-default"
          />
        </UPageHero>

        <!-- Section 2: What is ourganize -->
        <UPageSection>
            <div class="text-center">
                <h2 class="text-sm font-semibold text-secondary dark:text-accent uppercase tracking-wide mb-3">
                    {{ $t('What is Ourganize?') }}
                </h2>
                <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-6">
                    {{ $t('Your Complete Digital Organization Platform') }}
                </h3>
                <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
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

        <!-- Section 8: CTA -->
        <UPageSection :ui="{ container: 'px-0' }"> 
            <UPageCTA
                :title="$t('Transform Your Organization Today')"
                :description="$t('Join thousands of teams who are already digitizing their workflows and making data-driven decisions.')"
                variant="soft"
                :links="cta_links"
                class="rounded-none sm:rounded-xl"
            />
        </UPageSection>
    </UPage>
</template>
    