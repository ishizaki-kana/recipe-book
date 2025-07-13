import RecipeDialog from "@/components/features/contents/recipe/detail/RecipeDialog";
import { apiGetServer } from "@/lib/fetchServer";
import { RecipeDetail } from "@/types/entity";

export default async function RecipeDialogPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const recipe: RecipeDetail = await apiGetServer(`/recipe/find?id=${id}`);

    if (!recipe) {
        return null;
    }

    return (
        <RecipeDialog recipe={recipe} />
    )
}