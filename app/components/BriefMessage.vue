<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
    <section class="grid grid-cols-12 border-b border-neutral-600/15">
        <div
            class="col-span-12 border-b border-neutral-600/15 p-4 text-[10px] font-bold tracking-[0.3em] uppercase"
        >
            01. Brief & Mission
            {{ t("test") }}
        </div>
        <div
            class="col-span-4 border-r border-neutral-600/15 p-20 text-3xl leading-snug italic"
        >
            "We believe your workspace should be a reflection of your dreams,
            not limitations."
            {{ t("test") }}
        </div>
        <div class="col-span-8 flex flex-col justify-center p-20">
            <p class="text-2xl text-neutral-600">
                Whether it's a complete remodel or a fresh update, our mission
                is to turn your vision into reality - on time, on budget, and
                beyond expectations.
                {{ t("test") }}
            </p>
        </div>
    </section>
</template>
