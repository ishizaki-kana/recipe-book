'use client'

import { apiGet } from "@/lib/fetch";
import { useRouter } from "next/navigation";

/**
 * ログアウト処理
 * 
 * @returns {logout} ログアウト
 */
export function useLogout() {
    const router = useRouter();

    const logout = async () => {
        await apiGet('/auth/logout');
        router.push('/login');
    };

    return { logout };
}