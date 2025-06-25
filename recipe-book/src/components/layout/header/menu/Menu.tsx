'use client'

import IconButton from "@/components/ui/button/IconButton";
import { User } from "@/generated/prisma";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavDrawer from "./dawer/NavDrawer";

const navLinks = [
    { text: 'レシピ', path: '/recipe' },
    { text: 'カレンダー', path: '/calendar' },
    { text: '買い物リスト', path: '/list' }];

export default function Menu({
    user
}: {
    user: User
}) {

    //ドロワーの開閉状態
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    /**
     * ドロワー開閉イベント
     */
    const handleDrawerToggle = () => {
        setDrawerOpen((prevState) => !prevState);
    };

    return (
        <>
            <IconButton
                icon={<MenuIcon />}
                color="inherit"
                aria-label="メニューを開く"
                edge="start"
                sx={{ mr: 2 }}
                onClick={handleDrawerToggle} />

            <NavDrawer
                user={user}
                navLinks={navLinks}
                drawerOpen={drawerOpen}
                handleDrawerToggle={handleDrawerToggle}
                closeDrawer={() => setDrawerOpen(false)} />
        </>
    )
}