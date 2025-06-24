'use client'
import Button from "@/components/ui/button/button/Button";
import { ListItem } from "@/generated/prisma";
import { apiPost } from "@/lib/fetch";
import { ERROR_MESSAGES, formatMessage } from "@/lib/messages";
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from "next/navigation";

export default function DeleteButton({
    listItems,
    setError
}: {
    listItems: ListItem[]
    setError: React.Dispatch<React.SetStateAction<string | null>>
}) {

    const router = useRouter();

    const handleClick = async () => {
        const targetItems = listItems.filter((item) => item.isDone === true);

        try {
            await apiPost('/list-item/delete', { ids: targetItems.map((item) => item.itemId) });
            router.refresh();
        } catch (e) {
            console.error(e);
            const msg = e instanceof Error ? formatMessage(ERROR_MESSAGES.DELETE_FAILED, e.message) : ERROR_MESSAGES.UNKNOWN_ERROR;
            setError(msg);
        }
    }

    return (
        <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={handleClick}>
            すべての完了済みを削除する
        </Button>
    )
}
