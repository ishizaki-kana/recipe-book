import { Box, SxProps, Theme } from "@mui/material"
import { ReactNode } from "react"

export default function FlexContainer({
    children,
    direction,
    justifyContent = "center",
    alignItems = "center",
    wrap = "nowrap",
    gap,
    width = "100%",
    height = "100%",
    sx
}: {
    children: ReactNode
    direction?: 'row' | 'column' | undefined
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | undefined
    alignItems?: 'flex-start' | 'center' | 'flex-end' | undefined
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | undefined
    gap?: number
    width?: number | string
    height?: number | string
    sx?: SxProps<Theme> | undefined
}) {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: direction,
                justifyContent: justifyContent,
                alignItems: alignItems,
                flexWrap: wrap,
                gap: gap,
                width: width,
                height: height,
                ...sx
            }}>
            {children}
        </Box>
    )
}