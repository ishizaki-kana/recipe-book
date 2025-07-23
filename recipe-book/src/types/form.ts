import { Control, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export type FormReturn<T extends FieldValues> = {
    register: UseFormRegister<T> | (() => ({})),
    control?: Control<T, any, T>,
    submitError: string | null,
    formErrors?: FieldErrors<T>,
    loading: boolean,
    onSubmit: (e?: React.FormEvent) => Promise<void> | void,
}