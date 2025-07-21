import { getIcon } from "@/lib/constants/icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { List, ListSubheader, Stack, Typography } from "@mui/material"
import { categorizedItem } from "../../type"
import ItemListItem from "./ItemListItem"

export default function ItemList({
    categorizedItems,
    toggleItemRemote
}: {
    categorizedItems: categorizedItem[],
    toggleItemRemote: (id: number, isDone: boolean, onFinally: () => void) => void
}) {

    return (
        <List disablePadding
            sx={{
                width: '100%', flex: 1, overflow: 'auto', position: 'relative',
                pr: 3, '& ul': { padding: 0 },
            }}
            subheader={<li />}
        >
            {categorizedItems.map(({ category, items }) => (
                <li key={category.id}>
                    <ul>
                        <ListSubheader sx={{
                            bgcolor: `${category.color}.main`,
                            borderRadius: '5px',
                            my: 1
                        }}>
                            <Stack direction="row" justifyContent="flex-start" gap={1.5} sx={{ py: 1 }} >
                                <FontAwesomeIcon icon={getIcon(category.icon)} color={"#fff"} />
                                <Typography color="#fff" variant="subtitle2">{category.name}</Typography>
                            </Stack>
                        </ListSubheader>

                        {items.map((item) => (
                            <ItemListItem
                                key={item.id}
                                item={item}
                                toggleItemRemote={toggleItemRemote} />
                        ))}
                    </ul>
                </li>
            )
            )}
        </List>
    )
}