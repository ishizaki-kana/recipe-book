import { recipeDetailSample } from '@/stories/sample/RecipeDetail';
import { Meta, StoryObj } from '@storybook/nextjs';
import RecipeContent from './RecipeContent';

const meta: Meta<typeof RecipeContent> = {
    title: 'Features/Recipe/Detail/Container/Content/RecipeContent',
    component: RecipeContent,
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
type Story = StoryObj<typeof RecipeContent>;

export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: '<RecipeContent recipe={recipe} />'
            }
        }
    }
}