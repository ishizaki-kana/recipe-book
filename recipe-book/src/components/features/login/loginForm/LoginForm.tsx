'use client'
import CenteredContainer from "@/components/layout/container/center/CenteredContainer";
import Button from "@/components/ui/button/button/Button";
import PasswordBox from "@/components/ui/input/password/PasswordBox";
import TextBox from "@/components/ui/input/text/TextBox";
import { useAppContext } from "@/hooks/useAppContext";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface UserFormData {
    userId: string,
    password: string
}

interface FormErrors {
    userId?: string,
    password?: string
}

export default function LoginForm() {
    const router = useRouter();
    const { setLoginUser } = useAppContext();

    //フォーム入力値管理
    const [form, setForm] = useState<UserFormData>({
        userId: '',
        password: ''
    });

    /**
     * フォーム変更イベント
     * 
     * @param e イベント
     * @return {void}
     */
    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    /**
     * フォーム送信イベント
     * 
     * @returns {void}
     */
    const handleSubmit = () => {

        //TODO ユーザー名
        setLoginUser({ userId: form.userId, name: 'テスト' });
        router.push(`/${form.userId}/recipe`);
    }


    return (
        <CenteredContainer direction="column" gap={2}>
            <TextBox
                name="userId"
                label="ユーザーID"
                width={'100%'}
                onChange={handleForm} />
            <PasswordBox
                name="password"
                label="パスワード"
                width={'100%'}
                onChange={handleForm} />

            <Button onClick={handleSubmit} pt={1}>
                ログイン
            </Button>
        </CenteredContainer>
    )
}