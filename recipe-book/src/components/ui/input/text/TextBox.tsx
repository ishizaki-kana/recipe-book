import { Box, FilledInput, FormControl, FormControlPropsSizeOverrides, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from "react";

/**
 * テキスト入力ボックス
 * 
 * @param param.id ID
 * @param param.name 名前
 * @param param.label ラベル
 * @param param.type 種別
 * @param param.variant バリエーション
 * @param param.size 大きさ
 * @param param.width 横幅
 * @param param.required 入力必須
 * @param param.disabled 状態
 * @param param.readOnly 読み取り専用
 * @param param.error エラー
 * @param param.helperText ヘルパーテキスト
 * @param param.multiline 複数行
 * @param param.rows 行数 multiline = 'true' のときのみ有効
 * @param param.startAdornment 装飾（左）
 * @param param.endAdornment 装飾（右）
 * @param param.onChange 入力値変更イベント
 * @returns テキスト入力ボックス
 */
export default function TextBox({
    id,
    name,
    label,
    type,
    variant = 'outlined',
    size,
    width,
    required,
    disabled,
    readOnly,
    error,
    helperText,
    multiline,
    rows,
    startAdornment,
    endAdornment,
    onChange
}: {
    id?: string
    name?: string
    label?: string
    type?: HTMLInputTypeAttribute | undefined
    variant?: 'outlined' | 'filled' | 'standard' | undefined
    size?: OverridableStringUnion<"small" | "medium", FormControlPropsSizeOverrides> | undefined
    width?: string | number | undefined
    required?: boolean | undefined
    disabled?: boolean | undefined
    readOnly?: boolean | undefined
    error?: boolean | undefined
    helperText?: ReactNode
    multiline?: boolean | undefined
    rows?: string | number | undefined
    startAdornment?: any
    endAdornment?: any
    onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
}) {

    let input: ReactNode;

    if (variant === 'outlined') {
        input = (
            <TextField
                id={id}
                name={name}
                label={label}
                variant={variant}
                type={type}
                required={required}
                disabled={disabled}
                error={error}
                size={size}
                fullWidth
                helperText={helperText}
                slotProps={{
                    input: {
                        readOnly: readOnly,
                        startAdornment: startAdornment,
                        endAdornment: endAdornment
                    }
                }}
                onChange={onChange} />
        )
    } else {
        const inputProps = {
            id: id,
            name: name,
            type: type,
            readOnly: readOnly,
            error: error,
            helperText: helperText,
            multiline: multiline,
            rows: rows,
            startAdornment: startAdornment,
            endAdornment: endAdornment,
            onChange: onChange
        }

        input = (
            <FormControl
                variant={variant}
                disabled={disabled}
                error={error}
                size={size}
                fullWidth
            >
                {label && (
                    <InputLabel htmlFor={id} required={required}>
                        {label}
                    </InputLabel>
                )}

                {variant == 'filled' && (
                    <FilledInput {...inputProps} />
                )}

                {variant == 'standard' && (
                    <Input {...inputProps} />
                )}

                {helperText && (
                    <FormHelperText id={`${id}-helper-text`}>
                        {helperText}
                    </FormHelperText>
                )}

            </FormControl>
        )
    }

    return (
        <Box width={width}>
            {input}
        </Box>
    )
}