'use client'
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import { ReactNode, useState } from "react";
import createEmotionCache from "../../lib/emotion";

/**
 * Emotion キャッシュプロバイダ
 */
export default function EmotionCacheProvider({
    children
}: {
    children: ReactNode
}) {
    const [cache] = useState(() => createEmotionCache());

    useServerInsertedHTML(() => {
        return (
            <style
                data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
                dangerouslySetInnerHTML={{
                    __html: Object.values(cache.inserted).join(' ')
                }} />
        )
    })

    return (
        <CacheProvider value={cache}>
            {children}
        </CacheProvider>
    )
}