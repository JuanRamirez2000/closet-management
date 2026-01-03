<template>
  <div>
    <UPageHero
      title="Closet Management"
      description="A place to store and organize all your clothes."
      :links="[
        {
          label: 'Get started',
          to: 'http://localhost:3000/',
          target: '_blank',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl',
        },
      ]"
    />

    <UPageSection
      id="features"
      title="Everything you need to keep a clean closet"
      description="Start with a solid foundation. This template includes all the essentials for building production-ready applications with Nuxt UI's powerful component system."
      :features="[
        {
          icon: 'i-lucide-rocket',
          title: 'Production-ready from day one',
          description:
            'Pre-configured with TypeScript, ESLint, Tailwind CSS, and all the best practices. Focus on building features, not setting up tooling.',
        },
        {
          icon: 'i-lucide-palette',
          title: 'Beautiful by default',
          description:
            'Leveraging Nuxt UI\'s design system with automatic dark mode, consistent spacing, and polished components that look great out of the box.',
        },
        {
          icon: 'i-lucide-zap',
          title: 'Lightning fast',
          description:
            'Optimized for performance with SSR/SSG support, automatic code splitting, and edge-ready deployment. Your users will love the speed.',
        },
      ]"
    />

    <UPageSection>
      <UPageCTA
        title="Ready to build your next Nuxt app?"
        description="Join thousands of developers building with Nuxt and Nuxt UI. Get this template and start shipping today."
        variant="subtle"
        :links="[
          {
            label: 'Start building',
            to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
            target: '_blank',
            trailingIcon: 'i-lucide-arrow-right',
            color: 'neutral',
          },
        ]"
      />
    </UPageSection>
  </div>
</template>
