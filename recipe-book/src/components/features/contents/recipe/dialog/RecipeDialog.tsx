'use client'
import { DialogContent, DialogTitle } from "@mui/material";
import MuiDialog from "@mui/material/Dialog";
import { useRouter } from "next/navigation";

export default function RecipeDialog({
    recipe
}: {
    recipe: RecipeDetailType
}) {
    const router = useRouter();

    const handleClose = () => router.back();

    return (
        <MuiDialog open
            fullWidth
            maxWidth="lg"
            scroll="paper"
            sx={{ height: '100%' }}
            onClose={handleClose}>

            <DialogTitle sx={{ borderBottom: '1px solid #ccc' }}>
                {recipe.name}
            </DialogTitle>
            <DialogContent>

            </DialogContent>

        </MuiDialog>
    )
}