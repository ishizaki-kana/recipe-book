'use client'
import { Box, Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";

export default function ItemList({

}: {

    }) {

    //チェック状態管理
    const [checked, setChecked] = useState<number[]>([]);

    /**
     * チェック状態変更イベント
     * 
     * クリックされたアイテムがチェックされていないとき、配列にインデックを追加します。
     * チェックされているとき、配列からインデックを削除します。
     * 
     * @param idx 対象のアイテムのインデックス
     * @returns {void}
     */
    const handleToggle = (idx: number) => () => {
        const currentIndex = checked.indexOf(idx);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(idx);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const listItems = [
        {
            name: 'item1',
            volume: 100,
            unit: 'ml',
        }, {
            name: 'item2',
            volume: 200,
            unit: 'ml',
        }];

    return (
        <List disablePadding>
            {listItems.map((item, idx) => {
                const id = `checkbox-list-label-${idx}`

                return (
                    <ListItem key={idx} disablePadding>
                        <ListItemButton role={undefined} onClick={handleToggle(idx)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.includes(idx)}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': id,
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
                                        {item.name}
                                    </span>
                                    <span>
                                        {item.volume} {item.unit}
                                    </span>
                                </Box>
                            }
                                secondary={'recipeName'} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    )
}