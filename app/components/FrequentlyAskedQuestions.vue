<script setup lang="ts">
const faqs = [
    {
        question: "How long will my project take?",
        answer: "Usually 4-8 weeks depending on scope.",
    },
    {
        question: "Do you provide a warranty?",
        answer: "Yes, 24 months for all construction works.",
    },
    {
        question: "Is the quote free?",
        answer: "Yes, we provide a detailed estimate after site visit.",
    },
    {
        question: "Materials included?",
        answer: "We can provide materials or work with yours.",
    },
];
</script>

<template>
    <section id="faq" class="grid grid-cols-12 border-b border-neutral-600/15">
        <div
            class="col-span-12 border-b border-neutral-600/15 p-4 text-[10px] font-bold tracking-[0.3em] uppercase"
        >
            05. Information
        </div>
        <div class="col-span-4 border-r border-neutral-600/15 p-20">
            <h2
                class="text-6xl leading-none font-black tracking-tighter uppercase"
            >
                Frequently<br />Asked<br />Questions
            </h2>
        </div>
        <div class="col-span-8 grid grid-cols-2">
            <div
                v-for="(faq, i) in faqs"
                :key="i"
                class="group cursor-pointer border-r border-b border-neutral-600/15 p-10 transition-all last:border-r-0 hover:bg-black hover:text-white"
            >
                <div class="flex items-center justify-between">
                    <h5 class="text-sm font-bold tracking-widest uppercase">
                        {{ faq.question }}
                    </h5>
                    <span class="text-xs">↓</span>
                </div>
                <p
                    class="mt-6 text-sm opacity-0 transition-opacity group-hover:opacity-60"
                >
                    {{ faq.answer }}
                </p>
            </div>
        </div>
    </section>
</template>
