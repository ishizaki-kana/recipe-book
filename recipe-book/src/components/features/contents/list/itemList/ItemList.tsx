'use client'
import Snackbar from "@/components/ui/snackbar/Snackbar";
import { ListCategory, ListItem } from "@/generated/prisma";
import { apiPost } from "@/lib/fetch";
import { iconMap } from "@/lib/icon";
import { ERROR_MESSAGES, formatMessage } from "@/lib/messages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, ButtonGroup, List, ListSubheader, Typography } from "@mui/material";
import { useState } from "react";
import AddDialog from "../addDialog/AddDialog";
import BulkToggleStatusButton from "../bulkToggleStatusButton/BulkToggleStatusButton";
import DeleteButton from "../deleteButton/DeleteButton";
import ItemListItem from "../itemListItem/ItemListItem";

export default function ItemList({
    listCategories,
    listItems
}: {
    listCategories: ListCategory[],
    listItems: ListItem[]
}) {

    //チェック状態管理
    const [checked, setChecked] = useState<number[]>(
        listItems.filter((item) => item.isDone).map((item) => item.itemId)
    );

    //エラー管理
    const [error, setError] = useState<string | null>(null);

    /**
     * チェック状態変更イベント
     * 
     * クリックされたアイテムがチェックされていないとき、配列にIDを追加します。
     * チェックされているとき、配列からIDを削除します。
     * 
     * @param id 対象のアイテムのID
     * @returns {void}
     */
    const handleToggle = async (id: number) => {
        const currentIndex = checked.indexOf(id);
        const oldChecked = [...checked];
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(id);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);

        try {
            await apiPost('/list-item/modify', { id: id, data: { isDone: currentIndex === -1 } });
        } catch (e) {
            console.error(e);

            // 元に戻す
            setChecked(oldChecked);

            const msg = e instanceof Error ? formatMessage(ERROR_MESSAGES.UPDATE_FAILED, 'リストアイテム') : ERROR_MESSAGES.UNKNOWN_ERROR;
            setError(msg);
        }
    };

    return (
        <>
            <ButtonGroup variant="outlined">
                <AddDialog listCategories={listCategories} />
                <BulkToggleStatusButton
                    listItems={listItems}
                    checked={checked}
                    setChecked={setChecked}
                    setError={setError} />
                <BulkToggleStatusButton
                    markAsDone
                    listItems={listItems}
                    checked={checked}
                    setChecked={setChecked}
                    setError={setError} />
                <DeleteButton
                    listItems={listItems}
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
                {listCategories
                    .sort((a, b) => a.listCategoryId - b.listCategoryId)
                    .map((category) => {

                        // アイテムを持たないカテゴリは表示しない
                        const items = listItems.filter((item) => item.listCategoryId === category.listCategoryId);

                        if (items.length === 0) {
                            return null;
                        }

                        return (
                            <li key={category.listCategoryId}>
                                <ul>
                                    <ListSubheader sx={{ bgcolor: category.color, borderRadius: '5px', my: 1 }}>
                                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={1.5} py={1}>
                                            <FontAwesomeIcon icon={iconMap[category.iconName as keyof typeof iconMap]} color={"#fff"} />
                                            <Typography color="#fff" variant="subtitle2">{category.categoryName}</Typography>
                                        </Box>
                                    </ListSubheader>
                                    {listItems
                                        .filter((item) => item.listCategoryId === category.listCategoryId)
                                        .sort((a, b) => a.itemName.localeCompare(b.itemName))
                                        .map((item) => (
                                            <ItemListItem key={item.itemId} item={item} checked={checked} handleToggle={handleToggle} />
                                        ))}
                                </ul>
                            </li>
                        )
                    })}

            </List>

            <Snackbar
                open={!!error}
                message={error ? error : ''}
                severity="error"
                handleClose={() => setError(null)} />
        </>
    )
}