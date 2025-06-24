import { ListItem } from "@/generated/prisma";
import { Box, Checkbox, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MuiListItem from "@mui/material/ListItem";

export default function ItemListCard({
    item,
    checked,
    handleToggle
}: {
    item: ListItem
    checked: number[]
    handleToggle: (id: number) => void
}) {

    const id = `checkbox-list-label-${item.itemId}`

    return (
        <MuiListItem key={item.itemId} disablePadding>
            <ListItemButton role={undefined} onClick={() => handleToggle(item.itemId)} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.includes(item.itemId)}
                        tabIndex={-1}
                        disableRipple
                        slotProps={{
                            input: {
                                'aria-labelledby': id,
                            }
                        }}
                    />
                </ListItemIcon>
                <ListItemText id={id} primary={
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        gap={1.5}
                        width={'100%'}>
                        <span>
                            {item.itemName}
                        </span>
                        <span>
                            {item.volume}
                        </span>
                    </Box>
                }
                    secondary={item.recipeName} />
            </ListItemButton>
        </MuiListItem>
    )
}