'use client';
import CheckIcon from "@mui/icons-material/Check";
import UndoIcon from "@mui/icons-material/Undo";
import { useState } from "react";
import ListButton from "./ListButton";

export default function BulkToggleStatusButton({
    markAsDone = false,
    toggleItemsRemote,
    isMobile,
}: {
    markAsDone?: boolean
    toggleItemsRemote: (isDone: boolean, onFinally: () => void) => void
    isMobile: boolean
}) {

    // ローディング管理
    const [loading, setLoading] = useState(false);

    // クリックイベント
    const handleClick = async () => {
        if (loading) return; // すでに処理中の場合は何もしない
        setLoading(true);

        // すべてのアイテムの完了状態を更新
        toggleItemsRemote(markAsDone, () => setLoading(false));
    }

    return (
        <ListButton
            text={markAsDone ? "すべて完了済み" : "すべて未完了"}
            icon={markAsDone ? <CheckIcon /> : <UndoIcon />}
            loading={loading}
            isMobile={isMobile}
            onClick={handleClick} />
    )
}