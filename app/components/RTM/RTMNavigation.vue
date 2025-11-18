<script setup lang="ts">
const { t } = useI18n();

// Konfiguracja nawigacji
const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Timeline", href: "#timeline" },
    { name: "FAQ", href: "#faq" },
    { name: "Reviews", href: "#reviews" },
];

const sectionLinks = [
    ["/#test", "/#test", "/#test"],
    ["/#test", "/#test", "/#test"],
    ["/#test", "/#test", "/#test"],
] as const;

const additionalLinks = ["/#test", "/#test", "/#test"] as const;
</script>

<template>
    <nav
        class="fixed top-0 z-50 mb-12 hidden h-20 w-full grid-cols-[1fr_auto_1fr] items-center border-b border-neutral-600/15 bg-white px-10 sm:grid"
    >
        <NuxtLinkLocale to="/#">
            <RTMLogo class="w-28" />
        </NuxtLinkLocale>

        <div
            class="grid h-full grid-cols-[auto_1fr] items-center justify-center border-x border-neutral-600/15 px-12 lg:grid-cols-[auto_1fr_auto]"
        >
            <ul class="flex gap-8 text-xs font-bold uppercase">
                <li
                    v-for="link in navLinks"
                    :key="link.name"
                    :class="[`hover:cursor-pointer`]"
                >
                    <RTMLink
                        :to="link.href"
                        :class="[
                            `text-black transition-colors duration-400 ease-in-out hover:cursor-pointer hover:text-neutral-700`,
                        ]"
                    >
                        {{ link.name }}d
                    </RTMLink>
                </li>
            </ul>
        </div>

        <div class="flex justify-end">
            <button
                class="bg-black px-8 py-3 text-xs font-bold text-white uppercase transition-all hover:cursor-pointer hover:bg-neutral-800"
            >
                Get in touch
            </button>
        </div>
    </nav>
</template>
