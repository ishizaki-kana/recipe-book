import { Tooltip } from "@mui/material"
import MuiIconButton, { IconButtonPropsColorOverrides, IconButtonPropsSizeOverrides } from "@mui/material/IconButton"
import { Theme } from "@mui/material/styles"
import { Box, SxProps } from "@mui/system"
import { OverridableStringUnion } from "@mui/types"
import { MouseEventHandler, ReactNode } from "react"

/**
 * アイコンボタン
 * 
 * @param param.children 子要素
 * @param param.color 色
 * @param param.size 大きさ
 * @param param.edge マージンの打ち消し
 * @param param.sx スタイル
 * @param param.tooltip ツールチップの有無
 * @param param.tipTitle ツールチップのテキスト
 * @param param.tipPlacement ツールチップの表示場所
 * @param param.tipOffset ツールチップの表示位置
 * @param param.ariaLabel ARIAラベル
 * @param param.onClick クリックイベント
 * @returns アイコンボタン
 */
export default function IconButton({
    icon,
    color,
    size,
    edge,
    sx,
    tooltip,
    tipTitle,
    tipPlacement,
    tipOffset,
    ariaLabel,
    onClick,
    onMouseDown,
    onMouseUp
}: {
    icon: ReactNode
    color?: OverridableStringUnion<"inherit" | "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning", IconButtonPropsColorOverrides> | undefined
    size?: OverridableStringUnion<"small" | "medium" | "large", IconButtonPropsSizeOverrides> | undefined
    edge?: false | "start" | "end" | undefined
    sx?: SxProps<Theme> | undefined
    tooltip?: boolean | undefined
    tipTitle?: string | undefined
    tipPlacement?: 'bottom' | 'left' | 'right' | 'top' | undefined
    tipOffset?: [number, number]
    ariaLabel?: string | undefined
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    onMouseDown?: MouseEventHandler<HTMLButtonElement> | undefined
    onMouseUp?: MouseEventHandler<HTMLButtonElement> | undefined
}) {

    const iconButton = (
        <MuiIconButton
            color={color ? color : 'primary'}
            size={size}
            edge={edge}
            sx={sx}
            aria-label={ariaLabel}
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}>
            {icon}
        </MuiIconButton>
    );

    if (tooltip) {
        return (
            <Box>
                <Tooltip
                    title={tipTitle}
                    placement={tipPlacement}
                    arrow
                    slotProps={{
                        popper: {
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: tipOffset
                                    }
                                }
                            ]
                        }
                    }}>
                    {iconButton}
                </Tooltip>
            </Box>
        )
    } else {
        return iconButton
    }
}