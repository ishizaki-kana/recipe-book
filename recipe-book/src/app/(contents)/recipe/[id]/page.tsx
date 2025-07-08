import RecipeContainer from "@/components/features/contents/recipe/detail/RecipeContainer";
import { apiGet } from "@/lib/fetch";
import { RecipeDetailType } from "@/types/entity";

export default async function RecipePage({
    params
}: {
    params: { id: string }
}) {
    const { id } = await params;
    const recipe: RecipeDetailType = await apiGet(`/recipe/find?id=${id}`);

    if (!recipe) {
        return null;
    }

    return (
        <RecipeContainer recipe={recipe} />
    )
}