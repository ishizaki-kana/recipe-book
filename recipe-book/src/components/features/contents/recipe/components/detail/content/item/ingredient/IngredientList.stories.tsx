import { recipeDetailSample } from '@/stories/sample/RecipeDetail';
import { Meta, StoryObj } from '@storybook/nextjs';
import IngredientList from './IngredientList';

const meta: Meta<typeof IngredientList> = {
    title: 'Features/Recipe/Detail/Container/Content/Item/IngredientList',
    component: IngredientList,
    argTypes: {
        ingredients: {
            control: false,
            description: '材料リスト',
            table: {
                category: 'data',
                type: { summary: '{ id: number, name: string, volume: string | null }[]' }
            }
        }
    },
    args: {
        ingredients: recipeDetailSample.ingredients
    }
}

export default meta;
type Story = StoryObj<typeof IngredientList>;

export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: '<IngredientList ingredients={ingredients} />'
            }
        }
    }
}