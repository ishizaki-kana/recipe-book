import RecipeCard from '@/components/features/contents/recipe/card/RecipeCard';
import SearchContainer from '@/components/features/contents/recipe/search/SearchContainer';
import { RecipeSearchInput } from '@/components/features/contents/recipe/types';
import { apiGet } from '@/lib/fetch';
import { RecipeSummary } from '@/types/entity';
import { Box, Grid } from '@mui/material';
import { RecipeCategory } from '@prisma/client';

export default async function RecipeBookPage({
  searchParams
}: {
  searchParams: { keyword?: string, categoryIds?: string }
}) {

  // パラメータ取得
  const keyword = searchParams?.keyword ?? '';
  const categoryIds = searchParams?.categoryIds?.split(',') ?? [];
  const searchInput: RecipeSearchInput = {
    keyword,
    categoryIds: categoryIds.map(id => Number(id))
  }

  const conditions: Record<string, any> = {}
  if (keyword.trim()) {
    const keywords = keyword.split(/\s+/).filter(Boolean);
    const keywordConditions = keywords.flatMap(w => [
      { name: { contains: w } },
      { ingredients: { some: { name: { contains: w } } } }
    ]);
    conditions.OR = keywordConditions;
  }

  if (categoryIds.length > 0) {
    conditions.categoryId = { in: searchInput.categoryIds }
  }

  const recipeCategories: RecipeCategory[] = await apiGet('/recipe-category/find?all=true');
  const recipes: RecipeSummary[] = await apiGet(`/recipe/find?conditions=${encodeURIComponent(JSON.stringify(conditions))}`);

  return (
    <Box sx={{ height: '100%', width: '100%' }}>

      <SearchContainer categories={recipeCategories} searchInput={searchInput} />

      <Grid container rowSpacing={3} columnSpacing={5}
        columns={{ xs: 1, sm: 3, md: 4, lg: 5 }}
        px={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        sx={{ py: 4 }}>

        {recipes.map(recipe =>
          <Grid key={recipe.id} size={1}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}>
            <RecipeCard recipe={recipe} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}