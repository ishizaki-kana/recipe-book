import { ERROR_MESSAGES } from '@/lib/constants/messages';
import { apiPost } from '@/lib/fetch';
import { ListItem } from '@prisma/client';
import { categorizedItem, CreateFormInput } from '../type';

export function useItemListActions(
    categorizedItems: categorizedItem[],
    stateActions: {
        add: (item: ListItem) => void
        toggleAll: (ids: number[], isDone: boolean) => void
        removeAll: (ids: number[]) => void
    },
    setError: (msg: string) => void
) {

    const create = async (data: CreateFormInput) => {
        try {

            // リストアイテム追加
            const item: ListItem = await apiPost('/list-item/create', { data: data });
            stateActions.add(item);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    const toggle = async (id: number, isDone: boolean, onFinally: () => void) => {
        try {

            // リストアイテム完了状態更新
            await apiPost('/list-item/update', { id, data: { isDone } });
            stateActions.toggleAll([id], isDone);
        } catch (e) {
            setError(ERROR_MESSAGES.UPDATE_FAILED);
        } finally {
            onFinally();
        }
    }
}