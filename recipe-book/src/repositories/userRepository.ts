import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

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
 * @param id ユーザーID
 * @returns ユーザー
 */
export async function getUserById(id: string) {
    return await prisma.user.findUnique({
        where: { id }
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
 * @param id ユーザーID
 * @param data データ
 * @returns 更新されたユーザーデータ
 */
export async function updateUser(id: string, data: User) {
    return await prisma.user.update({
        where: { id },
        data
    });
}

/**
 * ユーザー削除
 * 
 * @param id ユーザーID
 * @returns 削除されたユーザーデータ
 */
export async function deleteUser(id: string) {
    return await prisma.user.delete({
        where: { id }
    });
}