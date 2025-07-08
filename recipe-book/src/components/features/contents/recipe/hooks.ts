import { ERROR_MESSAGES, formatMessage } from "@/lib/constants/messages";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RecipeSearchInput } from "./types";

export function useRecipe(

) {
    const router = useRouter();

    // エラー管理
    const [error, setError] = useState<string | null>(null);

    const search = (
        searchInput: RecipeSearchInput,
        //onFinally: () => void
    ) => {
        try {
            const params = new URLSearchParams();

            if (searchInput.keyword) {
                params.append('keyword', searchInput.keyword);
            }

            if (searchInput.categoryIds && searchInput.categoryIds.length > 0) {
                params.append('categoryIds', searchInput.categoryIds.join(','));
            }

            router.push(`/recipe?${params.toString()}`);
        } catch (e) {
            handleError(e, ERROR_MESSAGES.SEARCH_FAILED);
        } finally {
            //onFinally();
        }
    }

    //
    // private
    //

    /**
     * エラーハンドリング
     * 
     * @param e エラー
     * @param errorMsgKey エラーメッセージキー 
     */
    const handleError = (e: unknown, errorMsgKey: string) => {
        console.error(e);
        const msg = e instanceof Error ? formatMessage(errorMsgKey, 'レシピ') : ERROR_MESSAGES.UNKNOWN_ERROR;
        setError(msg);
    }

    return {
        error,
        search,
    }
}