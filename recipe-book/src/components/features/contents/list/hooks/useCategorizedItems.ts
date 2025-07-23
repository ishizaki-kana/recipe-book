import { ListCategory, ListItem } from '@prisma/client';
import { useMemo } from 'react';

export function useCategorizedItems(
    listCategories: ListCategory[],
    listItems: ListItem[]
) {

    return useMemo(() => {
        return listCategories
            .sort((a, b) => a.id - b.id)
            .map(category => {
                const items = listItems.filter(item => item.categoryId === category.id)
                    .sort((a, b) => a.name.localeCompare(b.name))
                return { category, items };
            })
            .filter(({ items }) => items.length > 0)
    }, [listCategories, listItems]);
}