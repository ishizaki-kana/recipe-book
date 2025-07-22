import { recipeDetailSample } from '@/stories/sample/RecipeDetail';
import { Meta, StoryObj } from '@storybook/nextjs';
import RecipeDetailCard from './RecipeDetailCard';

const meta: Meta<typeof RecipeDetailCard> = {
    title: 'Features/Recipe/Detail/Container/RecipeDetailCard',
    component: RecipeDetailCard,
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
type Story = StoryObj<typeof RecipeDetailCard>;

export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: '<RecipeDetailCard recipe={recipe} />'
            }
        }
    }
}