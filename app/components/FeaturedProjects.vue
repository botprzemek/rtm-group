<script setup lang="ts"></script>

<template>
    <section
        id="projects"
        class="grid grid-cols-12 border-b border-neutral-600/15"
    >
        <div
            class="col-span-12 border-b border-neutral-600/15 p-4 text-[10px] font-bold tracking-[0.3em] uppercase"
        >
            02. Featured Projects
        </div>
        <div
            v-for="n in 3"
            :key="n"
            class="group relative col-span-4 aspect-square overflow-hidden border-r border-neutral-600/15 bg-neutral-200 last:border-r-0"
        >
            <div
                class="absolute inset-0 z-10 flex flex-col justify-end bg-[url(https://i.pinimg.com/736x/76/51/32/765132d7040b6db5e2843e0cc0c510e7.jpg)] p-10 text-white opacity-0 transition-all duration-500 group-hover:bg-black/80 group-hover:opacity-100"
            >
                <span class="mb-2 text-xs tracking-widest uppercase"
                    >Renovation</span
                >
                <h3 class="text-3xl font-bold uppercase">Modern Office Loft</h3>
            </div>
            <div
                class="h-full w-full bg-neutral-300 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            ></div>
        </div>
    </section>
</template>
