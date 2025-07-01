import RecipeDialog from "@/components/features/contents/recipe/dialog/RecipeDialog";

// TODO : テストデータ
const recipe: RecipeDetailType = {
    id: 6,
    name: 'しらたき塩焼きそば',
    imageUrl: null,
    shelfLife: '冷凍1週間',
    calories: null,
    category: { id: 3, name: '副菜', icon: 'seedling', color: 'teal' }
}

export default async function RecipeDialogPage({
    params
}: {
    params: { id: string }
}) {
    const { id } = await params;
    //const recipe = await getRecipeDetail(Number(id));

    return (
        <RecipeDialog recipe={recipe} />
    )
}