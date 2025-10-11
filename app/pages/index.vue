<script setup lang="ts">
const { t } = useI18n()

useHead({
    title: 'Home',
    meta: [
        { name: 'description', content: 'Welcome to our amazing project!' }
    ]
})
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

const marquee = [
    {
        icon: 'i-simple-icons-github',
        link: 'https://github.com/ourganize',
    },
    {
        icon: 'i-simple-icons-discord',
        link: 'https://discord.gg/ourganize',
    },
    {
        icon: 'i-simple-icons-x',
        link: 'https://x.com/ourganize',
    },
    {
        icon: 'i-simple-icons-instagram',
        link: 'https://instagram.com/ourganize',
    },
    {
        icon: 'i-simple-icons-linkedin',
        link: 'https://linkedin.com/company/ourganize',
    },
    {
        icon: 'i-simple-icons-facebook',
        link: 'https://facebook.com/ourganize',
    },
];

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
</script>
<template>
    <div>
        <!-- Section 1: Hero / Intro -->
        <section id="home" class="py-20 px-6 md:px-12 lg:px-24">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-black dark:text-white">{{ $t('Organize with AI') }}</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-2xl lg:text-3xl dark:text-gray-400">{{ $t('Less chaos. More control.') }}</p>
                    <ULink to="/auth/login" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-secondary hover:text-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        {{ $t('Start Organizing') }}
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </ULink>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img :src="`/assets/images/hero.jpg`" class="mx-auto rounded-lg shadow-lg border border-white/20" alt="mockup">
                </div>                
            </div>
        </section>

        <!-- Section 2: What is ourganize -->
        <section class="pb-6 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950">
            <div class="max-w-7xl mx-auto">
                <!-- Section Header -->
                <div class="text-center mb-16">
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

                <!-- Features Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Feature 1: Digitize Everything -->
                    <div class="group bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-2xl border border-primary/10 dark:border-accent/20 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 dark:hover:border-accent/40">
                        <div class="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-accent/20 dark:to-accent/10 text-primary dark:text-accent mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                            <UIcon name="i-heroicons-server-stack" class="w-7 h-7" />
                        </div>
                        <h4 class="text-xl font-bold text-primary dark:text-white mb-3">
                            {{ $t('Digitize Everything') }}
                        </h4>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {{ $t("Transform your organization's data into actionable insights with advanced big data management and processing.") }}
                        </p>
                    </div>

                    <!-- Feature 2: Automate Workflows -->
                    <div class="group bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-2xl border border-secondary/10 dark:border-accent/20 transition-all duration-300 hover:-translate-y-2 hover:border-secondary/30 dark:hover:border-accent/40">
                        <div class="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-secondary/10 to-primary/10 dark:from-accent/20 dark:to-accent/10 text-secondary dark:text-accent mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                            <UIcon name="i-heroicons-cog-6-tooth" class="w-7 h-7" />
                        </div>
                        <h4 class="text-xl font-bold text-primary dark:text-white mb-3">
                            {{ $t('Automate Workflows') }}
                        </h4>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {{ $t('Streamline repetitive tasks with intelligent automation that saves time and reduces errors.') }}
                        </p>
                    </div>

                    <!-- Feature 3: Collaborate Seamlessly -->
                    <div class="group bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-2xl border border-accent/10 dark:border-accent/20 transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 dark:hover:border-accent/40">
                        <div class="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 dark:from-accent/20 dark:to-accent/10 text-accent dark:text-accent mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                            <UIcon name="i-heroicons-user-group" class="w-7 h-7" />
                        </div>
                        <h4 class="text-xl font-bold text-primary dark:text-white mb-3">
                            {{ $t('Collaborate Seamlessly') }}
                        </h4>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {{ $t('Enable real-time collaboration with enhanced visibility across your entire organization.') }}
                        </p>
                    </div>

                    <!-- Feature 4: Integrate Systems -->
                    <div class="group bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-2xl border border-primary/10 dark:border-accent/20 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 dark:hover:border-accent/40">
                        <div class="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 dark:from-accent/20 dark:to-accent/10 text-primary dark:text-accent mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                            <UIcon name="i-heroicons-link" class="w-7 h-7" />
                        </div>
                        <h4 class="text-xl font-bold text-primary dark:text-white mb-3">
                            {{ $t('Integrate Systems') }}
                        </h4>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {{ $t('Connect all your tools and systems into one cohesive ecosystem for maximum efficiency.') }}
                        </p>
                    </div>

                    <!-- Feature 5: AI-Driven Decisions -->
                    <div class="group bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-2xl border border-secondary/10 dark:border-accent/20 transition-all duration-300 hover:-translate-y-2 hover:border-secondary/30 dark:hover:border-accent/40">
                        <div class="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 dark:from-accent/20 dark:to-accent/10 text-secondary dark:text-accent mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                            <UIcon name="i-heroicons-sparkles" class="w-7 h-7" />
                        </div>
                        <h4 class="text-xl font-bold text-primary dark:text-white mb-3">
                            {{ $t('AI-Driven Decisions') }}
                        </h4>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {{ $t('Leverage machine learning and AI to make smarter, data-driven decisions that drive growth.') }}
                        </p>
                    </div>

                    <!-- Feature 6: Enhanced Visibility -->
                    <div class="group bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-2xl border border-accent/10 dark:border-accent/20 transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 dark:hover:border-accent/40">
                        <div class="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-accent/10 to-secondary/10 dark:from-accent/20 dark:to-accent/10 text-accent dark:text-accent mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                            <UIcon name="i-heroicons-chart-bar" class="w-7 h-7" />
                        </div>
                        <h4 class="text-xl font-bold text-primary dark:text-white mb-3">
                            {{ $t('Enhanced Visibility') }}
                        </h4>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {{ $t('Get complete transparency across projects, teams, and workflows with powerful analytics.') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

<!-- 
        <section class="py-16 px-6 md:px-12 lg:px-24">
            <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 dark:bg-gray-900 dark:border-gray-700">
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
                <div class="px-6 py-2 text-gray-700 dark:text-gray-300">
                    <p class="text-sm italic mb-4">
                        "{{ user.summary }}"
                    </p>
                </div>
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
                <div class="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-between gap-3">
                    <p class="text-indigo-600 font-semibold hover:underline">View Full Profile</p>
                    <p class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md text-sm">Download CV</p>
                </div>
            </div>
        </section> -->

        <!-- Section 8: CTA -->
        <section class="py-20 px-6 md:px-12 lg:px-24">
            <div class="max-w-4xl mx-auto text-center">
                <UPageCTA
                    :title="$t('Transform Your Organization Today')"
                    :description="$t('Join thousands of teams who are already digitizing their workflows and making data-driven decisions.')"
                    variant="soft"
                    :links="cta_links"
                />
            </div>
        </section>
    </div>
</template>
    