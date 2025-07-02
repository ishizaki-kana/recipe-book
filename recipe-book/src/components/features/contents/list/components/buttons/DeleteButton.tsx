import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import ListButton from "./ListButton";

export default function DeleteButton({
    deleteDoneItemsRemote,
    isMobile,
}: {
    deleteDoneItemsRemote: (onFinally: () => void) => void
    isMobile: boolean
}) {

    // ローディング管理
    const [loading, setLoading] = useState(false);

    // クリックイベント
    const handleClick = async () => {
        if (loading) return; // すでに処理中の場合は何もしない
        setLoading(true);

        // すべての完了済みアイテムを削除
        deleteDoneItemsRemote(() => setLoading(false));
    };

    return (
        <ListButton
            text={'すべての完了済みを削除'}
            icon={<DeleteIcon />}
            isMobile={isMobile}
            loading={loading}
            onClick={handleClick} />
    )
}
