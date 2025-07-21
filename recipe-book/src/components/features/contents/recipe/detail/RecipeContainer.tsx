import CenteredContainer from "@/components/layout/container/center/CenteredContainer";
import { RecipeDetail } from "@/types/entity";
import { Box, Divider, Paper, Stack } from "@mui/material";
import IngredientList from "./item/IngredientList";
import RecipeImage from "./item/RecipeImage";
import RecipeTitle from "./item/RecipeTitle";
import StepList from "./item/StepList";

export default function RecipeContainer({
    recipe
}: {
    recipe: RecipeDetail
}) {

    return (
        <CenteredContainer sx={{ py: 2 }}>
            <Paper elevation={10}
                component={Stack}
                sx={{ height: '100%', width: '100%', overflow: 'auto' }}>

                {/* title */}
                <Box sx={{ px: 3, py: 2 }}>
                    <RecipeTitle recipe={recipe} />
                </Box>
                <Divider />

                {/* content */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, my: 4, mx: 4 }}>
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