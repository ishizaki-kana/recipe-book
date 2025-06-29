'use client'
import Dialog from "@/components/layout/dialog/Dialog";
import Alert from "@/components/ui/alert/Alert";
import Button from "@/components/ui/button/Button";
import TextBox from "@/components/ui/input/TextBox";
import SelectBox, { SelectItem } from "@/components/ui/select/SelectBox";
import { apiPost } from "@/lib/fetch";
import { ERROR_MESSAGES } from "@/lib/messages";
import { zodResolver } from "@hookform/resolvers/zod";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import { ListCategory, ListItem } from "@prisma/client";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

// TODO カテゴリの選択をアイテム名から推測して自動でできるといい

//バリデーションスキーマ
const schema = z.object({
    itemName: z.string().min(1, '入力してください'),
    volume: z.string(),
    listCategoryId: z.coerce.number().min(1, '選択してください'),
});

// 入力型推論
type AddDialogInput = z.infer<typeof schema>;

export default function AddDialog({
    listCategories,
    addListItem
}: {
    listCategories: ListCategory[]
    addListItem: (item: ListItem) => void
}) {

    const {
        control,
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<AddDialogInput>({
        resolver: zodResolver(schema)
    });

    const categories: SelectItem[] = listCategories.map((category) => ({
        label: category.name,
        value: category.id.toString()
    }));

    // 開閉状態管理
    const [open, setOpen] = useState(false);
    // エラー管理
    const [error, setError] = useState<string | null>(null);

    // フォーム送信イベント
    const onSubmit = async (data: AddDialogInput) => {
        try {
            // リストアイテム追加
            const item: ListItem = await apiPost('/list-item/create', { data: data });
            addListItem(item)

            reset();        // 入力値リセット
            setError(null);     // エラーメッセージクリア
            setOpen(false);     // ダイアログ非表示
        } catch (e) {
            console.error(e);

            const mag = e instanceof Error ? e.message : ERROR_MESSAGES.UNKNOWN_ERROR;
            setError(mag);
        }
    }

    return (
        <>
            <Button variant="outlined" startIcon={<AddIcon />} onClick={() => setOpen(true)}>
                項目を追加
            </Button>

            <Dialog
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
                    <Box display={"flex"} flexDirection={"column"} gap={1}>
                        <Controller name="listCategoryId" control={control} render={({ field, fieldState }) => (
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
                                {...register('itemName')}
                                error={!!errors.itemName}
                                helperText={errors.itemName?.message}
                            />
                            <TextBox
                                label="数量"
                                width={"30%"}
                                {...register('volume')}
                                error={!!errors.volume}
                                helperText={errors.volume?.message}
                            />
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </>
    );
}