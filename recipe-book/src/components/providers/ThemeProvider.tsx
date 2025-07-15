'use client'
import theme from "@/styles/theme";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

/**
 * テーマプロバイダ
 */
export default function ThemeProvider({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    )
}