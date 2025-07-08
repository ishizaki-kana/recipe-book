import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { prisma } from "../db/prisma";

/**
 * 汎用的なリポジトリを作成
 * 
 * @template T モデルの型（id フィールド必須）
 * @template PrismaArgs Prisma クエリ引数型
 * @param model PrismaClient のモデル名
 * @param revalidateTarget キャッシュ再検証対象のパス
 * @returns リポジトリ
 */
export function createRepository<
    T extends { id: any },
    PrismaArgs = any
>(
    model: keyof PrismaClient,
    revalidateTarget: string
) {
    const repo = prisma[model] as any;

    return {
        /**
         * 全レコードの取得
         * 
         * @param args クエリ引数 (select, include)
         * @returns 全レコード
         */
        findAll: async (args?: PrismaArgs): Promise<T[]> => {
            return await repo.findMany(args);
        },
        /**
         * 条件に基づく全レコードの取得
         * 
         * @param conditions 条件
         * @param args クエリ引数 (select, include)
         * @returns 条件が一致する全レコード
         */
        findAllByConditions: async (conditions: Partial<T>, args?: PrismaArgs): Promise<T[]> => {
            return await repo.findMany({ where: conditions, ...(args || {}) });
        },
        /**
         * IDに基づくレコードの取得
         * 
         * @param id ID
         * @param args クエリ引数 (select, include)
         * @returns IDが一致するレコード
         */
        findById: async (id: T['id'], args?: PrismaArgs): Promise<T | null> => {
            return await repo.findUnique({ where: { id }, ...(args || {}) });
        },
        /**
         * レコード新規作成
         * 
         * @param data 作成するデータ
         * @returns 作成されたレコード
         */
        create: async (data: Partial<T>): Promise<T> => {
            const result = await repo.create({ data });
            revalidatePath(revalidateTarget);
            return result
        },
        /**
         * レコード更新
         * 
         * @param id 更新対象のID
         * @param data 更新するデータ
         * @returns 更新されたレコード
         */
        update: async (id: T['id'], data: Partial<T>): Promise<T> => {
            const result = await repo.update({ where: { id }, data });
            revalidatePath(revalidateTarget);
            return result;
        },
        /**
         * 単一レコード削除
         * 
         * @param id 削除対象のID
         * @returns 削除されたレコード
         */
        delete: async (id: T['id']): Promise<T> => {
            const result = await repo.delete({ where: { id } });
            revalidatePath(revalidateTarget);
            return result;
        },
        /**
         * 複数レコード削除
         * 
         * @param ids 削除対象のIDリスト
         * @returns 削除されたレコードリスト
         */
        deleteAll: async (ids: T['id'][]): Promise<T> => {
            const result = await repo.deleteMany({ where: { id: { in: ids } } });
            revalidatePath(revalidateTarget);
            return result;
        }
    }
}