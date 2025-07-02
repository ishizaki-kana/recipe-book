'use client'
import Snackbar from "@/components/ui/feedback/Snackbar";
import { ListCategory, ListItem } from "@prisma/client";
import { useItemList } from "../hooks";
import ListButtonContainer from "./buttons/ListButtonContainer";
import ItemList from "./list/ItemList";

export default function ItemListContainer({
    listCategories,
    initialListItems
}: {
    listCategories: ListCategory[],
    initialListItems: ListItem[]
}) {

    const {
        categorizedItems,
        error,
        createItemRemote,
        toggleItemRemote,
        toggleItemsRemote,
        deleteDoneItemsRemote,
        setError
    } = useItemList(listCategories, initialListItems);

    return (
        <>
            <ListButtonContainer
                listCategories={listCategories}
                createItemRemote={createItemRemote}
                toggleItemsRemote={toggleItemsRemote}
                deleteDoneItemsRemote={deleteDoneItemsRemote} />

            <ItemList
                categorizedItems={categorizedItems}
                toggleItemRemote={toggleItemRemote} />

            <Snackbar
                open={!!error}
                message={error ? error : ''}
                severity="error"
                handleClose={() => setError(null)} />
        </>
    )
}