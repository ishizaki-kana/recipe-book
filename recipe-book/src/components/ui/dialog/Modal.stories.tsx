import { disableAllArgTypes } from "@/stories/utils";
import { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import Button from "../button/button/Button";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
    title: 'UI/Dialog/Modal',
    component: Modal,
    argTypes: {
        children: {
            control: { type: 'text' },
            description: '内容',
            table: {
                category: 'props'
            }
        },
        open: {
            control: false,
            description: '開閉状態',
            table: {
                category: 'props',
                defaultValue: { summary: 'false' }
            }
        },
        title: {
            control: { type: 'text' },
            description: 'タイトル',
            table: {
                category: 'props'
            }
        },
        hasSubmitButton: {
            control: { type: 'boolean' },
            description: '登録ボタンの表示/非表示',
            table: {
                category: 'props',
                defaultValue: { summary: 'true' }
            }
        },
        hasCancelButton: {
            control: { type: 'boolean' },
            description: 'キャンセルボタンの表示/非表示',
            table: {
                category: 'props',
                defaultValue: { summary: 'true' }
            }
        },
        disableBackDropClick: {
            control: { type: 'boolean' },
            description: 'バックドロップクリック有効状態',
            table: {
                category: 'props',
                defaultValue: { summary: 'false' }
            }
        },
        disableEscapeKeyDown: {
            control: { type: 'boolean' },
            description: 'Escキー有効状態',
            table: {
                category: 'props',
                defaultValue: { summary: 'false' }
            }
        },
        loading: {
            control: { type: 'boolean' },
            description: '送信ボタンのローディング状態',
            table: {
                category: 'submit button props',
                defaultValue: { summary: 'false' }
            }
        },
        slotProps: {
            control: false,
            description: 'スロットプロパティ',
            table: {
                category: 'props'
            }
        },
        onClose: {
            control: false,
            action: 'closed',
            description: 'モーダル非表示イベント',
            table: {
                category: 'events'
            }
        }
    },
    args: {
        title: 'modal',
        children: 'content',
    }
}

export default meta;
type Story = StoryObj<typeof Modal>;
type ModalArgs = typeof meta.args;

export const Default: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>open</Button>
                <Modal
                    {...args}
                    open={open}
                    onClose={() => setOpen(false)}>
                    {args.children}
                </Modal>
            </>
        );
    },
    parameters: {
        docs: {
            source: {
                code: `
                import { useState } from 'react';
                import Button from '@/components/ui/button/button/Button';
                import Modal form '@/components/ui/dialog/Modal';
                
                const [open, setOpen] = useState(false);

                return (
                    <>
                        <Button onClick={() => setOpen(true)}>open</Button>

                        <Modal 
                            open={open} 
                            title="Modal"
                            onClose={() => setOpen(false)}>
                            content
                        </Modal>
                    </>
                );
                `.trim(),
            }
        }
    }
}

export const ReadOnly: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>open</Button>
                <Modal
                    open={open}
                    title="Read Only Modal"
                    hasSubmitButton={false}
                    hasCancelButton={false}
                    onClose={() => setOpen(false)}>
                    read only content
                </Modal>
            </>
        );
    },
    parameters: {
        docs: {
            description: {
                story: '読み取り専用モーダル'
            },
            source: {
                code: `
                import { useState } from 'react';
                import Button from '@/components/ui/button/button/Button';
                import Modal from '@/components/ui/dialog/Modal';

                const [open, setOpen] = useState(false);

                return (
                    <>
                        <Button onClick={() => setOpen(true)}>open</Button>

                        <Modal 
                            open={open} 
                            title="Read Only Modal"
                            hasSubmitButton={false}
                            hasCancelButton={false}
                            onClose={() => setOpen(false)}>
                            read only content
                        </Modal>
                    </>
                );
                `.trim(),
            }
        }
    },
    argTypes: disableAllArgTypes<ModalArgs>(meta.argTypes)
}

export const Blocking: Story = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>open</Button>
                <Modal
                    open={open}
                    title="Blocking Modal"
                    disableBackDropClick
                    disableEscapeKeyDown
                    onClose={() => setOpen(false)}>
                    blocking content
                </Modal>
            </>
        );
    },
    parameters: {
        docs: {
            description: {
                story: 'バックドロップクリックとEscキーを無効にしたモーダル'
            },
            source: {
                code: `
                import { useState } from 'react';
                import Button from '@/components/ui/button/button/Button';
                import Modal from '@/components/ui/dialog/Modal';

                const [open, setOpen] = useState(false);

                return (
                    <>
                        <Button onClick={() => setOpen(true)}>open</Button>

                        <Modal 
                            open={open} 
                            title="Blocking Modal"
                            disableBackDropClick
                            disableEscapeKeyDown
                            onClose={() => setOpen(false)}>
                            blocking content
                        </Modal>
                    </>
                );
                `.trim(),
            }
        }
    },
    argTypes: disableAllArgTypes<ModalArgs>(meta.argTypes)
}

export const Loading: Story = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>open</Button>
                <Modal
                    open={open}
                    title="Loading Modal"
                    loading
                    onClose={() => setOpen(false)}>
                    loading content
                </Modal>
            </>
        );
    },
    parameters: {
        docs: {
            description: {
                story: 'ローディング状態のモーダル'
            },
            source: {
                code: `
                import { useState } from 'react';
                import Button from '@/components/ui/button/button/Button';
                import Modal from '@/components/ui/dialog/Modal';

                const [open, setOpen] = useState(false);

                return (
                    <>
                        <Button onClick={() => setOpen(true)}>open</Button>

                        <Modal 
                            open={open} 
                            title="Loading Modal"
                            loading
                            onClose={() => setOpen(false)}>
                            loading content
                        </Modal>
                    </>
                );
                `.trim(),
            }
        }
    },
    argTypes: disableAllArgTypes<ModalArgs>(meta.argTypes)
}