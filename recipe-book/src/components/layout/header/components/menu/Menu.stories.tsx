import { User } from '@prisma/client';
import { Meta, StoryObj } from '@storybook/nextjs';
import Menu from './Menu';

const mockUser: User = {
    id: '1',
    name: 'test user',
    password: 'password'
}

const meta: Meta<typeof Menu> = {
    title: 'Layout/Header/Menu',
    component: Menu,
    argTypes: {
        user: {
            description: 'ユーザー情報'
        }
    },
    args: {
        user: mockUser
    }
}

export default meta;
type Story = StoryObj<typeof Menu>

export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: '<Menu user={user} />'
            }
        }
    },
}