import { PrismaClient } from "@prisma/client";

//グローバルスコープに prisma インスタンスを一時的に保存するためのオブジェクト
//開発環境でファイルの再読み込みが発生した時に PrismaClient の再生成を防ぐ
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ['query']      //実行されるクエリをログ出力
    });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;