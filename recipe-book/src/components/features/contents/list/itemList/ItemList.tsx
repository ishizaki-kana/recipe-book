'use client'
import Snackbar from "@/components/ui/snackbar/Snackbar";
import { iconMap } from "@/lib/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, ButtonGroup, List, ListSubheader, Typography } from "@mui/material";
import { ListCategory, ListItem } from "@prisma/client";
import AddDialog from "./buttons/AddDialog";
import BulkToggleStatusButton from "./buttons/BulkToggleStatusButton";
import DeleteButton from "./buttons/DeleteButton";
import ItemListItem from "./item/ItemListItem";
import { useItemList } from "./useItemList";

export default function ItemList({
    listCategories,
    initialListItems
}: {
    listCategories: ListCategory[],
    initialListItems: ListItem[]
}) {

    const {
        categorizedItems,
        error,
        addListItem,
        toggleListItems,
        deleteListItems,
        setError
    } = useItemList(listCategories, initialListItems);

    return (
        <>
            <ButtonGroup variant="outlined">
                <AddDialog
                    listCategories={listCategories}
                    addListItem={addListItem} />
                <BulkToggleStatusButton
                    categorizedListItems={categorizedItems}
                    toggleListItems={toggleListItems}
                    setError={setError} />
                <BulkToggleStatusButton markAsDone
                    categorizedListItems={categorizedItems}
                    toggleListItems={toggleListItems}
                    setError={setError} />
                <DeleteButton
                    categorizedListItems={categorizedItems}
                    deleteListItems={deleteListItems}
                    setError={setError} />
            </ButtonGroup>

            <List disablePadding
                sx={{
                    width: '100%',
                    flex: 1,
                    overflow: 'auto',
                    position: 'relative',
                    pr: 3,
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
            >
                {categorizedItems.map(({ category, items }) => (
                    <li key={category.id}>
                        <ul>
                            <ListSubheader sx={{ bgcolor: category.color, borderRadius: '5px', my: 1 }}>
                                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={1.5} py={1}>
                                    <FontAwesomeIcon icon={iconMap[category.icon as keyof typeof iconMap]} color={"#fff"} />
                                    <Typography color="#fff" variant="subtitle2">{category.name}</Typography>
                                </Box>
                            </ListSubheader>
                            {items.map((item) => (
                                <ItemListItem
                                    key={item.id}
                                    item={item}
                                    toggleListItems={toggleListItems}
                                    setError={setError} />
                            ))}
                        </ul>
                    </li>
                )
                )}
            </List>

            <Snackbar
                open={!!error}
                message={error ? error : ''}
                severity="error"
                handleClose={() => setError(null)} />
        </>
    )
}