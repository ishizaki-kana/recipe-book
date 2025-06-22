import { User } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

/**
 * すべてのユーザーを取得
 * 
 * @returns ユーザーリスト
 */
export async function getAllUsers() {
    return await prisma.user.findMany();
}

/**
 * ユーザーIDを元に一致するユーザーを取得
 * 
 * @param userId ユーザーID
 * @returns ユーザー
 */
export async function getUserById(userId: string) {
    return await prisma.user.findUnique({
        where: { userId }
    });
}

/**
 * ユーザー新規登録
 * 
 * @param data データ
 * @returns 新規登録されたユーザーデータ
 */
export async function createUser(data: User) {
    return await prisma.user.create({
        data
    });
}

/**
 * ユーザー更新
 * 
 * @param userId ユーザーID
 * @param data データ
 * @returns 更新されたユーザーデータ
 */
export async function updateUser(userId: string, data: User) {
    return await prisma.user.update({
        where: { userId },
        data
    });
}

/**
 * ユーザー削除
 * 
 * @param userId ユーザーID
 * @returns 削除されたユーザーデータ
 */
export async function deleteUser(userId: string) {
    return await prisma.user.delete({
        where: { userId }
    });
}