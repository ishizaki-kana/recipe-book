import { disableAllArgTypes } from '@/stories/utils';
import EditIcon from '@mui/icons-material/Edit';
import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/nextjs';
import Button from "./Button";

const meta: Meta<typeof Button> = {
    title: 'UI/Button/Button',
    component: Button,
    argTypes: {
        children: {
            control: { type: 'text' },
            description: 'ラベル',
            table: {
                category: 'props'
            }
        },
        variant: {
            options: ['contained', 'outlined', 'text'],
            control: { type: 'inline-radio' },
            description: '見た目',
            table: {
                category: 'props',
                defaultValue: { summary: 'contained' }
            }
        },
        type: {
            options: ['button', 'submit', 'reset'],
            control: { type: 'inline-radio' },
            description: '種類',
            table: {
                category: 'props',
                defaultValue: { summary: 'button' }
            }
        },
        color: {
            options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit'],
            control: { type: 'select' },
            description: '色',
            table: {
                category: 'props',
                defaultValue: { summary: 'primary' }
            }
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'inline-radio' },
            description: '大きさ',
            table: {
                category: 'props',
                defaultValue: { summary: 'medium' }
            }
        },
        p: {
            options: [0, 1, 2, 3, '10px', '1rem', 'auto'],
            control: { type: 'select' },
            description: 'ボタンを内包するコンテナの余白',
            table: {
                category: 'container props'
            }
        },
        pt: {
            options: [0, 1, 2, 3, '10px', '1rem', 'auto'],
            control: { type: 'select' },
            description: 'ボタンを内包するコンテナの上側の余白',
            table: {
                category: 'container props'
            }
        },
        pb: {
            options: [0, 1, 2, 3, '10px', '1rem', 'auto'],
            control: { type: 'select' },
            description: 'ボタンを内包するコンテナの下側の余白',
            table: {
                category: 'container props'
            }
        },
        pr: {
            options: [0, 1, 2, 3, '10px', '1rem', 'auto'],
            control: { type: 'select' },
            description: 'ボタンを内包するコンテナの右側の余白',
            table: {
                category: 'container props'
            }
        },
        pl: {
            options: [0, 1, 2, 3, '10px', '1rem', 'auto'],
            control: { type: 'select' },
            description: 'ボタンを内包するコンテナの左側の余白',
            table: {
                category: 'container props'
            }
        },
        disabled: {
            control: { type: 'boolean' },
            description: '無効',
            table: {
                category: 'props'
            }
        },
        loading: {
            control: { type: 'boolean' },
            description: 'ローディング',
            table: {
                category: 'props'
            }
        },
        startIcon: {
            control: false,
            description: '右側アイコン',
            table: {
                category: 'props'
            }
        },
        endIcon: {
            control: false,
            description: '左側アイコン',
            table: {
                category: 'props'
            }
        },
        onClick: {
            control: false,
            action: 'clicked',
            description: 'クリックイベント',
            table: {
                category: 'events'
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Button>;
type ButtonArgs = typeof meta.args;

export const Default: Story = {
    args: {
        children: 'Button'
    },
    parameters: {
        docs: {
            source: {
                code: `
                import Button from '@/components/ui/button/button/Button';

                <Button>Button</Button>
                `.trim()
            }
        }
    }
};

export const Variants: Story = {
    render: (args) => (
        <Stack direction='row' gap={2}>
            <Button {...args} variant='contained'>contained</Button>
            <Button {...args} variant='outlined'>outlined</Button>
            <Button {...args} variant='text'>text</Button>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: '見た目'
            },
            source: {
                code: `
                import Button from '@/components/ui/button/button/Button';

                <Stack direction='row' alignItems='center' gap={2}>
                    <Button variant='contained'>contained</Button>
                    <Button variant='outlined'>outlined</Button>
                    <Button variant='text'>text</Button>
                </Stack>
                `.trim()
            }
        }
    },
    argTypes: disableAllArgTypes<ButtonArgs>(meta.argTypes)
};

export const Colors: Story = {
    render: (args) => (
        <Stack direction='row' gap={2}>
            <Button {...args} color='primary'>primary</Button>
            <Button {...args} color='secondary'>secondary</Button>
            <Button {...args} color='error'>error</Button>
            <Button {...args} color='warning'>warning</Button>
            <Button {...args} color='info'>info</Button>
            <Button {...args} color='success'>success</Button>
            <Button {...args} color='inherit'>inherit</Button>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: '色'
            },
            source: {
                code: `
                import Button from '@/components/ui/button/button/Button';

                <Stack direction='row' alignItems='center' gap={2}>
                    <Button color='primary'>primary</Button>
                    <Button color='secondary'>secondary</Button>
                    <Button color='error'>error</Button>
                    <Button color='warning'>warning</Button>
                    <Button color='info'>info</Button>
                    <Button color='success'>success</Button>
                    <Button color='inherit'>inherit</Button>
                </Stack>
                `.trim()
            }
        }
    },
    argTypes: disableAllArgTypes<ButtonArgs>(meta.argTypes)
}

export const Sizes: Story = {
    render: (args) => (
        <Stack direction='row' gap={2}>
            <Button {...args} size='small'>small</Button>
            <Button {...args} size='medium'>medium</Button>
            <Button {...args} size='large'>large</Button>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: '大きさ'
            },
            source: {
                code: `
                import Button from '@/components/ui/button/button/Button';
                
                <Stack direction='row' alignItems='center' gap={2}>
                    <Button size='small'>small</Button>
                    <Button size='medium'>medium</Button>
                    <Button size='large'>large</Button>
                </Stack>
                `.trim()
            }
        }
    },
    argTypes: disableAllArgTypes<ButtonArgs>(meta.argTypes)
};

export const IconButtons: Story = {
    render: (args) => (
        <Stack direction='row' gap={2}>
            <Button {...args} startIcon={<EditIcon />}>startIcon</Button>
            <Button {...args} endIcon={<EditIcon />}>endIcon</Button>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: 'アイコンボタン'
            },
            source: {
                code: `
                import Button from '@/components/ui/button/button/Button';
                import EditIcon from '@mui/icons-material/Edit';

                <Stack direction='row' alignItems='center' gap={2}>
                    <Button startIcon={<EditIcon />}>startIcon</Button>
                    <Button endIcon={<EditIcon />}>endIcon</Button>
                </Stack>
                `.trim()
            }
        }
    },
    argTypes: disableAllArgTypes<ButtonArgs>(meta.argTypes)
};

export const Status: Story = {
    render: (args) => (
        <Stack direction='row' gap={2}>
            <Button {...args} disabled>Disabled</Button>
            <Button {...args} loading>Loading</Button>
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: '状態（無効、ローディング）'
            },
            source: {
                code: `
                import Button from '@/components/ui/button/button/Button';

                <Stack direction='row' alignItems='center' gap={2}>
                    <Button disabled>disabled</Button>
                    <Button loading>loading</Button>
                </Stack>
                `.trim()
            }
        }
    }
};