import { Box } from "@mui/material"
import MuiButton, { ButtonPropsColorOverrides, ButtonPropsSizeOverrides } from "@mui/material/Button"
import { OverridableStringUnion } from "@mui/types"
import { MouseEventHandler, ReactNode } from "react"

/**
 * ボタン
 * 
 * @param param.children 子要素
 * @param param.variant バリエーション
 * @param param.color 色
 * @param param.startIcon アイコン（左）
 * @param param.endIcon アイコン（右）
 * @param param.disabled 状態
 * @param param.onClick クリックイベント
 * @returns ボタン
 */
export default function Button({
    children,
    variant,
    type,
    color,
    size,
    p,
    pt,
    pb,
    pr,
    pl,
    startIcon,
    endIcon,
    disabled,
    loading,
    onClick
}: {
    children: ReactNode
    variant?: 'text' | 'contained' | 'outlined',
    type?: "button" | "submit" | "reset" | undefined,
    color?: OverridableStringUnion<"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning", ButtonPropsColorOverrides> | undefined
    size?: OverridableStringUnion<"small" | "medium" | "large", ButtonPropsSizeOverrides> | undefined
    p?: number | string
    pt?: number | string
    pb?: number | string
    pr?: number | string
    pl?: number | string
    startIcon?: ReactNode
    endIcon?: ReactNode
    disabled?: boolean
    loading?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}) {

    return (
        <Box
            display={"flex"} alignItems={"center"} justifyContent={"center"}
            p={p} pt={pt} pb={pb} pr={pr} pl={pl}>

            <MuiButton
                variant={variant ? variant : 'contained'}
                type={type}
                color={color}
                size={size}
                startIcon={startIcon}
                endIcon={endIcon}
                disabled={disabled ? disabled : false}
                loading={loading}
                onClick={onClick}>
                {children}
            </MuiButton>
        </Box>
    )
}