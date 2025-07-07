import RecipeCard from '@/components/features/contents/recipe/card/RecipeCard';
import { apiGet } from '@/lib/fetch';
import { RecipeSummaryType } from '@/types/entity';
import { Box, Grid } from '@mui/material';

export default async function RecipeBookPage() {
  const recipes: RecipeSummaryType[] = await apiGet('/recipe/find');

  return (
    <Box sx={{ height: '100%' }}>
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