import { RecipeDetail } from '@/types/entity';
import { Stack } from '@mui/material';
import RecipeImage from './item/image/RecipeImage';
import IngredientList from './item/ingredient/IngredientList';
import StepList from './item/step/StepList';

/**
 * レシピコンテンツ
 */
export default function RecipeContent({
    recipe
}: {
    recipe: RecipeDetail
}) {

    return (
        <Stack sx={{ gap: 3, my: 3, mx: 2 }}>
            <Stack direction='row' sx={{ gap: 2 }}>
                <RecipeImage imageUrl={recipe.imageUrl} recipeName={recipe.name} />
                <IngredientList ingredients={recipe.ingredients} />
            </Stack>

            <StepList steps={recipe.steps} />
        </Stack>
    )
}