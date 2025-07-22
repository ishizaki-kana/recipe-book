import { recipeDetailSample } from '@/stories/sample/RecipeDetail';
import { Meta, StoryObj } from '@storybook/nextjs';
import RecipeImage from './RecipeImage';

const meta: Meta<typeof RecipeImage> = {
    title: 'Features/Recipe/Detail/Container/Content/Item/RecipeImage',
    component: RecipeImage,
    argTypes: {
        imageUrl: {
            control: false,
            description: 'レシピ画像URL',
            table: {
                category: 'data',
                type: { summary: 'string' }
            }
        },
        recipeName: {
            control: false,
            description: 'レシピ名',
            table: {
                category: 'data',
                type: { summary: 'string' }
            }
        }
    },
    args: {
        imageUrl: recipeDetailSample.imageUrl,
        recipeName: recipeDetailSample.name
    }
}

export default meta;
type Story = StoryObj<typeof RecipeImage>

export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: '<RecipeImage imageUrl={imageUrl} recipeName={recipeName} />'
            }
        }
    }
}