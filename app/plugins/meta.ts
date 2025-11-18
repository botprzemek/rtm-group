const useTranslatedTitle = (title: string) =>
    useHead({
        title: () => title,
    });

export default defineNuxtPlugin((nuxtApp) => {
    const meta = nuxtApp._route.meta;

    nuxtApp.hook("vue:setup", async () => {
        const { t } = useI18n();

        const title = t(
            typeof meta.title === "string" ? meta.title : "pages.index.title",
        );

        useTranslatedTitle(title);
    });
});
