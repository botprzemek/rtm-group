<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
    <aside class="grid w-fit grid-flow-col gap-3">
        <NuxtLink
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
        >
            {{ locale.code.toUpperCase() }}
        </NuxtLink>
    </aside>
</template>
