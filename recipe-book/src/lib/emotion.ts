import createCache from "@emotion/cache";

export default function createEmotionCache() {
    const cache = createCache({ key: 'css', prepend: true });
    cache.compat = true;
    return cache;
}