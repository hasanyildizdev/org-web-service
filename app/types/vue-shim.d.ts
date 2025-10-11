// Vue and i18n type declarations
declare module '#app' {
  interface NuxtApp {
    $i18n: any
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: (key: string, ...args: any[]) => string
    $i18n: any
  }
}

declare module '#imports' {
  const useI18n: any
  export { useI18n }
}

export {}
