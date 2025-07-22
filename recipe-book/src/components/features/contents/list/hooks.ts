import { ERROR_MESSAGES, formatMessage } from "@/lib/constants/messages";
import { apiPost } from "@/lib/fetch";
import { ListCategory, ListItem } from "@prisma/client";
import { useState } from "react";
import { getDoneIds, getUndoneIds } from "./utils";

export function useItemList(
    listCategories: ListCategory[],
    initialListItems: ListItem[]
) {

    // エラー管理
    const [error, setError] = useState<string | null>(null);


    /**
     * リストアイテム完了状態一括更新
     * 
     * @param isDone 完了済みか否か
     * @param onFinally 後処理
     * @returns {void}
     */
    const toggleItemsRemote = async (
        isDone: boolean,
        onFinally: () => void
    ) => {
        try {
            const targetIds = isDone ? getUndoneIds(categorizedItems) : getDoneIds(categorizedItems);

            // すでにすべての項目が未完了または完了済みの時
            if (targetIds.length === 0) return;

            // すべてのアイテムの完了状態を更新
            await Promise.all(targetIds.map(id =>
                apiPost('/list-item/update', {
                    id,
                    data: { isDone }
                })
            ));

            toggleListItems(targetIds, isDone);
        } catch (e) {
            handleError(e, ERROR_MESSAGES.UPDATE_FAILED);
        } finally {
            onFinally();
        }
    }

    /**
     * 完了済みアイテムの一括削除
     * 
     * @param onFinally 後処理
     * @returns {void}
     */
    const deleteDoneItemsRemote = async (
        onFinally: () => void
    ) => {
        try {
            const targetIds = getDoneIds(categorizedItems);

            // 完了済みのアイテムが0件のとき
            if (targetIds.length === 0) return;

            // 完了済みのアイテムを削除
            await apiPost('/list-item/delete', { ids: targetIds });
            deleteListItems(targetIds);
        } catch (e) {
            handleError(e, ERROR_MESSAGES.DELETE_FAILED);
        } finally {
            onFinally();
        }
    }

    /**
     * アイテム編集・削除処理のエラーハンドリング
     * 
     * @param e エラー
     * @param errorMsgKey エラーメッセージキー 
     */
    const handleError = (e: unknown, errorMsgKey: string) => {
        console.error(e);
        const msg = e instanceof Error ? formatMessage(errorMsgKey, 'リストアイテム') : ERROR_MESSAGES.UNKNOWN_ERROR;
        setError(msg);
    }

    return {
        categorizedItems,
        error,
        createItemRemote,
        toggleItemRemote,
        toggleItemsRemote,
        deleteDoneItemsRemote,
        setError,
    };
}