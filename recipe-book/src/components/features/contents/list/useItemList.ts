import { ListCategory, ListItem } from "@/generated/prisma";
import { useMemo, useState } from "react";

export function useItemList(
    listCategories: ListCategory[],
    initialListItems: ListItem[]
) {

    // リストアイテム管理
    const [listItems, setListItems] = useState<ListItem[]>(initialListItems);

    // エラー管理
    const [error, setError] = useState<string | null>(null);

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
            prev.map((item) => (ids.includes(item.itemId) ? { ...item, isDone } : item))
        );
    };

    /**
     * リストアイテム削除
     *
     * @param ids IDリスト
     * @returns {void}
     */
    const deleteListItems = (ids: number[]) => {
        setListItems((prev) => prev.filter((item) => !ids.includes(item.itemId)));
    };

    /**
     * カテゴリごとに分類されたリストアイテムリストを生成
     * 
     * @param listCategories カテゴリーリスト
     * @param listItems リストアイテムリスト
     * @returns {Array} カテゴリごとに分類されたリストアイテムリスト
     */
    const categorizedItems = useMemo(() => {
        return listCategories
            .sort((a, b) => a.listCategoryId - b.listCategoryId)
            .map(category => {
                const items = listItems.filter(item => item.listCategoryId === category.listCategoryId)
                    .sort((a, b) => a.itemName.localeCompare(b.itemName))
                return { category, items };
            })
            .filter(({ items }) => items.length > 0)
    }, [listCategories, listItems])

    return {
        categorizedItems,
        error,
        addListItem,
        toggleListItems,
        deleteListItems,
        setError,
    };
}