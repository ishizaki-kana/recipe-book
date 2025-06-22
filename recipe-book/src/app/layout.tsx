import EmotionCacheProvider from "@/components/providers/EmotionCacheProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "@/styles/globals.css";
import { Container } from "@mui/material";
import type { Metadata } from "next";
import { Geist, Noto_Sans_JP } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Noto_Sans_JP({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ログイン",
  description: "わたしのレシピ本",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <EmotionCacheProvider>
          <ThemeProvider>
            <Container sx={{ height: '100vh' }}>
              {children}
            </Container>
          </ThemeProvider>
        </EmotionCacheProvider>
      </body>
    </html >
  );
}
