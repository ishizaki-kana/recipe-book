'use client'
import Checkbox from "@/components/ui/checkbox/Checkbox";
import { apiPost } from "@/lib/fetch";
import { ERROR_MESSAGES, formatMessage } from "@/lib/messages";
import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MuiListItem from "@mui/material/ListItem";
import { ListItem } from "@prisma/client";
import { useState } from "react";

export default function ItemListItem({
    item,
    toggleListItems,
    setError
}: {
    item: ListItem
    toggleListItems: (ids: number[], isDone: boolean) => void
    setError: (error: string | null) => void
}) {

    // ローディング管理
    const [loading, setLoading] = useState(false);

    const id = `checkbox-list-label-${item.id}`

    const onClick = async () => {
        try {
            if (loading) return; // すでに処理中の場合は何もしない
            setLoading(true);

            // リストアイテム更新
            await apiPost('/list-item/modify', {
                id: item.id,
                data: { isDone: !item.isDone }
            });

            toggleListItems([item.id], !item.isDone);

        } catch (e) {
            console.error(e);
            const msg = e instanceof Error ? formatMessage(ERROR_MESSAGES.UPDATE_FAILED, 'リストアイテム') : ERROR_MESSAGES.UNKNOWN_ERROR;
            setError(msg);
        } finally {
            setLoading(false);
        }
    }

    return (
        <MuiListItem key={item.id} disablePadding>
            <ListItemButton role={undefined} onClick={onClick} dense>
                <ListItemIcon>
                    <Checkbox
                        id={id}
                        checked={item.isDone}
                        loading={loading}
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
                            {item.name}
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