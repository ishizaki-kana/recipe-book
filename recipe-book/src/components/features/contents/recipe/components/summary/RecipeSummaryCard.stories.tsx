import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/nextjs';
import { within } from '@storybook/testing-library';
import RecipeSummaryCard from './RecipeSummaryCard';

const recipe = {
    id: 1,
    name: 'しらたき塩焼きそば',
    imageUrl: 'https://res.cloudinary.com/drf6p5cyv/image/upload/huftga6tcppne7md6q70.jpg',
    shelfLife: '冷蔵保存3日',
    calories: 100,
    category: { id: 1, name: '主食', icon: 'rice', color: 'orange' }
}

const meta: Meta<typeof RecipeSummaryCard> = {
    title: 'Features/Recipe/Summary/RecipeSummaryCard',
    component: RecipeSummaryCard,
    args: {
        recipe: recipe
    },
    argTypes: {
        recipe: {
            control: false,
            description: 'レシピ情報',
            table: {
                category: 'data',
                type: { summary: 'RecipeSummary' }
            }
        }
    }
}

export default meta;
type Story = StoryObj<typeof RecipeSummaryCard>;

export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: '<RecipeCard recipe={recipe} />'
            }
        }
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        expect(canvas.getByText('しらたき塩焼きそば')).toBeInTheDocument();
        expect(canvas.getByText('主食')).toBeInTheDocument();
        expect(canvas.getByText('冷蔵保存3日')).toBeInTheDocument();
        expect(canvas.getByText('100kcal')).toBeInTheDocument();

        const image = await canvas.findByRole('img');
        expect(image).toHaveAttribute('src', 'https://res.cloudinary.com/drf6p5cyv/image/upload/huftga6tcppne7md6q70.jpg');
    }
}