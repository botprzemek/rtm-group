import type { RouterConfig } from "@nuxt/schema";

export default {
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        if (!to.hash || to.path != from.path) {
            return {
                top: 0,
                left: 0,
            };
        }

        const el = document.querySelector(to.hash);

        if (!el || !(el instanceof HTMLElement)) {
            return {
                top: 0,
                left: 0,
            };
        }

        return {
            top: el.offsetTop,
            left: 0,
            behavior: "smooth",
        };
    },
} satisfies RouterConfig;
