import RecipeDialog from "@/components/features/contents/recipe/detail/RecipeDialog";
import { apiGet } from "@/lib/fetch";
import { RecipeDetailType } from "@/types/entity";

export default async function RecipeDialogPage({
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
        <RecipeDialog recipe={recipe} />
    )
}