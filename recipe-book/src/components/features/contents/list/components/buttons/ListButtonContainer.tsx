'use client'
import IconButton from "@/components/ui/button/iconButton/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ButtonGroup, Menu, useMediaQuery, useTheme } from "@mui/material";
import { ListCategory } from "@prisma/client";
import { useState } from "react";
import { CreateFormInput } from "../../type";
import BulkToggleStatusButton from "./BulkToggleStatusButton";
import CreateButton from "./CreateButton";
import DeleteButton from "./DeleteButton";

export default function ListButtonContainer({
    listCategories,
    createItemRemote,
    toggleItemsRemote,
    deleteDoneItemsRemote
}: {
    listCategories: ListCategory[],
    createItemRemote: (item: CreateFormInput) => void,
    toggleItemsRemote: (isDone: boolean, onFinally: () => void) => void
    deleteDoneItemsRemote: (onFinally: () => void) => void
}) {

    // スマホ判定
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // メニュー開閉状態管理
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    // 新規作成ボタン
    const createButton = (
        <CreateButton
            createItemRemote={createItemRemote}
            listCategories={listCategories}
            isMobile={isMobile} />
    )

    // 一括完了状態変更ボタン
    const bulkToggleStatusButtons = (
        [false, true].map((markAsDone, idx) => (
            <BulkToggleStatusButton
                key={idx}
                markAsDone={markAsDone}
                toggleItemsRemote={toggleItemsRemote}
                isMobile={isMobile} />
        ))
    )

    // 削除ボタン
    const deleteButton = (
        <DeleteButton
            deleteDoneItemsRemote={deleteDoneItemsRemote}
            isMobile={isMobile} />
    )

    if (isMobile) return (
        <>
            <IconButton
                icon={<MoreVertIcon />}
                color="ui"
                sx={{
                    position: "absolute",
                    top: 10,
                    right: 2
                }}
                onClick={handleClick}
            />

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                {createButton}
                {bulkToggleStatusButtons}
                {deleteButton}
            </Menu>
        </>
    );

    return (
        <ButtonGroup variant="outlined">
            {createButton}
            {bulkToggleStatusButtons}
            {deleteButton}
        </ButtonGroup>)
}