'use client'
import { RecipeDetail } from '@/types/entity';
import { DialogContent, DialogTitle } from '@mui/material';
import MuiDialog from '@mui/material/Dialog';
import { useRouter } from 'next/navigation';
import RecipeContent from '../../content/RecipeContent';
import RecipeTitle from '../../content/item/title/RecipeTitle';

/**
 * レシピ詳細ダイアログ 
 */
export default function RecipeDetailDialog({
    recipe,
    open
}: {
    recipe: RecipeDetail
    open?: boolean
}) {
    const router = useRouter();

    // 非表示イベント
    const onClose = () => router.back();

    return (
        <MuiDialog
            open={open !== undefined ? open : true}
            fullWidth
            maxWidth='lg'
            scroll='paper'
            sx={{ height: '100%' }}
            onClose={onClose}>

            <DialogTitle sx={{ borderBottom: '1px solid #ccc' }}>
                <RecipeTitle recipe={recipe} />
            </DialogTitle>

            <DialogContent>
                <RecipeContent recipe={recipe} />
            </DialogContent>

        </MuiDialog>
    )
}