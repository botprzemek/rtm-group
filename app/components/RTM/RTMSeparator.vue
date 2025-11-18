<template>
    <aside
        :class="[
            `col-span-12 p-4 text-xs font-bold uppercase`,
            `border-b border-neutral-600/15`,
            styles,
        ]"
    >
        <span>{{ number.toString().padStart(2, "0") }}. </span>
        <span>{{ t(title) }}</span>
    </aside>
</template>

<script setup lang="ts">
const { t } = useI18n();

defineProps<{
    number: number;
    title: string;
    styles?: string;
}>();
</script>
