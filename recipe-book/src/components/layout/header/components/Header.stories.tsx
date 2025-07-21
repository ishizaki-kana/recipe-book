import { User } from '@prisma/client';
import { Meta, StoryObj } from '@storybook/nextjs';
import Header from './Header';

const mockUser: User = {
    id: '1',
    name: 'test user',
    password: 'password'
}

const meta: Meta<typeof Header> = {
    title: 'Layout/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        user: {
            description: 'ユーザー情報',
            table: {
                category: 'data'
            }
        }
    },
    args: {
        user: mockUser
    }
}

export default meta;
type Story = StoryObj<typeof Header>

export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: '<Header user={user} />'
            }
        }
    },
}