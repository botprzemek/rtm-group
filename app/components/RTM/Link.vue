<script setup lang="ts">
const { to } = defineProps<{ to: string }>();
</script>

<template>
    <NuxtLinkLocale
        :to="to"
        :class="[
            `flex justify-self-end`,
            `md:hidden`,
            `lg:flex lg:justify-self-start`,
        ]"
    >
        <slot />
    </NuxtLinkLocale>
</template>
