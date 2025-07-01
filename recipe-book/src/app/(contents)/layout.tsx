import CenteredContainer from "@/components/layout/container/CenteredContainer";
import Header from "@/components/layout/header/Header";
import "@/styles/globals.css";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "RECIPE BOOK",
    description: "わたしのレシピ本",
};

export default async function ContentsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    //const user = await getUserFromAuthToken();
    // TODO : テストデータ
    const user = { id: 'test', name: 'test user', password: 'passtest' };

    // ログイン情報が無効のとき
    if (!user) {
        redirect('/login');
    }

    return (
        <Box sx={{ display: "flex", height: "100%" }}>
            <Header user={user} />
            <Box component={"main"}
                sx={{ width: '100%', height: '100%', pt: 8 }}>
                <CenteredContainer sx={{ py: 2, px: 4, overflow: 'auto' }}>
                    {children}
                </CenteredContainer>
            </Box>
        </Box>
    );
}
