---
title: 'Components Overview'
description: 'Explore Ourganize UI components and their usage'
navigation:
  title: 'Components'
  icon: 'i-heroicons-cube'
---

# Components Overview

Ourganize provides a comprehensive set of Vue components built on top of Nuxt UI, designed for modern web applications.

## Design System

Our components follow a consistent design system with:

- **Consistent spacing** using Tailwind CSS spacing scale
- **Accessible colors** with proper contrast ratios
- **Responsive design** that works on all devices
- **Dark mode support** with automatic theme switching

## Component Categories

### Layout Components

Components for structuring your application layout.

::card-group
  ::card
  ---
  title: UPage
  to: /components/layout/page
  ---
  Main page wrapper with header, body, and sidebar slots
  ::

  ::card
  ---
  title: UPageHeader
  to: /components/layout/page-header
  ---
  Page header with title, description, and actions
  ::

  ::card
  ---
  title: UPageBody
  to: /components/layout/page-body
  ---
  Main content area with proper spacing
  ::

  ::card
  ---
  title: UPageAside
  to: /components/layout/page-aside
  ---
  Sidebar component for navigation and secondary content
  ::
::

### Form Components

Input components for forms and data entry.

::card-group
  ::card
  ---
  title: UInput
  to: /components/forms/input
  ---
  Text input with validation and styling
  ::

  ::card
  ---
  title: USelect
  to: /components/forms/select
  ---
  Dropdown select with search and multi-select
  ::

  ::card
  ---
  title: UTextarea
  to: /components/forms/textarea
  ---
  Multi-line text input with auto-resize
  ::

  ::card
  ---
  title: UButton
  to: /components/forms/button
  ---
  Interactive button with variants and states
  ::
::

### Navigation Components

Components for app navigation and menus.

::card-group
  ::card
  ---
  title: UContentNavigation
  to: /components/navigation/content-navigation
  ---
  Auto-generated navigation from content structure
  ::

  ::card
  ---
  title: UContentToc
  to: /components/navigation/content-toc
  ---
  Table of contents for long-form content
  ::

  ::card
  ---
  title: UBreadcrumb
  to: /components/navigation/breadcrumb
  ---
  Breadcrumb navigation for deep hierarchies
  ::

  ::card
  ---
  title: UPagination
  to: /components/navigation/pagination
  ---
  Pagination component for large datasets
  ::
::

### Content Components

Components for displaying and organizing content.

::card-group
  ::card
  ---
  title: ContentRenderer
  to: /components/content/content-renderer
  ---
  Render markdown content with custom components
  ::

  ::card
  ---
  title: UCard
  to: /components/content/card
  ---
  Flexible card component for content display
  ::

  ::card
  ---
  title: UAlert  
  to: /components/content/alert
  ---
  Alert messages with different severity levels
  ::

  ::card
  ---
  title: UModal
  to: /components/content/modal
  ---
  Modal dialog for overlays and forms
  ::
::

## Basic Usage

### Importing Components

All components are auto-imported in Nuxt, so you can use them directly:

```vue
<template>
  <UPage>
    <UPageHeader
      title="My Page"
      description="A sample page with components"
    />
    
    <UPageBody>
      <UCard>
        <p>Card content goes here</p>
      </UCard>
    </UPageBody>
  </UPage>
</template>
```

### Component Props

Most components accept common props for styling and behavior:

```vue
<template>
  <UButton
    variant="primary"
    size="lg"
    :loading="isSubmitting"
    @click="handleClick"
  >
    Submit Form
  </UButton>
</template>
```

### Styling with Classes

You can customize components using Tailwind CSS classes:

```vue
<template>
  <UCard class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
    <p class="text-gray-700 dark:text-gray-300">
      Custom styled content
    </p>
  </UCard>
</template>
```

## Theming

### Color Variants

Components support consistent color variants:

- `primary` - Main brand color
- `secondary` - Secondary brand color  
- `success` - Green for success states
- `warning` - Yellow for warning states
- `error` - Red for error states
- `gray` - Neutral gray color

### Size Variants

Most components offer multiple sizes:

- `xs` - Extra small
- `sm` - Small  
- `md` - Medium (default)
- `lg` - Large
- `xl` - Extra large

### Dark Mode

All components automatically support dark mode:

```vue
<template>
  <UCard class="bg-white dark:bg-gray-900">
    <p class="text-gray-900 dark:text-white">
      This text adapts to the theme
    </p>
  </UCard>
</template>
```

## Accessibility

Our components are built with accessibility in mind:

- **Keyboard navigation** support
- **Screen reader** compatibility  
- **Focus management** for interactive elements
- **ARIA attributes** for semantic meaning
- **Color contrast** meeting WCAG guidelines

## Custom Components

You can create custom components that integrate with our design system:

```vue
<script setup lang="ts">
interface Props {
  title: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})
</script>

<template>
  <div 
    class="custom-component"
    :class="[
      `variant-${variant}`,
      `size-${size}`
    ]"
  >
    <h3>{{ title }}</h3>
    <slot />
  </div>
</template>

<style scoped>
.custom-component {
  @apply rounded-lg border p-4;
}

.variant-primary {
  @apply border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20;
}

.size-lg {
  @apply p-6 text-lg;
}
</style>
```

## Examples

### Basic Page Layout

```vue
<template>
  <UPage>
    <UPageHeader
      title="Dashboard"
      description="Welcome to your dashboard"
    >
      <template #actions>
        <UButton variant="primary">
          New Project
        </UButton>
      </template>
    </UPageHeader>

    <UPageBody>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <UCard v-for="project in projects" :key="project.id">
          <h3 class="font-semibold">{{ project.name }}</h3>
          <p class="text-gray-600 dark:text-gray-400">
            {{ project.description }}
          </p>
        </UCard>
      </div>
    </UPageBody>
  </UPage>
</template>
```

### Form Example

```vue
<template>
  <UCard>
    <form @submit.prevent="handleSubmit">
      <div class="space-y-4">
        <UInput
          v-model="form.name"
          label="Project Name"
          placeholder="Enter project name"
          required
        />
        
        <UTextarea
          v-model="form.description"
          label="Description"
          placeholder="Describe your project"
          rows="3"
        />
        
        <USelect
          v-model="form.category"
          label="Category"
          :options="categoryOptions"
          placeholder="Select a category"
        />
        
        <div class="flex justify-end space-x-3">
          <UButton variant="secondary" @click="handleCancel">
            Cancel
          </UButton>
          <UButton 
            type="submit" 
            variant="primary"
            :loading="isSubmitting"
          >
            Create Project
          </UButton>
        </div>
      </div>
    </form>
  </UCard>
</template>
```

---

Ready to dive deeper? Explore individual [component documentation](/docs/components/layout/page) →
