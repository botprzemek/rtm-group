<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
    <section
        id="hero"
        class="bg-neutral-3 00/50 grid min-h-[80vh] grid-cols-12 border-b border-neutral-600/15 bg-top"
    >
        <div
            class="col-span-8 flex flex-col justify-center border-r border-neutral-600/15 p-20"
        >
            <i18n-t
                keypath="pages.index.sections.hero.title"
                tag="h1"
                class="text-6xl leading-none font-bold uppercase"
            >
                <template #br><br /></template>
            </i18n-t>
            <p class="mt-12 max-w-xl text-lg text-neutral-500">
                Professional construction and renovation services for modern
                spaces. We turn architectural visions into solid reality.
            </p>
        </div>
    </section>
</template>
