import { useRouter } from 'next/navigation';

export function useNavigation() {
    const router = useRouter();

    /**
     * 画面遷移
     * 
     * @param path パス
     */
    const navigateTo = (path: string) => {
        router.push(path);
    }

    return { navigateTo }
}