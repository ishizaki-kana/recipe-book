import { ERROR_MESSAGES, formatMessage } from "@/lib/constants/messages";
import { apiPost } from "@/lib/fetch";
import { ListCategory, ListItem } from "@prisma/client";
import { useMemo, useState } from "react";
import { categorizedItem, CreateFormInput } from "./type";
import { getDoneIds, getUndoneIds } from "./utils";

export function useItemList(
    listCategories: ListCategory[],
    initialListItems: ListItem[]
) {

    // リストアイテム管理
    const [listItems, setListItems] = useState<ListItem[]>(initialListItems);

    // エラー管理
    const [error, setError] = useState<string | null>(null);

    /**
     * カテゴリごとに分類されたリストアイテムリスト
     * 
     * @param listCategories カテゴリーリスト
     * @param listItems リストアイテムリスト
     * @returns {Array} カテゴリごとに分類されたリストアイテムリスト
     */
    const categorizedItems: categorizedItem[] = useMemo(() => {
        return listCategories
            .sort((a, b) => a.id - b.id)
            .map(category => {
                const items = listItems.filter(item => item.categoryId === category.id)
                    .sort((a, b) => a.name.localeCompare(b.name))
                return { category, items };
            })
            .filter(({ items }) => items.length > 0)
    }, [listCategories, listItems]);

    /**
     * リストアイテム追加
     * 
     * @param data 入力値
     */
    const createItemRemote = async (
        data: CreateFormInput
    ) => {
        try {

            // リストアイテム追加
            const item: ListItem = await apiPost('/list-item/create', { data: data });
            addListItem(item);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    /**
     * リストアイテム完了状態更新
     * 
     * @param id アイテムID
     * @param isDone 完了済みか否か
     * @param onFinally 後処理
     */
    const toggleItemRemote = async (
        id: number,
        isDone: boolean,
        onFinally: () => void
    ) => {
        try {

            // アイテムの完了状態を更新
            await apiPost('/list-item/modify', {
                id,
                data: { isDone }
            });

            toggleListItems([id], isDone);
        } catch (e) {
            handleError(e, ERROR_MESSAGES.UPDATE_FAILED);
        } finally {
            onFinally();
        }
    }

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
            const targetIds = isDone ? getDoneIds(categorizedItems) : getUndoneIds(categorizedItems);

            // すでにすべての項目が未完了または完了済みの時
            if (targetIds.length === 0) return;

            // すべてのアイテムの完了状態を更新
            await Promise.all(targetIds.map(id =>
                apiPost('/list-item/modify', {
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

    //
    // private
    //

    /**
     * リストアイテム追加
     *
     * @param item 追加するアイテム
     * @return {void}
     */
    const addListItem = (item: ListItem) => {
        setListItems((prev) => [...prev, item]);
    };

    /**
     * リストアイテム完了状態変更
     *
     * @param ids IDリスト
     * @param isDone 完了状態
     * @returns {void}
     */
    const toggleListItems = (ids: number[], isDone: boolean) => {
        setListItems((prev) =>
            prev.map((item) => (ids.includes(item.id) ? { ...item, isDone } : item))
        );
    };

    /**
     * リストアイテム削除
     *
     * @param ids IDリスト
     * @returns {void}
     */
    const deleteListItems = (ids: number[]) => {
        setListItems((prev) => prev.filter((item) => !ids.includes(item.id)));
    };

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