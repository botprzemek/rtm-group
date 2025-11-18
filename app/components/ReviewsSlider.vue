<template>
    <section
        id="reviews"
        class="grid grid-cols-12 border-b border-neutral-600/15 bg-black text-white"
    >
        <div
            class="col-span-12 border-b border-white/20 p-4 text-[10px] font-bold tracking-[0.3em] uppercase"
        >
            04. Client Satisfaction
        </div>
        <div
            v-for="n in 3"
            :key="n"
            class="col-span-4 border-r border-white/20 p-12 last:border-r-0"
        >
            <div class="mb-8 flex items-start justify-between">
                <span
                    class="text-xs font-bold tracking-tighter text-white uppercase"
                    >Highly Recommended!</span
                >
                <div
                    class="flex h-8 w-8 items-center justify-center bg-white/10"
                >
                    G
                </div>
            </div>
            <p class="mb-10 text-lg leading-relaxed text-neutral-300">
                The RTM team did an outstanding job plastering and painting our
                home - every surface looks flawless.
            </p>
            <div class="flex items-center gap-4">
                <div class="h-12 w-12 bg-neutral-800 grayscale"></div>
                <div>
                    <p class="text-sm font-bold uppercase">Marieke Jansen</p>
                    <p class="text-[10px] text-neutral-500">21/08/2025</p>
                </div>
            </div>
        </div>
    </section>
</template>
