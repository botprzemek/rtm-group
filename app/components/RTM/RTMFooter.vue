<script setup lang="ts">
const { t } = useI18n();

const sectionLinks = [
    ["/#test", "/#test", "/#test"],
    ["/#test", "/#test", "/#test"],
    ["/#test", "/#test", "/#test"],
] as const;
</script>

<template>
    <footer
        :class="[
            `flex flex-col`,
            `border border-transparent border-t-neutral-600/15`,
        ]"
    >
        <section
            :class="[
                `mx-12 grid grid-cols-1 grid-rows-[1fr_auto] items-start justify-center gap-20 p-10`,
                `border border-transparent border-x-neutral-600/15`,
                `md:mx-52 md:gap-0`,
                `lg:grid-cols-[1fr_auto] lg:grid-rows-[1fr]`,
                `xl:grid-cols-[1fr_auto_1fr]`,
            ]"
        >
            <NuxtLinkLocale
                to="/#test"
                :class="[
                    `flex justify-self-end`,
                    `md:hidden`,
                    `lg:flex lg:justify-self-start`,
                ]"
            >
                <RTMLogoExtended :class="[`h-auto w-32`, `lg:w-36`]" />
            </NuxtLinkLocale>

            <ul
                :class="[
                    `grid grid-flow-row gap-4 justify-self-start`,
                    `md:grid-flow-col md:gap-8 md:justify-self-center`,
                    `lg: justify-self-end`,
                ]"
            >
                <li v-for="(section, i) in sectionLinks" :key="i">
                    <h6 :class="[`font-bold uppercase`]">
                        {{ t(`components.footer.sections.${i}.title`) }}
                    </h6>

                    <ul :class="[`grid grid-flow-row`]">
                        <li v-for="(link, j) in section" :key="i">
                            <NuxtLinkLocale
                                :to="link"
                                :class="[
                                    `text-xs text-neutral-500 hover:text-neutral-700`,
                                    `transition-colors duration-400 ease-in-out`,
                                    `hover:cursor-pointer`,
                                ]"
                            >
                                {{
                                    t(
                                        `components.footer.sections.${i}.links.${j}`,
                                    )
                                }}
                            </NuxtLinkLocale>
                        </li>
                    </ul>
                </li>
            </ul>

            <NuxtLinkLocale
                to="/contact"
                :class="[`hidden text-right`, `ml-20 xl:block`]"
            >
                <h6 :class="[`font-bold uppercase`]">
                    {{ t("components.footer.get-in-touch.title") }}
                </h6>

                <p
                    :class="[
                        `text-xs text-neutral-500 hover:text-neutral-700`,
                        `transition-colors duration-400 ease-in-out`,
                    ]"
                >
                    {{ t("components.footer.get-in-touch.description") }}
                </p>
            </NuxtLinkLocale>
        </section>
        <RTMFooterAdditional />
    </footer>
</template>
