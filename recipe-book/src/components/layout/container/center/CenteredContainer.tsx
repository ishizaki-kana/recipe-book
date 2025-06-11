import { Box } from "@mui/material";
import { ReactNode } from "react";

/**
 * 子要素を上下左右中央に配置するコンテナ
 * 
 * 高さは親要素に依存します。
 * 
 * @param param.children 子要素
 * @returns コンテナ
 */
export default function CenteredContainer({
    children,
    direction,
    gap
}: {
    children: ReactNode
    direction?: 'row' | 'column' | undefined
    gap?: number
}) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                flexDirection: direction,
                gap: gap
            }}>
            {children}
        </Box>
    )
}