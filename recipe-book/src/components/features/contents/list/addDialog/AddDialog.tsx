'use client'
import Dialog from "@/components/layout/dialog/Dialog";
import Alert from "@/components/ui/alert/Alert";
import Button from "@/components/ui/button/button/Button";
import TextBox from "@/components/ui/input/text/TextBox";
import SelectBox, { SelectItem } from "@/components/ui/select/SelectBox";
import { ListCategory } from "@/generated/prisma";
import { apiPost } from "@/lib/fetch";
import { ERROR_MESSAGES } from "@/lib/messages";
import { zodResolver } from "@hookform/resolvers/zod";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
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
    listCategories
}: {
    listCategories: ListCategory[]
}) {

    const router = useRouter();

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
        label: category.categoryName,
        value: category.listCategoryId.toString()
    }));

    // 開閉状態管理
    const [open, setOpen] = useState(false);
    // エラー管理
    const [error, setError] = useState<string | null>(null);

    // フォーム送信イベント
    const onSubmit = async (data: AddDialogInput) => {
        try {
            await apiPost('/list-item/create', { data: data });

            reset();        // 入力値リセット
            router.refresh();       // リスト再読み込み
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