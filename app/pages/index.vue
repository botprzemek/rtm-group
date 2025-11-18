<template>
    <RTMContainer name="hero">
        <div
            class="col-span-2 flex flex-col justify-center border-r border-neutral-600/15 p-20"
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
    </RTMContainer>
    <BriefMessage />
    <ProcessTimeline />
    <ReviewsSlider />
    <FrequentlyAskedQuestions />
    <ContactForm />
</template>
