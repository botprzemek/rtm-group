<script setup lang="ts">
const { t } = useI18n();

const additionalLinks = ["/#test", "/#test", "/#test"] as const;
</script>

<template>
    <RTMContainer
        :class="[
            `flex items-center gap-1.5 py-4`,
            `border border-transparent border-t-neutral-600/15`,
            `flex-col justify-normal`,
            `lg:mb-6 lg:flex-row lg:justify-between`,
        ]"
    >
        <RTMTable>
            <li v-for="(link, index) in additionalLinks" :key="index">
                <RTMLink
                    :to="link"
                    :class="[
                        `text-xs text-neutral-500 hover:text-neutral-700`,
                        `transition-colors duration-400 ease-in-out`,
                        `hover:cursor-pointer`,
                    ]"
                >
                    {{ t(`components.footer.additional.${index}`) }}
                </RTMLink>
            </li>
        </RTMTable>

        <aside :class="[`mb-0 flex items-center`, `lg:mr-52`]">
            <p
                :class="[
                    `text-xs text-neutral-500 hover:text-neutral-700`,
                    `transition-colors duration-400 ease-in-out`,
                ]"
            >
                &copy; {{ new Date().getFullYear() }}
                <NuxtLinkLocale to="/" :class="[`underline`]"
                    >rtmgroup.eu</NuxtLinkLocale
                >
                - {{ t("components.footer.all-rights-reserved") }}
            </p>
        </aside>
    </RTMContainer>
</template>
