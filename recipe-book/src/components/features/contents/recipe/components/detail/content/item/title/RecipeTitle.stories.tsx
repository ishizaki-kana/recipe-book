import { recipeDetailSample } from '@/stories/sample/RecipeDetail';
import { Meta, StoryObj } from '@storybook/nextjs';
import RecipeTitle from './RecipeTitle';

const meta: Meta<typeof RecipeTitle> = {
    title: 'Features/Recipe/Detail/Container/Content/Item/RecipeTitle',
    component: RecipeTitle,
    argTypes: {
        recipe: {
            control: false,
            description: 'レシピ情報',
            table: {
                category: 'data',
                type: { summary: 'RecipeDetail' }
            }
        }
    },
    args: {
        recipe: recipeDetailSample
    }
}

export default meta;
type Story = StoryObj<typeof RecipeTitle>;

export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: '<RecipeTitle recipe={recipe} />'
            }
        }
    }
}