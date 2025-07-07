'use client'
import Button from "@/components/ui/button/Button";
import Alert from "@/components/ui/feedback/Alert";
import PasswordBox from "@/components/ui/form/input/PasswordBox";
import TextBox from "@/components/ui/form/input/TextBox";
import { ERROR_MESSAGES } from "@/lib/constants/messages";
import { apiPost } from "@/lib/fetch";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// バリデーションスキーマ
const schema = z.object({
    userId: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),
    password: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD)
});

// 入力型推論
type LoginFormInput = z.infer<typeof schema>;

export default function LoginForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LoginFormInput>({
        resolver: zodResolver(schema)
    });

    // エラー管理
    const [error, setError] = useState<string | null>(null);

    // フォーム送信イベント
    const onSubmit = async (data: LoginFormInput) => {
        try {
            await apiPost('/auth/login', data);
            router.push('/recipe');
        } catch (e) {
            const msg = e instanceof Error ? e.message : ERROR_MESSAGES.UNKNOWN_ERROR;
            setError(msg);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box display={"flex"} flexDirection={"column"}>

                {/* エラーメッセージ */}
                <Alert severity="error" visible={!!error}>{error}</Alert>

                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}
                    gap={1}>

                    <TextBox
                        label="ユーザーID"
                        width={'100%'}
                        {...register('userId')}
                        error={!!errors.userId}
                        helperText={errors.userId?.message} />
                    <PasswordBox
                        label="パスワード"
                        width={'100%'}
                        {...register('password')}
                        error={!!errors.password}
                        helperText={errors.password?.message} />

                    <Button
                        type="submit"
                        loading={isSubmitting}
                        pt={1} >
                        ログイン
                    </Button>
                </Box>
            </Box>
        </form>
    )
}