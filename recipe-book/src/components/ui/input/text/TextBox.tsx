import { Box, FilledInput, FormControl, FormControlPropsSizeOverrides, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode, Ref } from "react";

/**
 * テキスト入力ボックス
 * 
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
    ref,
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
    startAdornment?: ReactNode | string | number
    endAdornment?: ReactNode | string | number
    ref?: Ref<any> | undefined
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
                inputRef={ref}
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
            inputRef: ref,
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