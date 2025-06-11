import Header from "@/components/layout/header/Header";
import "@/styles/globals.css";
import { Box } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "RECIPE BOOK",
    description: "わたしのレシピ本",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Box sx={{ display: "flex" }}>
            <Header />
            <Box component={"main"} sx={{ p: 3, pt: 10 }}>
                {children}
            </Box>
        </Box>
    );
}
