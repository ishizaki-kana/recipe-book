import RecipeCard from '@/components/features/contents/recipe/card/RecipeCard';
import { Box, Grid } from '@mui/material';

// TODO : テストデータ
const recipes = [
  {
    id: 4,
    name: 'test2\t',
    categoryId: 1,
    imageUrl: null,
    shelfLife: null,
    calories: null,
    category: { id: 1, name: '主食', icon: 'rice', color: 'orange' }
  },
  {
    id: 5,
    name: 'test4',
    categoryId: 2,
    imageUrl: null,
    shelfLife: null,
    calories: 200,
    category: { id: 2, name: '汁物', icon: 'soup', color: 'blue' }
  },
  {
    id: 6,
    name: 'test3',
    categoryId: 3,
    imageUrl: null,
    shelfLife: '冷凍1週間',
    calories: null,
    category: { id: 3, name: '副菜', icon: 'seedling', color: 'teal' }
  },
  {
    id: 7,
    name: 'test5',
    categoryId: 4,
    imageUrl: null,
    shelfLife: null,
    calories: null,
    category: { id: 4, name: '主菜', icon: 'meat', color: 'red' }
  },
  {
    id: 1,
    name: 'test',
    categoryId: 1,
    imageUrl: 'huftga6tcppne7md6q70.jpg',
    shelfLife: '冷蔵保存3日',
    calories: 100,
    category: { id: 1, name: '主食', icon: 'rice', color: 'orange' }
  }
]

export default async function RecipeBookPage() {
  //const recipes = await getAllRecipes();

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
