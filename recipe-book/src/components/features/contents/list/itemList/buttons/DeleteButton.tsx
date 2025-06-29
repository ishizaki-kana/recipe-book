import Button from "@/components/ui/button/Button";
import { apiPost } from "@/lib/fetch";
import { ERROR_MESSAGES, formatMessage } from "@/lib/messages";
import DeleteIcon from '@mui/icons-material/Delete';
import { ListCategory, ListItem } from "@prisma/client";
import { useState } from "react";

export default function DeleteButton({
    categorizedListItems,
    deleteListItems,
    setError
}: {
    categorizedListItems: { category: ListCategory, items: ListItem[] }[],
    deleteListItems: (ids: number[]) => void
    setError: (error: string | null) => void
}) {

    // ローディング管理
    const [loading, setLoading] = useState(false);

    const onClick = async () => {
        if (loading) return; // すでに処理中の場合は何もしない
        setLoading(true);

        const targetItems = categorizedListItems.flatMap(({ items }) =>
            items.filter(item => item.isDone)
        );

        try {
            // 完了済みの項目が0件のとき
            if (targetItems.length === 0) return;

            // 完了済みの項目を削除
            const itemIds = targetItems.map(item => item.id);
            await apiPost('/list-item/delete', {
                ids: itemIds
            });

            deleteListItems(itemIds);

        } catch (e) {
            console.error(e);
            const msg = e instanceof Error ? formatMessage(ERROR_MESSAGES.DELETE_FAILED, e.message) : ERROR_MESSAGES.UNKNOWN_ERROR;
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={onClick}
            loading={loading}>
            すべての完了済みを削除する
        </Button>
    )
}
