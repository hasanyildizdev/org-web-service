<template>
    <div class="flex flex-col min-h-screen">
        <AppHeader />
        <UMain>
        <div class="flex-grow">
            <div class="container max-w-screen-xl mx-auto p-8">
                <slot /> 
            </div>
        </div>
        </UMain>
        <AppFooter />
    </div>
</template>
    