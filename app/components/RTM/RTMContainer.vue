<script setup lang="ts">
const { name } = defineProps<{ name?: string }>();
</script>

<template>
    <section
        :id="name"
        class="bg-neutral-3 grid min-h-[80vh] grid-cols-3 border-b border-neutral-600/15 bg-top"
    >
        <slot />
    </section>
</template>
