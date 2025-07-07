import RecipeContainer from "@/components/features/contents/recipe/detail/RecipeContainer";
import { getRecipeDetail } from "@/repositories/recipeRepository";

export default async function RecipePage({
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
        <RecipeContainer recipe={recipe} />
    )
}