import RecipeDialog from "@/components/features/contents/recipe/detail/RecipeDialog";
import { getRecipeDetail } from "@/repositories/recipeRepository";

export default async function RecipeDialogPage({
    params
}: {
    params: { id: string }
}) {
    const { id } = await params;
    const recipe = await getRecipeDetail(Number(id));

    if (!recipe) {
        return null;
    }

    return (
        <RecipeDialog recipe={recipe} />
    )
}