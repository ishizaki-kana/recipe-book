import RecipeContainer from "@/components/features/contents/recipe/detail/RecipeContainer";
import { apiGet } from "@/lib/fetch";
import { RecipeDetail } from "@/types/entity";

export default async function RecipePage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const recipe: RecipeDetail = await apiGet(`/recipe/find?id=${id}`);

    if (!recipe) {
        return null;
    }

    return (
        <RecipeContainer recipe={recipe} />
    )
}