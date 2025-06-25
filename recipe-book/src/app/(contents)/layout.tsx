import Header from "@/components/layout/header/Header";
import { getUserFromAuthToken } from "@/lib/auth";
import "@/styles/globals.css";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "RECIPE BOOK",
    description: "わたしのレシピ本",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const user = await getUserFromAuthToken();

    // ログイン情報が無効のとき
    if (!user) {
        redirect('/login');
    }

    return (
        <Box sx={{ display: "flex" }}>
            <Header user={user} />
            <Box component={"main"} sx={{ p: 3, pt: 12, pb: 5 }} width={"100%"} height={"100vh"}>
                {children}
            </Box>
        </Box>
    );
}
