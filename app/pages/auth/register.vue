<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'
import AppLogo from '~/components/AppLogo.vue'

definePageMeta({
    layout: 'auth',
    title: 'Sign Up'
})

const toast = useToast()

const fields: AuthFormField[] = [{
  name: 'firstName',
  type: 'text',
  label: 'First Name',
  placeholder: 'Enter your first name',
  required: true
}, {
  name: 'lastName',
  type: 'text',
  label: 'Last Name',
  placeholder: 'Enter your last name',
  required: true
}, {
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Create a password',
  required: true
}, {
  name: 'confirmPassword',
  label: 'Confirm Password',
  type: 'password',
  placeholder: 'Confirm your password',
  required: true
}, {
  name: 'acceptTerms',
  label: 'I agree to the Terms of Service and Privacy Policy',
  type: 'checkbox',
  required: true
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Sign up with Google' })
  }
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => {
    toast.add({ title: 'GitHub', description: 'Sign up with GitHub' })
  }
}]

const schema = z.object({
  firstName: z.string({ required_error: 'First name is required' })
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z.string({ required_error: 'Last name is required' })
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  email: z.string({ required_error: 'Email is required' }).email('Invalid email'),
  password: z.string({ required_error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  confirmPassword: z.string({ required_error: 'Please confirm your password' }),
  acceptTerms: z.boolean({ required_error: 'You must accept the terms and conditions' })
    .refine(val => val === true, 'You must accept the terms and conditions')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Registration submitted', payload)
  toast.add({
    title: 'Account Created!',
    description: 'Welcome to Ourganize! Please check your email to verify your account.',
    color: 'success'
  })
}
</script>

<template>
    <UPage>
        <UPageBody>
            <UContainer>
                <div class="flex flex-col items-center justify-center gap-4 p-4">
                    <UPageCard class="w-full max-w-md">
                        <AppLogo size="xl" class="mt-4 mb-2"/>
                        <UAuthForm
                            :schema="schema"
                            :fields="fields"
                            :providers="providers"
                            title="Create your account"
                            @submit="onSubmit">
                            <template #description>
                                Already have an account? <ULink to="/auth/login" class="text-primary font-medium">Sign in</ULink>.
                            </template>
                            <template #validation>
                                <UAlert color="error" icon="i-lucide-info" title="Error creating account" />
                            </template>
                            <template #footer>
                                <div class="text-sm text-center text-gray-600 dark:text-gray-400">
                                    By creating an account, you agree to our 
                                    <ULink to="/terms-of-service" class="text-primary font-medium">Terms of Service</ULink>
                                    and 
                                    <ULink to="/privacy-policy" class="text-primary font-medium">Privacy Policy</ULink>.
                                </div>
                            </template>
                        </UAuthForm>
                    </UPageCard>
                </div>
            </UContainer>
        </UPageBody>
    </UPage>
</template>