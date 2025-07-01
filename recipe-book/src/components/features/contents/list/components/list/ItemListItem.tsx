'use client'
import FlexContainer from "@/components/layout/container/FlexContainer";
import Checkbox from "@/components/ui/form/checkbox/Checkbox";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MuiListItem from "@mui/material/ListItem";
import { ListItem } from "@prisma/client";
import { useState } from "react";

export default function ItemListItem({
    item,
    toggleItemRemote
}: {
    item: ListItem
    toggleItemRemote: (id: number, isDone: boolean, onFinally: () => void) => void
}) {

    // ローディング管理
    const [loading, setLoading] = useState(false);

    // アイテムID
    const id = `checkbox-list-label-${item.id}`

    /**
     * アイテムクリックイベント
     * 
     * クリックされたアイテムの完了状態を切り替えます。
     * 
     * @returns {void}
     */
    const handleClick = async () => {
        if (loading) return; // すでに処理中の場合は何もしない
        setLoading(true);

        // アイテムの完了状態を更新
        toggleItemRemote(item.id, !item.isDone, () => setLoading(false));
    }

    return (
        <MuiListItem key={item.id} disablePadding>
            <ListItemButton role={undefined} onClick={handleClick} dense>
                <ListItemIcon>
                    <Checkbox
                        id={id}
                        checked={item.isDone}
                        loading={loading}
                    />
                </ListItemIcon>
                <ListItemText
                    id={id}
                    primary={
                        <FlexContainer
                            direction="row"
                            justifyContent="space-between"
                            gap={1.5}>
                            <span>{item.name}</span>
                            <span>{item.volume}</span>
                        </FlexContainer>
                    }
                    secondary={item.recipeName} />
            </ListItemButton>
        </MuiListItem>
    )
}