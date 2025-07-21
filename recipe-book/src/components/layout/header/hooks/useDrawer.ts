import { useState } from 'react';

export function useDrawer() {

    //ドロワーの開閉状態
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    /**
     * ドロワー非表示
     * @returns {void}
     */
    const closeDrawer = () => setDrawerOpen(false);

    /**
     * ドロワー開閉状態切り替え
     * @returns {void}
     */
    const toggleDrawer = () => setDrawerOpen(prev => !prev);

    return {
        drawerOpen,
        closeDrawer,
        toggleDrawer
    }
}