import { recipeDetailSample } from '@/stories/sample/RecipeDetail';
import { Meta, StoryObj } from '@storybook/nextjs';
import StepList from './StepList';

const meta: Meta<typeof StepList> = {
    title: 'Features/Recipe/Detail/Container/Content/Item/StepList',
    component: StepList,
    argTypes: {
        steps: {
            control: false,
            description: '作業手順',
            table: {
                category: 'data',
                type: { summary: 'StepSummary[]' }
            }
        }
    },
    args: {
        steps: recipeDetailSample.steps
    }
}

export default meta;
type Story = StoryObj<typeof StepList>;

export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: '<StepList steps={steps} />'
            }
        }
    }
}