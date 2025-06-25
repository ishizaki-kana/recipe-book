'use client'
import IconButton from "@/components/ui/button/IconButton";
import TextBox from "@/components/ui/input/TextBox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { FormControlPropsSizeOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { ChangeEventHandler, ReactNode, Ref, useState } from "react";

/**
 * パスワード入力ボックス
 * 
 * @returns パスワード入力ボックス
 */
export default function PasswordBox({
    id,
    name,
    label,
    variant,
    size,
    width,
    disabled,
    error,
    helperText,
    ref,
    onChange
}: {
    id?: string
    name?: string
    label?: string
    variant?: 'outlined' | 'filled' | 'standard' | undefined
    size?: OverridableStringUnion<"small" | "medium", FormControlPropsSizeOverrides> | undefined
    width?: number | string
    disabled?: boolean | undefined
    error?: boolean | undefined
    helperText?: ReactNode
    ref?: Ref<HTMLInputElement> | undefined
    onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
}) {

    //パスワード表示状態管理
    const [showPassword, setShowPassword] = useState(false);

    /**
     * アイコンボタンクリックイベント
     * 
     * パスワードの表示状態を切り替えます。
     * 
     * @returns {void}
     */
    const handleClickIcon = () => setShowPassword(show => !show);

    /**
     * アイコンボタンマウスダウン・アップイベント
     * 
     * デフォルトのフォーカス移動を防ぎ、テキストフィールドからフォーカスが移動しないようにします。
     * 
     * @param e イベント
     * @returns {void}
     */
    const handleMouseDownAndUp = (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault();

    return (
        <TextBox
            id={id}
            name={name}
            label={label}
            type={showPassword ? 'text' : 'password'}
            size={size}
            width={width}
            variant={variant}
            disabled={disabled}
            error={error}
            helperText={helperText}
            endAdornment={
                <IconButton
                    icon={showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    color="default"
                    onClick={handleClickIcon}
                    onMouseDown={handleMouseDownAndUp}
                    onMouseUp={handleMouseDownAndUp}
                />
            }
            ref={ref}
            onChange={onChange}
        />
    )
}