import Button from "@/components/ui/button/button/Button";
import { ListItem } from "@/generated/prisma";
import { apiPost } from "@/lib/fetch";
import { ERROR_MESSAGES, formatMessage } from "@/lib/messages";
import CheckIcon from "@mui/icons-material/Check";
import UndoIcon from "@mui/icons-material/Undo";

// TODO なんかおかしい

export default function BulkToggleStatusButton({
    listItems,
    markAsDone = false,
    checked,
    setChecked,
    setError
}: {
    listItems: ListItem[]
    markAsDone?: boolean
    checked: number[]
    setChecked: React.Dispatch<React.SetStateAction<number[]>>
    setError: React.Dispatch<React.SetStateAction<string | null>>
}) {

    const handleClick = async () => {
        const prevChecked = [...checked];
        const targetItems = listItems.filter((item) => item.isDone !== markAsDone);
        const targetIds = targetItems.map((item) => item.itemId);

        // すでにすべての項目が未完了または完了済みの時
        if (targetIds.length === 0) {
            return;
        }

        // すべての項目を変更
        const newChecked = markAsDone
            ? [...new Set([...checked, ...targetIds])]
            : checked.filter(id => !targetIds.includes(id));

        setChecked(newChecked);

        try {
            await apiPost('/list-item/modify', {
                datalist: targetIds.map((id) => ({ id: id, data: { isDone: markAsDone } }))
            });
        } catch (e) {
            console.error(e);

            setChecked(prevChecked);
            const msg = e instanceof Error ? formatMessage(ERROR_MESSAGES.UPDATE_FAILED, 'リストアイテム') : ERROR_MESSAGES.UNKNOWN_ERROR;
            setError(msg);
        }
    }

    return (
        <Button
            variant="outlined"
            startIcon={markAsDone ? <CheckIcon /> : <UndoIcon />}
            onClick={handleClick}>
            {markAsDone ? "すべて完了済みにする" : "すべて未完了にする"}
        </Button>
    )
}