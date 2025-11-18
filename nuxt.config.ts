import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2026-03-05",
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },

    modules: [
        "@nuxt/fonts",
        "@nuxt/test-utils/module",
        "@nuxtjs/i18n",
        "@nuxtjs/seo",
    ],

    vite: {
        plugins: [
            // @ts-ignore
            tailwindcss(),
        ],
    },
    css: ["./app/assets/css/main.css"],

    site: {
        url: process.env.NUXT_BASE_URL || "https://rtm-group",
        name: "RTM Group",
        indexable: false,
    },

    fonts: {
        defaults: {
            weights: [400, 600],
            preload: true,
        },
    },

    runtimeConfig: {
        public: {
            appUrl: process.env.NUXT_BASE_URL || "https://rtm-group",
        },
    },

    i18n: {
        baseUrl: process.env.NUXT_BASE_URL || "https://rtm-group",
        defaultLocale: "en",
        locales: [
            {
                code: "en",
                language: "en-US",
                name: "English",
                file: "en.json",
            },
            {
                code: "nl",
                language: "nl-NL",
                name: "Nederlands",
                file: "nl.json",
            },
            {
                code: "pl",
                language: "pl-PL",
                name: "Polski",
                file: "pl.json",
            },
        ],
    },

    app: {
        baseURL: "/",
        rootTag: "main",
        rootAttrs: {
            id: "rtm-group",
        },
        head: {
            link: [
                {
                    rel: "apple-touch-icon",
                    sizes: "57x57",
                    href: "/light/apple-icon-57x57.png",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "60x60",
                    href: "/light/apple-icon-60x60.png",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "72x72",
                    href: "/light/apple-icon-72x72.png",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "76x76",
                    href: "/light/apple-icon-76x76.png",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "114x114",
                    href: "/light/apple-icon-114x114.png",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "120x120",
                    href: "/light/apple-icon-120x120.png",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "144x144",
                    href: "/light/apple-icon-144x144.png",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "152x152",
                    href: "/light/apple-icon-152x152.png",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/light/apple-icon-180x180.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "192x192",
                    href: "/dark/android-chrome-192x192.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/dark/favicon-32x32.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "96x96",
                    href: "/dark/favicon-96x96.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/dark/favicon-16x16.png",
                },
                {
                    media: "(prefers-color-scheme: dark)",
                    rel: "apple-touch-icon",
                    sizes: "57x57",
                    href: "/dark/apple-icon-57x57.png",
                },
                {
                    media: "(prefers-color-scheme: dark)",
                    rel: "apple-touch-icon",
                    sizes: "60x60",
                    href: "/dark/apple-icon-60x60.png",
                },
                {
                    media: "(prefers-color-scheme: dark)",
                    rel: "apple-touch-icon",
                    sizes: "72x72",
                    href: "/dark/apple-icon-72x72.png",
                },
                {
                    media: "(prefers-color-scheme: dark)",
                    rel: "apple-touch-icon",
                    sizes: "76x76",
                    href: "/dark/apple-icon-76x76.png",
                },
                {
                    media: "(prefers-color-scheme: dark)",
                    rel: "apple-touch-icon",
                    sizes: "114x114",
                    href: "/dark/apple-icon-114x114.png",
                },
                {
                    media: "(prefers-color-scheme: dark)",
                    rel: "apple-touch-icon",
                    sizes: "120x120",
                    href: "/dark/apple-icon-120x120.png",
                },
                {
                    media: "(prefers-color-scheme: dark)",
                    rel: "apple-touch-icon",
                    sizes: "144x144",
                    href: "/dark/apple-icon-144x144.png",
                },
                {
                    media: "(prefers-color-scheme: dark)",
                    rel: "apple-touch-icon",
                    sizes: "152x152",
                    href: "/dark/apple-icon-152x152.png",
                },
                {
                    media: "(prefers-color-scheme: dark)",
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/dark/apple-icon-180x180.png",
                },
                {
                    media: "(prefers-color-scheme: dark)",
                    rel: "icon",
                    type: "image/png",
                    sizes: "192x192",
                    href: "/dark/android-chrome-192x192.png",
                },
                {
                    media: "(prefers-color-scheme: dark)",
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/dark/favicon-32x32.png",
                },
                {
                    media: "(prefers-color-scheme: dark)",
                    rel: "icon",
                    type: "image/png",
                    sizes: "96x96",
                    href: "/dark/favicon-96x96.png",
                },
                {
                    media: "(prefers-color-scheme: dark)",
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/dark/favicon-16x16.png",
                },
            ],
        },
    },
});
