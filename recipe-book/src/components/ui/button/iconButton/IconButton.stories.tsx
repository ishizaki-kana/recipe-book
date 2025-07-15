import { disableAllArgTypes } from "@/stories/utils";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/material";
import { Meta, StoryObj } from "@storybook/nextjs";
import IconButton from "./IconButton";

const meta: Meta<typeof IconButton> = {
    title: 'UI/Button/IconButton',
    component: IconButton,
    argTypes: {
        icon: {
            control: false,
            description: 'アイコン',
            table: {
                category: 'props'
            }
        },
        color: {
            options: ['inherit', 'default', 'primary', 'secondary', 'error', 'info', 'success', 'warning', 'ui'],
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
        edge: {
            options: [false, 'start', 'end'],
            control: { type: 'select' },
            description: 'エッジ（paddingの打ち消し）',
            table: {
                category: 'props',
                defaultValue: { summary: 'false' }
            }
        },
        sx: {
            control: false,
            description: 'スタイルのカスタマイズ',
            table: {
                category: 'props'
            }
        },
        tooltip: {
            control: { type: 'boolean' },
            description: 'ツールチップの表示状態',
            table: {
                category: 'tooltip props',
                defaultValue: { summary: 'false' }
            }
        },
        tipTitle: {
            control: { type: 'text' },
            description: 'ツールチップのタイトル',
            table: {
                category: 'tooltip props'
            }
        },
        tipPlacement: {
            options: ['bottom', 'left', 'right', 'top'],
            control: { type: 'select' },
            description: 'ツールチップの配置',
            table: {
                category: 'tooltip props',
                defaultValue: { summary: 'bottom' }
            }
        },
        tipOffset: {
            control: { type: 'object' },
            description: 'ツールチップの距離',
            table: {
                category: 'tooltip props',
                defaultValue: { summary: '[0, 0]' }
            }
        },
        ariaLabel: {
            control: false,
            description: 'アクセシビリティラベル',
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
        },
        onMouseDown: {
            control: false,
            action: 'mouseDown',
            description: 'マウスダウンイベント',
            table: {
                category: 'events'
            }
        },
        onMouseUp: {
            control: false,
            action: 'mouseUp',
            description: 'マウスアップイベント',
            table: {
                category: 'events'
            }
        }
    },
    args: {
        icon: <DeleteIcon fontSize="inherit" />,
        color: 'ui',
    }
}

export default meta;
type Story = StoryObj<typeof IconButton>;
type IconButtonProps = typeof meta.args;

export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: `
                import IconButton from '@/components/ui/button/iconButton/IconButton';
                import DeleteIcon from '@mui/icons-material/Delete';
                
                <IconButton
                    icon={<DeleteIcon fontSize="inherit" />}
                    color="ui"
                    ariaLabel="Delete"
                />
                `.trim()
            }
        }
    }
};

export const Tooltip: Story = {
    args: {
        tooltip: true,
        tipTitle: 'アイコンボタン',
        tipPlacement: 'bottom',
    },
    parameters: {
        docs: {
            description: {
                story: 'ツールチップ付き'
            },
            source: {
                code: `
                import IconButton from '@/components/ui/button/iconButton/IconButton';
                import DeleteIcon from '@mui/icons-material/Delete';
                
                <IconButton
                    icon={<DeleteIcon fontSize="inherit" />}
                    color="ui"
                    tooltip={true}
                    tipTitle="アイコンボタン"
                    tipPlacement="bottom"
                />
                `.trim()
            }
        }
    }
}

export const Sizes: Story = {
    render: (args) => (
        <Stack direction='row' alignItems='center' gap={2}>
            <IconButton {...args} size='small' />
            <IconButton {...args} size='medium' />
            <IconButton {...args} size='large' />
        </Stack>
    ),
    parameters: {
        docs: {
            description: {
                story: '大きさ'
            },
            source: {
                code: `
                import IconButton from '@/components/ui/button/iconButton/IconButton';
                import DeleteIcon from '@mui/icons-material/Delete';
                
                <Stack direction='row' alignItems='center' gap={2}>
                    <IconButton icon={<DeleteIcon fontSize="inherit" />} size='small' />
                    <IconButton icon={<DeleteIcon fontSize="inherit" />} size='medium' />
                    <IconButton icon={<DeleteIcon fontSize="inherit" />} size='large' />
                </Stack>
                `.trim()
            }
        }
    },
    argTypes: disableAllArgTypes<IconButtonProps>(meta.argTypes)
}