import { FormReturn } from '@/types/form';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/nextjs';
import { within } from '@storybook/testing-library';
import { useForm } from 'react-hook-form';
import { RecipeSearchInput } from '../../../types';
import SearchForm from './SearchForm';

const categories = [
    { id: 4, name: '主菜', icon: 'meat', color: 'red' },
    { id: 3, name: '副菜', icon: 'seedling', color: 'teal' },
    { id: 1, name: '主食', icon: 'rice', color: 'orange' },
    { id: 2, name: '汁物', icon: 'soup', color: 'blue' }
]

const searchInput = { keyword: '', categoryIds: [] }

const meta: Meta<typeof SearchForm> = {
    title: 'Features/Recipe/Search/Form/SearchForm',
    component: SearchForm,
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
        useRecipeSearchForm: {
            description: 'Storybook テスト用コールバック',
            table: {
                defaultValue: { summary: 'useRecipeSearchForm' },
                category: '_',
            }
        }
    },
    args: { categories, searchInput },
}

export default meta;
type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: '<SearchForm categories={categories} searchInput={searchInput} />'
            }
        }
    }
}

export const SubmitError: Story = {
    parameters: {
        docs: {
            description: {
                story: '送信エラー'
            }
        }
    },
    args: {
        useRecipeSearchForm: ({ searchInput }) => {
            const methods = useForm<RecipeSearchInput>({
                defaultValues: searchInput
            });
            return {
                register: methods.register,
                submitError: '送信エラー',
                control: methods.control,
                loading: false,
                onSubmit: () => ({})
            } as FormReturn<RecipeSearchInput>
        },
        searchInput,
        categories
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const submitError = await canvas.findByText('送信エラー');
        expect(submitError).toBeInTheDocument();
    }
}