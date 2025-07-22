import { ERROR_MESSAGES, formatMessage } from '@/lib/constants/messages';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RecipeSearchInput } from '../types';
import { buildSearchQuery } from '../util';

export function useRecipeSearch() {
    const router = useRouter();

    // エラー管理
    const [error, setError] = useState<string | null>(null);

    /**
     * 検索パラメータをもとにクエリ文字列を生成し、検索を行う
     * 
     * @param searchInput 検索条件
     * @returns {void}
     */
    const search = (searchInput: RecipeSearchInput): void => {
        try {
            const query = buildSearchQuery(searchInput);
            router.push(query);
        } catch (e) {
            console.error(e);
            const msg = e instanceof Error
                ? formatMessage(ERROR_MESSAGES.SEARCH_FAILED, 'レシピ')
                : ERROR_MESSAGES.UNKNOWN_ERROR;
            setError(msg);
        }
    }

    return {
        error,
        search,
    }
}