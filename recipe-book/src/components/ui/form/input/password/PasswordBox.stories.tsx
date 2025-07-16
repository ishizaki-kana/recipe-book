import { disableAllArgTypes } from "@/stories/utils";
import { Stack } from "@mui/material";
import { Meta, StoryObj } from "@storybook/nextjs";
import PasswordBox from "./PasswordBox";

const meta: Meta<typeof PasswordBox> = {
    title: 'UI/Form/Input/PasswordBox',
    component: PasswordBox,
    argTypes: {
        id: {
            control: false,
            description: 'ID',
            table: {
                category: 'props'
            }
        },
        name: {
            control: false,
            description: '名前',
            table: {
                category: 'props'
            }
        },
        label: {
            control: { type: 'text' },
            description: 'ラベル',
            table: {
                category: 'props'
            }
        },
        variant: {
            options: ['outlined', 'filled', 'standard'],
            control: { type: 'inline-radio' },
            description: '見た目',
            table: {
                category: 'props',
                defaultValue: { summary: 'outlined' }
            }
        },
        size: {
            options: ['small', 'medium'],
            control: { type: 'inline-radio' },
            description: '大きさ',
            table: {
                category: 'props',
                defaultValue: { summary: 'medium' }
            }
        },
        width: {
            control: { type: 'number' },
            description: '横幅',
            table: {
                category: 'props'
            }
        },
        disabled: {
            control: { type: 'boolean' },
            description: '無効',
            table: {
                category: 'props'
            }
        },
        error: {
            control: { type: 'boolean' },
            description: 'エラー',
            table: {
                category: 'props'
            }
        },
        helperText: {
            control: { type: 'text' },
            description: 'ヘルパーテキスト',
            table: {
                category: 'props'
            }
        },
        ref: {
            control: false,
            description: '参照',
            table: {
                category: 'props'
            }
        },
        onChange: {
            control: false,
            action: 'changed',
            description: '値変更イベント',
            table: {
                category: 'events'
            }
        }
    },
    args: {
        id: 'password',
        name: 'password',
        label: 'password'
    }
};

export default meta;
type Story = StoryObj<typeof PasswordBox>;
type PasswordBoxArgs = typeof meta.args;

export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: `
                import PasswordBox from '@/components/ui/form/input/password/PasswordBox';

                <PasswordBox id="password" name="password" label="password" />
                `.trim()
            }
        }
    }
}

export const Variants: Story = {
    render: (args) => (
        <Stack direction="row" spacing={2}>
            <PasswordBox {...args} variant='outlined' />
            <PasswordBox {...args} variant='filled' />
            <PasswordBox {...args} variant='standard' />
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: '見た目'
            },
            source: {
                code: `
                import PasswordBox from '@/components/ui/form/input/password/PasswordBox';

                <PasswordBox id="password" name="password" label="password" variant='outlined' />
                <PasswordBox id="password" name="password" label="password" variant='filled' />
                <PasswordBox id="password" name="password" label="password" variant='standard' />
                `.trim()
            }
        }
    },
    argTypes: disableAllArgTypes<PasswordBoxArgs>(meta.argTypes)
}

export const Sizes: Story = {
    render: (args) => (
        <Stack direction="row" spacing={2}>
            <PasswordBox {...args} size='small' />
            <PasswordBox {...args} size='medium' />
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: '大きさ'
            },
            source: {
                code: `
                import PasswordBox from '@/components/ui/form/input/password/PasswordBox';

                <PasswordBox id="password" name="password" label="password" size='small' />
                <PasswordBox id="password" name="password" label="password" size='medium' />
                `.trim()
            }
        }
    },
    argTypes: disableAllArgTypes<PasswordBoxArgs>(meta.argTypes)
};

export const Status: Story = {
    render: (args) => (
        <Stack direction='row' spacing={2}>
            <PasswordBox {...args} disabled />
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: '状態（無効）'
            },
            source: {
                code: `
                import PasswordBox from '@/components/ui/form/input/password/PasswordBox';

                <PasswordBox id="password" name="password" label="password" disabled />
                `.trim()
            }
        }
    },
    argTypes: disableAllArgTypes<PasswordBoxArgs>(meta.argTypes)
};

export const Error: Story = {
    render: (args) => (
        <Stack direction='row' spacing={2}>
            <PasswordBox {...args} error helperText="error message" />
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: 'エラー'
            },
            source: {
                code: `
                import PasswordBox from '@/components/ui/form/input/password/PasswordBox';

                <PasswordBox id="password" name="password" label="password" error helperText="error message" />
                `.trim()
            }
        }
    },
    argTypes: disableAllArgTypes<PasswordBoxArgs>(meta.argTypes)
}