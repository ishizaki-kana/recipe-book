'use client'
import { RecipeDetail } from "@/types/entity";
import { Box, DialogContent, DialogTitle } from "@mui/material";
import MuiDialog from "@mui/material/Dialog";
import { useRouter } from "next/navigation";
import IngredientList from "./item/IngredientList";
import RecipeImage from "./item/RecipeImage";
import RecipeTitle from "./item/RecipeTitle";
import StepList from "./item/StepList";

export default function RecipeDialog({
    recipe
}: {
    recipe: RecipeDetail
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
                <RecipeTitle recipe={recipe} />
            </DialogTitle>

            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, my: 3, mx: 2 }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <RecipeImage imageUrl={recipe.imageUrl} recipeName={recipe.name} />
                        <IngredientList ingredients={recipe.ingredients} />
                    </Box>

                    <StepList steps={recipe.steps} />
                </Box>
            </DialogContent>

        </MuiDialog>
    )
}