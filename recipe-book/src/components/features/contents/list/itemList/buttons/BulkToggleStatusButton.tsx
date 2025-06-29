'use client';
import Button from "@/components/ui/button/Button";
import { apiPost } from "@/lib/fetch";
import { ERROR_MESSAGES, formatMessage } from "@/lib/messages";
import CheckIcon from "@mui/icons-material/Check";
import UndoIcon from "@mui/icons-material/Undo";
import { ListCategory, ListItem } from "@prisma/client";
import { useState } from "react";

export default function BulkToggleStatusButton({
    markAsDone = false,
    categorizedListItems,
    toggleListItems,
    setError
}: {
    markAsDone?: boolean
    categorizedListItems: { category: ListCategory, items: ListItem[] }[],
    toggleListItems: (ids: number[], isDone: boolean) => void
    setError: (error: string | null) => void
}) {

    // ローディング管理
    const [loading, setLoading] = useState(false);

    const onClick = async () => {
        if (loading) return; // すでに処理中の場合は何もしない
        setLoading(true);

        const targetItems = categorizedListItems.flatMap(({ items }) =>
            items.filter(item => markAsDone ? !item.isDone : item.isDone)
        );

        try {
            // すでにすべての項目が未完了または完了済みの時
            if (targetItems.length === 0) return;

            // すべてのアイテムの完了状態を更新
            await Promise.all(targetItems.map(item => {
                return apiPost('/list-item/modify', {
                    id: item.id,
                    data: { isDone: markAsDone }
                });
            }));

            toggleListItems(targetItems.map(item => item.id), markAsDone);

        } catch (e) {
            console.error(e);
            const msg = e instanceof Error ? formatMessage(ERROR_MESSAGES.UPDATE_FAILED, 'リストアイテム') : ERROR_MESSAGES.UNKNOWN_ERROR;
            setError(msg);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Button
            variant="outlined"
            startIcon={markAsDone ? <CheckIcon /> : <UndoIcon />}
            onClick={onClick}
            loading={loading}>
            {markAsDone ? "すべて完了済みにする" : "すべて未完了にする"}
        </Button>
    )
}