<template>
    <div class="flex flex-col min-h-screen">
        <AppHeader />
        <main class="flex-grow">
            <div class="container mx-auto p-8">
            <slot /> 
            </div>
        </main>
        <AppFooter />
    </div>
</template>
    