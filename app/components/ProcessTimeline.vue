<template>
    <section
        id="timeline"
        class="grid grid-cols-12 border-b border-neutral-600/15"
    >
        <div
            class="col-span-12 border-b border-neutral-600/15 p-4 text-[10px] font-bold tracking-[0.3em] uppercase"
        >
            03. Our Process
        </div>
        <div
            v-for="(step, i) in ['Inquiry', 'Quote', 'Execution', 'Delivery']"
            :key="i"
            class="col-span-3 border-r border-neutral-600/15 p-10 last:border-r-0"
        >
            <span class="mb-6 block text-6xl font-black opacity-10"
                >0{{ i + 1 }}</span
            >
            <h4 class="mb-4 text-lg font-bold uppercase">{{ step }}</h4>
            <p class="text-sm text-neutral-500">
                Detailed phase description goes here. Focused on quality and
                transparency.
            </p>
        </div>
    </section>
</template>
