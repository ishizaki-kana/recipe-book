import { mockRouter } from '@/stories/mocks/router';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { expect, userEvent, within } from 'storybook/internal/test';
import { fn } from 'storybook/test';
import LogoutButton from './LogoutButton';

const logoutSpy = fn();

const meta: Meta<typeof LogoutButton> = {
    title: 'Components/Button/LogoutButton',
    component: LogoutButton,
    parameters: {
        nextRouter: {
            Provider: RouterContext.Provider,
            value: mockRouter,
        },
    },
    decorators: [
        (Story) => (
            <AppRouterContext.Provider value={mockRouter}>
                <Story />
            </AppRouterContext.Provider>
        ),
    ],
    args: {
        onLogout: logoutSpy,
    }
};

export default meta;

type Story = StoryObj<typeof LogoutButton>;

export const Default: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = await canvas.findByRole('button', { name: 'ログアウト' });

        await userEvent.click(button);
        expect(logoutSpy).toHaveBeenCalled();
    },
};
