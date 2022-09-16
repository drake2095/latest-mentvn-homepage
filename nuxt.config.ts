// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: [
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/pro-solid-svg-icons',
        '@fortawesome/pro-regular-svg-icons',
        '@fortawesome/pro-light-svg-icons',
        '@fortawesome/free-brands-svg-icons'
    ]
}
})
