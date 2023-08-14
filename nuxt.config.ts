import { apiPlugin } from "@storyblok/vue";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:["@/assets/main.css"],
  modules:[
    [
      "@storyblok/nuxt", {
        accessToken: "rLPFqFVRX3Lc6yLNwIVOAAtt",
        bridge: true,
        devtools: true,
        apiOptions: {},
      },
    ],
  ],
})
