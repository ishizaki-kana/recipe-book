import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, userEvent, within } from "storybook/test";
import LoginForm from "./LoginForm";


const meta: Meta<typeof LoginForm> = {
    title: 'Features/Login/LoginForm',
    component: LoginForm
}

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {}

export const ValidationError: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const submitButton = canvas.getByRole('button', { name: 'ログイン' });
        await userEvent.click(submitButton);

        const userIdError = canvas.getByLabelText('ユーザーID').closest('.MuiFormControl-root')?.querySelector('[id$="-helper-text"]');
        const passwordError = canvas.getByLabelText('パスワード').closest('.MuiFormControl-root')?.querySelector('[id$="-helper-text"]');

        expect(userIdError).toHaveTextContent('入力してください');
        expect(passwordError).toHaveTextContent('入力してください');
    }
}