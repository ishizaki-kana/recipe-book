import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/nextjs';
import { within } from '@storybook/testing-library';
import SearchAccordion from './SearchAccordion';

const categories = [
    { id: 4, name: '主菜', icon: 'meat', color: 'red' },
    { id: 3, name: '副菜', icon: 'seedling', color: 'teal' },
    { id: 1, name: '主食', icon: 'rice', color: 'orange' },
    { id: 2, name: '汁物', icon: 'soup', color: 'blue' }
]

const searchInput = { keyword: '', categoryIds: [] }

const meta: Meta<typeof SearchAccordion> = {
    title: 'Features/Recipe/Search/SearchAccordion',
    component: SearchAccordion,
    argTypes: {
        categories: {
            control: false,
            description: 'カテゴリ一覧',
            table: {
                category: 'data'
            }
        },
        searchInput: {
            control: false,
            description: '検索条件',
            table: {
                category: 'data'
            }
        },
    },
    args: { categories, searchInput },
}

export default meta;
type Story = StoryObj<typeof SearchAccordion>;

export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: `<SearchAccordion categories={categories} searchInput={searchInput} />`
            }
        }
    }
}

export const Expanded: Story = {
    parameters: {
        docs: {
            description: {
                story: '展開'
            },
            source: {
                code: `<SearchAccordion categories={categories} searchInput={{ keyword: 'キーワード', categoryIds: [1, 2] }} />`
            }
        }
    },
    args: {
        searchInput: { keyword: 'キーワード', categoryIds: [1, 2] }
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const input = await canvas.findByRole('textbox');
        expect(input).toHaveValue('キーワード');

        const mainCheckbox = await canvas.findByLabelText('主食');
        const soupCheckbox = await canvas.findByLabelText('汁物');
        expect(mainCheckbox).toBeChecked();
        expect(soupCheckbox).toBeChecked();
    }

}