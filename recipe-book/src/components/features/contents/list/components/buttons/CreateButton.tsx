'use client'
import Modal from "@/components/ui/dialog/Modal";
import Alert from "@/components/ui/feedback/Alert";
import TextBox from "@/components/ui/form/input/TextBox";
import SelectBox, { SelectItem } from "@/components/ui/form/select/SelectBox";
import { ERROR_MESSAGES } from "@/lib/constants/messages";
import { zodResolver } from "@hookform/resolvers/zod";
import AddIcon from "@mui/icons-material/Add";
import { Box, Stack } from "@mui/material";
import { ListCategory } from "@prisma/client";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { createSchema } from "../../schema";
import { CreateFormInput } from "../../type";
import ListButton from "./ListButton";

// TODO カテゴリの選択をアイテム名から推測して自動でできるといい

export default function CreateButton({
    listCategories,
    createItemRemote,
    isMobile
}: {
    listCategories: ListCategory[]
    createItemRemote: (item: CreateFormInput) => void
    isMobile: boolean
}) {

    const {
        control,
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<CreateFormInput>({
        resolver: zodResolver(createSchema)
    });

    const categories: SelectItem[] = listCategories.map((category) => ({
        label: category.name,
        value: category.id.toString()
    }));

    // 開閉状態管理
    const [open, setOpen] = useState(false);
    // エラー管理
    const [error, setError] = useState<string | null>(null);

    // クリックイベント
    const onSubmit = async (data: CreateFormInput) => {
        try {

            // リストアイテム追加
            createItemRemote(data);

            reset();        // 入力値リセット
            setError(null);     // エラーメッセージクリア
            setOpen(false);     // ダイアログ非表示
        } catch (e) {
            const mag = e instanceof Error ? e.message : ERROR_MESSAGES.UNKNOWN_ERROR;
            setError(mag);
        }
    }

    return (
        <>
            <ListButton
                text={"項目を追加"}
                icon={<AddIcon />}
                isMobile={isMobile}
                onClick={() => setOpen(true)} />

            <Modal
                open={open}
                disableBackDropClick
                title="リストアイテム追加"
                loading={isSubmitting}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: handleSubmit(onSubmit)
                    }
                }}
                handleClose={() => setOpen(false)}>

                <Box sx={{ px: 3, pt: 4, pb: 2 }}>

                    {/* エラーメッセージ */}
                    <Alert severity="error" visible={!!error}>{error}</Alert>

                    {/* フォーム */}
                    <Stack gap={1}>
                        <Controller name="categoryId" control={control} render={({ field, fieldState }) => (
                            <SelectBox
                                id="category"
                                label="カテゴリー"
                                value={field.value?.toString() || '0'}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                items={categories}
                                onChange={(e) => {
                                    const value = Number((e.target as HTMLSelectElement).value);
                                    field.onChange(value);
                                }}
                            />)} />
                        <Box display={"flex"} gap={2}>
                            <TextBox
                                label="アイテム名"
                                width={"70%"}
                                {...register('name')}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                            <TextBox
                                label="数量"
                                width={"30%"}
                                {...register('volume')}
                                error={!!errors.volume}
                                helperText={errors.volume?.message}
                            />
                        </Box>
                    </Stack>
                </Box>
            </Modal>
        </>
    );
}