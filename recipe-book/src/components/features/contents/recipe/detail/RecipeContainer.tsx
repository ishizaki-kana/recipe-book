import CenteredContainer from "@/components/layout/container/CenteredContainer";
import { RecipeDetailType } from "@/types/entity";
import { Box, Divider, Paper, Stack } from "@mui/material";
import IngredientList from "./item/IngredientList";
import RecipeImage from "./item/RecipeImage";
import RecipeTitle from "./item/RecipeTitle";
import StepList from "./item/StepList";

export default function RecipeContainer({
    recipe
}: {
    recipe: RecipeDetailType
}) {

    return (
        <CenteredContainer sx={{ py: 2 }}>
            <Paper elevation={5}
                component={Stack}
                sx={{ height: '100%', width: '100%' }}>

                {/* title */}
                <Box sx={{ px: 3, py: 2 }}>
                    <RecipeTitle title={recipe.name} category={recipe.category} />
                </Box>
                <Divider />

                {/* content */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, my: 3, mx: 2 }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <RecipeImage imageUrl={recipe.imageUrl} recipeName={recipe.name} />
                        <IngredientList ingredients={recipe.ingredients} />
                    </Box>

                    <StepList steps={recipe.steps} />
                </Box>
            </Paper>
        </CenteredContainer>
    )
}