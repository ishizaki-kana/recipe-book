import RecipeCard from '@/components/features/contents/recipe/card/RecipeCard';
import CenteredContainer from '@/components/layout/container/CenteredContainer';
import Textbox from '@/components/ui/input/TextBox';
import { getAllRecipes } from '@/repositories/recipeRepository';

export default async function Home() {
  const recipes = await getAllRecipes();

  return (
    <div>
      <Textbox />

      <CenteredContainer>
        <RecipeCard recipe={recipes[0]} />
      </CenteredContainer>
    </div>
  );
}
