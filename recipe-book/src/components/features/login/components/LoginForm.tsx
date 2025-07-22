'use client'
import Button from '@/components/ui/button/button/Button';
import Alert from '@/components/ui/feedback/alert/Alert';
import PasswordBox from '@/components/ui/form/input/password/PasswordBox';
import TextBox from '@/components/ui/form/input/text/TextBox';
import { Stack } from '@mui/material';
import { UseLoginFormReturn, useLoginForm as defaultUseLoginForm } from '../hooks/useLoginForm';

/**
 * ログインフォーム
 */
export default function LoginForm({
    useLoginForm = defaultUseLoginForm
}: {
    useLoginForm?: () => UseLoginFormReturn
}) {
    const { register, onSubmit, submitError, formErrors, isSubmitting, } = useLoginForm();

    return (
        <form onSubmit={onSubmit}>
            <Stack>

                {/* エラーメッセージ */}
                <Alert severity='error' visible={!!submitError}>{submitError}</Alert>

                {/* フィールド */}
                <Stack justifyContent='center' gap={1}>
                    <TextBox
                        label='ユーザーID'
                        width='100%'
                        {...register('userId')}
                        error={!!formErrors.userId}
                        helperText={formErrors.userId?.message}
                        data-testid='user-id-input' />
                    <PasswordBox
                        label='パスワード'
                        width='100%'
                        {...register('password')}
                        error={!!formErrors.password}
                        helperText={formErrors.password?.message} />

                    <Button
                        type='submit'
                        loading={isSubmitting}
                        pt={1}>
                        ログイン
                    </Button>
                </Stack>
            </Stack>
        </form>
    )
}