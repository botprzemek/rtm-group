<template>
    <section id="contact" class="grid grid-cols-12">
        <RTMSeparator :number="6" title="test" />
        <div class="col-span-6 border-r border-neutral-600/15 p-20">
            <h2
                class="mb-12 text-8xl leading-[0.85] font-black tracking-tighter uppercase"
            >
                Let's get<br />in touch
            </h2>
            <div class="space-y-10">
                <div>
                    <p
                        class="mb-2 text-[10px] font-bold text-neutral-400 uppercase"
                    >
                        Call us
                    </p>
                    <p class="text-2xl font-bold">+2 (578) 365-379</p>
                </div>
                <div>
                    <p
                        class="mb-2 text-[10px] font-bold text-neutral-400 uppercase"
                    >
                        Email
                    </p>
                    <p class="text-2xl font-bold select-text">
                        <span class="bg-black text-white">hello</span>
                        <span>@</span>
                        <span>rtmgroup</span>
                        <span>.</span>
                        <span>eu</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-span-6 bg-neutral-100 p-20">
            <form class="grid grid-cols-2 gap-10">
                <input
                    type="text"
                    placeholder="NAME"
                    class="border-b-2 border-neutral-600/15 bg-transparent p-4 text-xs transition-colors outline-none focus:border-neutral-400"
                />
                <input
                    type="email"
                    placeholder="EMAIL"
                    class="border-b-2 border-neutral-600/15 bg-transparent p-4 text-xs transition-colors outline-none focus:border-neutral-400"
                />
                <input
                    type="text"
                    placeholder="PHONE"
                    class="border-b-2 border-neutral-600/15 bg-transparent p-4 text-xs transition-colors outline-none focus:border-neutral-400"
                />
                <input
                    type="text"
                    placeholder="SUBJECT"
                    class="border-b-2 border-neutral-600/15 bg-transparent p-4 text-xs transition-colors outline-none focus:border-neutral-400"
                />
                <textarea
                    placeholder="PROJECT DESCRIPTION"
                    class="col-span-2 h-32 border-b-2 border-neutral-600/15 bg-transparent p-4 text-xs transition-colors outline-none focus:border-neutral-400"
                ></textarea>
                <button
                    class="col-span-2 bg-black py-6 font-black text-white uppercase transition-all hover:bg-neutral-800"
                >
                    Send inquiry
                </button>
            </form>
        </div>
    </section>
</template>
